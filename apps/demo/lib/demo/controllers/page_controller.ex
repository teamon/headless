defmodule Demo.PageController do
  use Demo, :controller

  alias Demo.Storybook

  def home(conn, _params) do
    components = Storybook.extract(Demo.CoreComponents)
    render(conn, :home, components: components)
  end
end
