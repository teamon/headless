defmodule Demo.PageHTML do
  use Demo, :html

  alias Demo.Storybook

  embed_templates "page_html/*"

  def component_name(%{fun: fun}), do: fun
end
