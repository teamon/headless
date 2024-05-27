defmodule Headless.Compiler do
  @moduledoc false

  defmacro compile(string) do
    quote do
      unquote(
        EEx.compile_string(string,
          file: __ENV__.file,
          engine: __MODULE__,
          module: __MODULE__,
          caller: __CALLER__,
          source: string,
          tag_handler: Phoenix.LiveView.HTMLEngine
        )
      )
    end
  end

  alias Phoenix.LiveView.Tokenizer.ParseError

  ## TAG ENGINE

  @behaviour EEx.Engine

  @impl true
  defdelegate init(opts), to: Phoenix.LiveView.TagEngine

  @impl true
  defdelegate handle_begin(state), to: Phoenix.LiveView.TagEngine

  @impl true
  defdelegate handle_end(state), to: Phoenix.LiveView.TagEngine

  @impl true
  defdelegate handle_text(state, meta, text), to: Phoenix.LiveView.TagEngine

  @impl true
  defdelegate handle_expr(state, marker, expr), to: Phoenix.LiveView.TagEngine

  @impl true
  def handle_body(state) do
    # NOTE: This is not ideal, but it's the easiest way to inline components I could find.

    # call once to validate syntax
    Phoenix.LiveView.TagEngine.handle_body(state)

    # inline
    state = %{state | tokens: inline_components(state)}

    # call second time to compile inlined
    Phoenix.LiveView.TagEngine.handle_body(state)
  end

  ## INLINER

  @known Enum.into(Headless.components(), %{}, fn {name, nodes} ->
           {to_string(name),
            Enum.into(nodes, %{}, fn {name, attrs} -> {to_string(name), attrs} end)}
         end)

  defp inline_components(state) do
    inline_state = %{
      known: @known,
      tokens: [],
      stack: [],
      parent: state
    }

    state.tokens
    |> Enum.reverse()
    |> Enum.reduce(inline_state, &inline/2)
    |> Map.get(:tokens)
  end

  defp inline({:local_component, name, attrs, _meta} = token, state) do
    if nodes = known?(name, state) do
      let =
        case List.keyfind(attrs, ":let", 0) do
          {":let", {:expr, var, _}, _} -> var
          _ -> nil
        end

      entry = %{name: name, let: let, nodes: nodes}
      %{state | stack: [entry | state.stack]}
    else
      inline_attributes(token, state)
    end
  end

  defp inline({:close, :local_component, name, _meta} = token, state) do
    if known?(name, state) do
      [_ | rest] = state.stack
      %{state | stack: rest}
    else
      keep(token, state)
    end
  end

  defp inline({:tag, _tag, _attrs, _meta} = token, state) do
    inline_attributes(token, state)
  end

  defp inline(token, state) do
    keep(token, state)
  end

  defp inline_attributes({type, tag, attrs, meta} = token, state) do
    if state.stack == [] do
      keep(token, state)
    else
      attrs =
        Enum.flat_map(attrs, fn
          {:root, {:expr, expr, _}, meta} = attr ->
            case String.split(expr, ".") do
              [var, node] ->
                case Enum.find(state.stack, &(&1.let == var)) do
                  nil ->
                    [attr]

                  %{name: name, nodes: nodes} ->
                    case Map.fetch(nodes, node) do
                      {:ok, attrs} ->
                        Enum.map(attrs, fn
                          {name, str} when is_binary(str) ->
                            {name, {:string, str, %{delimiter: 34}}, meta}

                          {name, ref} when is_atom(ref) ->
                            {name, {:expr, "@#{ref}", meta}, meta}
                        end)

                      :error ->
                        raise ParseError,
                          line: meta.line,
                          column: meta.column,
                          file: state.parent.file,
                          description:
                            "Unknwon node #{inspect(node)} for component #{name}" <>
                              ParseError.code_snippet(
                                state.parent.source,
                                meta,
                                state.parent.indentation
                              )
                    end
                end

              _ ->
                [attr]
            end

          attr ->
            [attr]
        end)

      keep({type, tag, attrs, meta}, state)
    end
  end

  defp keep(token, state), do: %{state | tokens: [token | state.tokens]}

  defp known?("use_" <> name, state), do: state.known[name]
  defp known?(_name, _state), do: false
end
