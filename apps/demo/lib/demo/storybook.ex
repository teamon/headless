defmodule Demo.Storybook do
  defstruct [:mod, :fun, :desc, :examples, :source]

  def source(mod) do
    Enum.to_list(File.stream!(mod.__info__(:compile)[:source]))
  end

  def extract(mod, source) do
    components = mod.__components__()

    {:docs_v1, _ann, _lang, _format, _moduledoc, _metadata, docs} = Code.fetch_docs(mod)
    for doc <- docs, c <- extract_from_doc(doc, mod, {components, source}), do: c
  end

  defp extract_from_doc({{_kind, _name, _arity}, _annotation, _, :none, _}, _, _), do: []
  defp extract_from_doc({{_kind, _name, _arity}, _annotation, _, :hidden, _}, _, _), do: []

  defp extract_from_doc(
         {{:function, name, 1}, _annotation, _signature, %{"en" => doc}, _metadata},
         mod,
         {components, source}
       ) do
    {desc, examples} =
      doc
      |> String.split("## Attributes", trim: false)
      |> List.first()
      |> String.split("## Slots", trim: false)
      |> List.first()
      |> String.split(["\r\n", "\n"], trim: false)
      |> Enum.reduce({[], []}, fn
        "Storybook: " <> label, {desc, examples} ->
          {desc, [{label, []} | examples]}

        "    " <> code, {desc, [{label, codes} | rest]} ->
          {desc, [{label, [code | codes]} | rest]}

        other, {desc, []} ->
          {[other | desc], []}

        _other, acc ->
          acc
      end)

    desc = Enum.join(Enum.reverse(desc), "\n")

    examples =
      examples
      |> Enum.map(fn {label, codes} ->
        code =
          codes
          |> Enum.reverse()
          |> Enum.join("\n")

        %{
          label: label,
          code: code
        }
      end)
      |> Enum.reverse()

    source =
      case components[name] do
        %{line: line} ->
          start = Enum.drop(source, line - 1)
          n = Enum.take_while(start, &(!String.starts_with?(&1, "  end")))

          start
          |> Enum.take(Enum.count(n) + 1)
          |> Enum.map(&String.replace_prefix(&1, "  ", ""))
          |> IO.iodata_to_binary()

        _ ->
          ""
      end

    # dbg(source)

    [
      %__MODULE__{
        mod: mod,
        fun: name,
        desc: desc,
        examples: examples,
        source: source
      }
    ]
  end

  def render_code(mod, code) do
    options = [
      caller: __ENV__,
      engine: Phoenix.LiveView.TagEngine,
      tag_handler: Phoenix.LiveView.HTMLEngine,
      source: code
    ]

    imports = [
      {mod, mod.__info__(:functions)},
      {Headless, Headless.__info__(:functions)},
      {Phoenix.Component, Phoenix.Component.__info__(:functions)}
    ]

    ast = EEx.compile_string(code, options)
    env = %{__ENV__ | functions: imports}
    {code, _} = Code.eval_quoted(ast, [assigns: default_assigns()], env)
    code
  end

  defmodule User do
    defstruct [:name, :email, :age, :is_admin]
  end

  defp default_assigns do
    data = %User{}
    types = %{name: :string, avatar: :string, email: :string, age: :integer, is_admin: :boolean}
    params = %{}

    changeset =
      {data, types}
      |> Ecto.Changeset.cast(params, Map.keys(types))
      |> Ecto.Changeset.validate_required([:email])
      |> Map.put(:action, :insert)

    form = Phoenix.Component.to_form(changeset)

    %{
      form: form,
      changeset: changeset
    }
  end
end
