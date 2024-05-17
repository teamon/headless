defmodule HeadlessTest do
  use ExUnit.Case
  doctest Headless

  describe "Examples" do
    @assigns %{
      form: Phoenix.Component.to_form(%{})
    }

    {:docs_v1, _ann, _lang, _format, _moduledoc, _metadata, docs} = Code.fetch_docs(Headless)

    for doc <- docs do
      with {{:function, name, 1}, _, _, %{"en" => en}, _} <- doc do
        for {:pre, [], [{:code, [], [code], %{}}], %{}} <- ExDoc.Markdown.to_ast(en) do
          if String.starts_with?(String.trim_leading(code), "defmodule") do
            test "#{name}" do
              {{:module, mod, _, _}, _} = Code.eval_string(unquote(code))
              rendered = apply(mod, :example, [@assigns])
              Phoenix.HTML.Safe.to_iodata(rendered)
            end
          end
        end
      end
    end
  end
end
