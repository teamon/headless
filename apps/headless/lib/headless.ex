defmodule Headless do
  use Phoenix.Component, global_prefixes: ~w(x-)

  @components [:avatar, :clipboard, :popover, :toggle]

  @doc false
  def components, do: Enum.into(@components, %{}, &{&1, apply(__MODULE__, &1, [])})

  @doc """
  Avatar component

  ## Elements

  - `root` - root element
  - `image` - `<img>` element
  - `fallback` - fallback element

  ## Example

      defmodule ExampleAvatarComponents do
        use Phoenix.Component
        import Headless

        attr :src, :any
        attr :alt, :any
        attr :initials, :string

        def avatar(assigns) do
          ~H\"\"\"
          <.use_avatar :let={a} src={@src}>
            <div {a.root}>
              <img {a.image} alt={@alt} />
              <div {a.fallback}><%= @initials %></div>
            </div>
          </.use_avatar>
          \"\"\"
        end

        def example(assigns) do
          ~H\"\"\"
          <.avatar src="https://example.com/avatar.jpg" alt="Avatar" initials="JD" />
          <.avatar src={nil} alt="Avatar" initials="JD" />
          \"\"\"
        end
      end
  """

  attr :src, :string, doc: "Image source URL"
  slot :inner_block, required: true

  def use_avatar(assigns), do: make(assigns, avatar())

  @doc false
  def avatar do
    %{
      root: %{
        "x-data" => "hs_avatar"
      },
      image: %{
        "x-bind" => "image",
        "data-src" => :src
      },
      fallback: %{
        "x-bind" => "fallback"
      }
    }
  end

  @doc """
  Popover component

  ## Elements

  - `root` - root element
  - `trigger` - element that triggers the popover
  - `content` - element that contains the popover content

  ## Example

      defmodule ExamplePopoverComponents do
        use Phoenix.Component
        import Headless

        slot :trigger
        slot :content

        def popover(assigns) do
          ~H\"\"\"
          <.use_popover :let={p}>
            <div {p.root}>
              <button {p.trigger}>
                <%= render_slot(@trigger) %>
              </button>
              <div {p.content}>
                <%= render_slot(@content) %>
              </div>
            </div>
          </.use_popover>
          \"\"\"
        end

        def example(assigns) do
          ~H\"\"\"
          <.popover>
            <:trigger>
              Open
            </:trigger>
            <:content>
              Hidden message
            </:content>
          </.popover>
          \"\"\"
        end
      end
  """

  slot :inner_block, required: true

  def use_popover(assigns), do: make(assigns, popover())

  @doc false
  def popover do
    %{
      root: %{
        "x-data" => "hs_popover",
        "x-bind" => "root"
        # "id" => "hs-popover-#{:rand.uniform(1000)}"
      },
      trigger: %{
        "x-bind" => "trigger",
        "aria-haspopup" => "dialog"
      },
      content: %{
        "x-bind" => "content",
        "role" => "dialog",
        "tabindex" => "-1",
        "style" => "display: none;"
      }
    }
  end

  @doc """
  Toggle (switch) component.

  Uses regular checkbox input under the hood.

  ## Elements

  - `input` - the underlying checkbox element

  ## Example

      defmodule ExampleToggleComponents do
        use Phoenix.Component
        import Headless

        def toggle(assigns) do
          ~H\"\"\"
          <.use_toggle :let={t}>
            <.input {t.input} field={@field}/>
          </.use_toggle>
          \"\"\"
        end

        def example(assigns) do
          ~H\"\"\"
          <.toggle field={@form[:is_admin]}/>
          \"\"\"
        end
      end
  """

  slot :inner_block, required: true

  def use_toggle(assigns), do: make(assigns, toggle())

  @doc false
  def toggle do
    %{
      input: %{
        "type" => "checkbox",
        "role" => "switch"
      }
    }
  end

  @doc """
  Clipboard component.

  Provides copy to clipboard functionality.

  ## Elements

  - `root` - root element
  - `trigger` - element that triggers the clipboard action
  - `content` - element that contains the clipboard content

  ## Example

      defmodule ExampleClipboardComponents do
        use Phoenix.Component
        import Headless

        attr :text, :string

        def copy_to_clipboard(assigns) do
          ~H\"\"\"
          <.use_clipboard :let={c}>
            <div {c.root}>
              <input {c.content} type="text" value={@text} readonly/>
              <button {c.trigger}>Copy</button>
            </div>
          </.use_clipboard>
          \"\"\"
        end

        def example(assigns) do
          ~H\"\"\"
          <.copy_to_clipboard text="Secrets"/>
          \"\"\"
        end
      end
  """

  slot :inner_block, required: true

  def use_clipboard(assigns), do: make(assigns, clipboard())

  @doc false
  def clipboard do
    %{
      root: %{
        "x-data" => "hs_clipboard"
      },
      trigger: %{
        "x-bind" => "trigger"
      },
      content: %{
        "x-bind" => "content"
      }
    }
  end

  @doc """
  Render input for a form field.

  Heavily based on default Phoenix generated CoreComponents

  ### Text input
      <.input field={@form[:name]} type="text" placeholder="Name"/>

  ### Checkbox
      <.input field={@form[:is_admin]} type="checkbox"/>
  """
  attr :field, Phoenix.HTML.FormField,
    doc: "a form field struct retrieved from the form, for example: <code>@form[:email]</code>"

  attr :id, :string, default: nil
  attr :name, :string
  attr :value, :string

  attr :type, :string, default: "text"
  attr :checked, :boolean, doc: "the checked flag for checkbox inputs"
  attr :rest, :global, doc: "additional attributes to be passed to the input element"
  slot :inner_block

  def input(%{field: %Phoenix.HTML.FormField{} = field} = assigns) do
    assigns
    |> assign(field: nil, id: assigns.id || field.id)
    |> assign(:errors, field.errors)
    |> assign_new(:name, fn -> field.name end)
    |> assign_new(:value, fn -> field.value end)
    |> input()
  end

  def input(%{type: "checkbox"} = assigns) do
    assigns =
      assign_new(assigns, :checked, fn ->
        Phoenix.HTML.Form.normalize_value("checkbox", assigns[:value])
      end)

    ~H"""
    <input type="hidden" name={@name} value="false" />
    <input type="checkbox" id={@id} name={@name} value="true" checked={@checked} {@rest} />
    """
  end

  def input(assigns) do
    ~H"""
    <input
      type={@type}
      name={@name}
      id={@id}
      value={Phoenix.HTML.Form.normalize_value(@type, @value)}
      {@rest}
    />
    """
  end

  @doc """
  Render input errors

  Heavily based on default Phoenix generated CoreComponents

  Storybook: No errors
      <.input_error field={@form[:name]} :let={{msg, _opts}}>
        <%= msg %>
      </.input_error>

  Storybook: With errors
      <.input_error field={@form[:email]} :let={{msg, _opts}}>
        <%= msg %>
      </.input_error>
  """

  attr :field, Phoenix.HTML.FormField,
    required: true,
    doc: "a form field struct retrieved from the form, for example: <code>@form[:email]</code>"

  slot :inner_block,
    required: true,
    doc: "The default slot will be rendered with <code>{message, options}</code> tuple"

  def input_error(assigns) do
    ~H"""
    <%= for error <- @field.errors do %>
      <%= render_slot(@inner_block, error) %>
    <% end %>
    """
  end

  defp make(assigns, component) do
    render(assigns, component)
  end

  defp render(assigns, nodes) do
    nodes =
      Enum.into(nodes, %{}, fn {node, attrs} ->
        {node,
         Enum.into(attrs, %{}, fn
           {k, s} when is_binary(s) -> {k, s}
           {k, a} when is_atom(a) -> {k, assigns[a]}
         end)}
      end)

    assigns = assign(assigns, nodes: nodes)

    ~H"""
    <%= render_slot(@inner_block, @nodes) %>
    """
  end

  @doc """
  Replace `def` with `defc` to optimize component rendering by inlining static attributes.

  ## Compile-time validation

  Using `defc` will also check in compile-time if the referenced attributes are correct.

  This definition (using `def`) will compile and crash in runtime due to undefined `wrong` node reference.


        def toggle(assigns) do
          ~H\"\"\"
          <.use_toggle :let={t}>
            <.input {t.wrong}/>
          </.use_toggle>
          \"\"\"
        end

        # => ** (KeyError) key :wrong not found in: (...)


  When using `defc` it will not compile:


        defc toggle(assigns) do
          ~H\"\"\"
          <.use_toggle :let={t}>
            <.input {t.wrong}/>
          </.use_toggle>
          \"\"\"
        end

        # => ** (Phoenix.LiveView.Tokenizer.ParseError): Unknwon node "wrong" for component use_toggle


  ## Example
      defmodule ExampleAvatarComponents do
        use Phoenix.Component
        import Headless

        attr :src, :any
        attr :alt, :any
        attr :initials, :string

        defc avatar(assigns) do
          ~H\"\"\"
          <.use_avatar :let={a} src={@src}>
            <div {a.root}>
              <img {a.image} alt={@alt} />
              <div {a.fallback}><%= @initials %></div>
            </div>
          </.use_avatar>
          \"\"\"
        end
      end
  """
  defmacro defc(head, do: body) do
    body =
      Macro.prewalk(body, fn
        {:sigil_H, meta, [{:<<>>, _meta, [expr]}, []]} ->
          options = [
            engine: Headless.Compiler,
            file: __CALLER__.file,
            line: __CALLER__.line + 1,
            caller: __CALLER__,
            indentation: meta[:indentation] || 0,
            source: expr,
            tag_handler: Phoenix.LiveView.HTMLEngine
          ]

          EEx.compile_string(expr, options)

        ast ->
          ast
      end)

    quote do
      def unquote(head) do
        unquote(body)
      end
    end
  end
end
