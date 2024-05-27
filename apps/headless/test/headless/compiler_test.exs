defmodule Headless.CompilerTest do
  use ExUnit.Case

  require Headless.Compiler
  import Headless

  import Phoenix.LiveViewTest.DOM, only: [t2h: 1, sigil_x: 2]

  defmacrop compile_inlined(template) do
    quote do
      Headless.Compiler.compile(unquote(template))
    end
  end

  defmacro compile_standard(string) do
    quote do
      unquote(
        EEx.compile_string(string,
          file: __ENV__.file,
          engine: Phoenix.LiveView.TagEngine,
          module: __MODULE__,
          caller: __CALLER__,
          source: string,
          tag_handler: Phoenix.LiveView.HTMLEngine
        )
      )
    end
  end

  template = """
    <div class="foo"></div>
  """

  test "ignore non-headless tags" do
    assigns = %{}

    assert %Phoenix.LiveView.Rendered{
             static: [~s|<div class="foo"></div>|]
           } = inline = compile_inlined(unquote(template))

    assert t2h(inline) == ~x"""
           <div class="foo"></div>
           """

    assert t2h(inline) == t2h(compile_standard(unquote(template)))
  end

  template = """
    <.use_toggle :let={t}>
      <input {t.input} class="red"/>
    </.use_toggle>
  """

  test "inline basic use_* component" do
    assigns = %{}

    assert %Phoenix.LiveView.Rendered{
             static: [~s|<input role="switch" type="checkbox" class="red">|]
           } = inline = compile_inlined(unquote(template))

    assert t2h(inline) == ~x"""
           <input role="switch" type="checkbox" class="red"/>
           """

    assert t2h(inline) == t2h(compile_standard(unquote(template)))
  end

  template = """
    <.use_avatar :let={a} src={@src}>
      <div {a.root}>
        <img {a.image} />
        <div {a.fallback}><%= @initials %></div>
       </div>
    </.use_avatar>
  """

  test "pass assigns" do
    assigns = %{
      src: "me.jpg",
      initials: "TT"
    }

    assert %Phoenix.LiveView.Rendered{
             static: [
               ~s|<div x-data="hs_avatar">\n      <img|,
               ~s| x-bind="image">\n      <div x-bind="fallback">|,
               ~s|</div>\n     </div>|
             ]
           } = inline = compile_inlined(unquote(template))

    assert t2h(inline) == ~x"""
           <div x-data="hs_avatar">
             <img x-bind="image" data-src="me.jpg" />
             <div x-bind="fallback">TT</div>
           </div>
           """

    assert t2h(inline) == t2h(compile_standard(unquote(template)))
  end

  test "wrong node" do
    assert_raise Phoenix.LiveView.Tokenizer.ParseError, fn ->
      Code.compile_string("""
      require Headless.Compiler
      Headless.Compiler.compile("<.use_toggle :let={t}><input {t.wrong}/></.use_toggle>")
      """)
    end
  end

  defmodule Components do
    use Phoenix.Component
    import Headless

    def my_toggle1(assigns) do
      assigns = assign(assigns, :x, 1)

      ~H"""
      <.use_toggle :let={t}>
        <input {t.input} class="red" />
        <span><%= @x %></span>
      </.use_toggle>
      """
    end

    defc my_toggle2(assigns) do
      assigns = assign(assigns, :x, 1)

      ~H"""
      <.use_toggle :let={t}>
        <input {t.input} class="red" />
        <span><%= @x %></span>
      </.use_toggle>
      """
    end
  end

  use Phoenix.Component

  test "defc" do
    assigns = %{}

    a = ~H"""
    <Components.my_toggle1 />
    """

    b = ~H"""
    <Components.my_toggle2 />
    """

    assert t2h(a) == t2h(b)
  end
end
