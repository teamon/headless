defmodule Headless do
  use Phoenix.Component, global_prefixes: ~w(x-)

  @doc """
  Avatar component

  Storybook: Image
      <.use_avatar :let={a} src="https://github.com/teamon.png">
        <div {a.root}>
          <img {a.image} alt="@teamon" />
          <div {a.fallback}>TT</div>
        </div>
      </.use_avatar>

  Storybook: Missing Image
      <.use_avatar :let={a} src={nil}>
        <div {a.root}>
          <img {a.image} alt="@teamon" />
          <div {a.fallback}>TT</div>
        </div>
      </.use_avatar>
  """

  attr :src, :string, doc: "Image source URL"

  slot :inner_block,
    required: true,
    doc: """
      The default slot will be rendered with these attributes:
      <ul>
        <li><code>root</code> - the root element attibuted</li>
        <li><code>image</code> - the image element attibuted</li>
        <li><code>fallback</code> - the fallback element attibuted</li>
      </ul>
    """

  def use_avatar(assigns) do
    render(assigns, %{
      root: %{
        "x-data" => "hsAvatar"
      },
      image: %{
        "x-bind" => "image",
        "data-src" => assigns[:src]
      },
      fallback: %{
        "x-bind" => "fallback"
      }
    })
  end

  @doc """
  Avatar component

  Storybook: Default
      <.use_popover :let={p}>
        <div {p.root}>
          <button {p.trigger}>Open</button>
          <div {p.content}>Content</div>
        </div>
      </.use_popover>
  """

  slot :inner_block,
    required: true,
    doc: """
      The default slot will be rendered with these attributes:
      <ul>
        <li><code>root</code> - the root element attibuted</li>
        <li><code>trigger</code> - the trigger element attibuted</li>
        <li><code>content</code> - the content element attibuted</li>
      </ul>
    """

  def use_popover(assigns) do
    render(assigns, %{
      root: %{
        "x-data" => "hsPopover",
        "x-bind" => "root"
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
    })
  end

  @doc """
  Toggle (switch) component.

  Uses regular checkbox input under the hood.

  Storybook: Default
      <.use_toggle :let={t}>
        <.input {t.input} field={@form[:name]}/>
      </.use_toggle>
  """

  slot :inner_block,
    required: true,
    doc: """
      The default slot will be rendered with these attributes:
      <ul>
        <li><code>input</code> - the input element attibuted</li>
      </ul>
    """

  def use_toggle(assigns) do
    render(assigns, %{
      input: %{type: "checkbox", role: "switch"}
    })
  end

  def use_clipboard(assigns) do
    render(assigns, %{
      root: %{
        "x-data" => "hsClipboard",
        "x-bind" => "root"
      },
      trigger: %{
        "x-bind" => "trigger"
      },
      content: %{
        "x-bind" => "content"
      }
    })
  end

  @doc """
  Render input for a form field.

  Heavily based on default Phoenix generated CoreComponents

  Storybook: Text input
      <.input field={@form[:name]} type="text" placeholder="Name"/>

  Storybook: Checkbox
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

  defp render(assigns, ctx) do
    assigns = assign(assigns, ctx: ctx)

    ~H"""
    <%= render_slot(@inner_block, @ctx) %>
    """
  end
end
