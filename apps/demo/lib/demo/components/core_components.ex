defmodule Demo.CoreComponents do
  @moduledoc """
  Example of how to use Headless components.
  """

  use Phoenix.Component

  import Headless

  @doc """
  Avatar component

  Storybook: Image
      <.avatar src="https://github.com/teamon.png" alt="@teamon" initials="TT"/>
      <.avatar src={nil} alt="@hodak" initials="AH"/>

  Storybook: Missing image
      <.avatar src={nil} alt="@teamon" initials="TT"/>

  Storybook: Bad image
      <.avatar src="https://example.com" alt="@teamon" initials="TT"/>
      <script type="text/javascript">console.log("avatar init")</script>
  """

  attr :src, :string, default: nil
  attr :alt, :string, default: nil
  attr :initials, :string
  attr :id, :string, default: nil

  defc avatar(assigns) do
    ~H"""
    <.use_avatar :let={a} src={@src}>
      <div id={@id} class="w-12 h-12 rounded-full">
        <div {a.root} class="avatar placeholder">
          <img {a.image} alt={@alt} class="rounded-full" />
          <div {a.fallback} class="bg-neutral text-neutral-content rounded-full w-12">
            <%= @initials %>
          </div>
        </div>
      </div>
    </.use_avatar>
    """
  end

  @doc """
  Popover component

  Storybook: Basic
      <.popover>
        <:trigger>
          Open
        </:trigger>
        <:content>
          Hidden content
        </:content>
      </.popover>
  """

  attr :id, :string, default: nil
  slot :trigger
  slot :content

  defc popover(assigns) do
    ~H"""
    <.use_popover :let={p}>
      <div {p.root}>
        <button {p.trigger} class="btn m-1">
          <%= render_slot(@trigger) %>
        </button>
        <div {p.content} class="shadow absolute z-[1] bg-base-100 rounded-box p-5">
          <%= render_slot(@content) %>
        </div>
      </div>
    </.use_popover>
    """
  end

  @doc """
  Toggle

  Storybook: Default
      <.toggle field={@form[:is_admin]}/>
  """
  attr :field, Phoenix.HTML.FormField, required: true
  attr :rest, :global

  defc toggle(assigns) do
    ~H"""
    <.use_toggle :let={t}>
      <.input {t.input} field={@field} class="toggle" {@rest} />
    </.use_toggle>
    """
  end

  @doc """
  Clipboard

  Storybook: Input
      <.clipboard text="Hello, Input!"/>
  """

  attr :text, :string

  defc clipboard(assigns) do
    ~H"""
    <.use_clipboard :let={c}>
      <div {c.root} class="flex gap-1">
        <input
          {c.content}
          type="text"
          value={@text}
          readonly
          class="input input-bordered w-full max-w-xs"
        />
        <button {c.trigger} class="btn">Copy</button>
      </div>
    </.use_clipboard>
    """
  end

  @doc """
  Text Input

  Storybook: Default
      <.text_input field={@form[:name]} placeholder="Name"/>
      <.error field={@form[:name]}/>

  Storybook: Error
      <label class="form-control w-full max-w-xs">
        <.text_input field={@form[:email]} placeholder="Name"/>
        <.error field={@form[:email]}/>
      </label>
  """

  attr :field, Phoenix.HTML.FormField, required: true
  attr :rest, :global

  def text_input(assigns) do
    ~H"""
    <.input
      type="text"
      field={@field}
      class={[
        "input input-bordered w-full max-w-xs",
        @field.errors != [] && "input-error text-error"
      ]}
      {@rest}
    />
    """
  end

  @doc """
  Error label

  Storybook: With errors
      <.error field={@form[:email]}/>

  Storybook: No errors
      <.error field={@form[:name]}/>
  """

  attr :field, Phoenix.HTML.FormField, required: true
  attr :rest, :global

  def error(assigns) do
    ~H"""
    <.input_error :let={e} field={@field}>
      <div class="label" {@rest}>
        <span class="label-text-alt text-error"><%= translate_error(e) %></span>
      </div>
    </.input_error>
    """
  end

  defp translate_error({msg, _opts}) do
    # Put Gettext here
    msg
  end
end
