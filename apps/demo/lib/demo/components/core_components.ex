defmodule Demo.CoreComponents do
  @moduledoc """
  Example of how to use Headless components.
  """

  use Phoenix.Component, global_prefixes: ~w(x-)

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

  def avatar(assigns) do
    ~H"""
    <.use_avatar :let={a} src={@src}>
      <div class="w-12 h-12 rounded-full">
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
          <ul class="menu">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </:content>
      </.popover>
  """

  slot :trigger
  slot :content

  def popover(assigns) do
    ~H"""
    <.use_popover :let={p}>
      <div {p.root}>
        <button {p.trigger} class="btn m-1">
          <%= render_slot(@trigger) %>
        </button>
        <div {p.content} class="shadow absolute z-[1] bg-base-100 rounded-box">
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

  def toggle(assigns) do
    ~H"""
    <.use_toggle :let={t}>
      <.input {t.input} field={@field} class="toggle" {@rest} />
    </.use_toggle>
    """
  end

  @doc """
  Clipboard

  Storybook: Input
      <.use_clipboard :let={c}>
        <div {c.root} class="flex gap-1">
          <input {c.content} type="text" value="Hello, Input!" readonly class="input input-bordered w-full max-w-xs" />
          <button {c.trigger} class="btn">Copy</button>
        </div>
      </.use_clipboard>

  Storybook: Textarea
      <.use_clipboard :let={c}>
        <div {c.root} class="flex gap-1">
          <textarea {c.content} readonly class="textarea textarea-bordered">Hello, Textarea!</textarea>
          <button {c.trigger} class="btn">Copy</button>
        </div>
      </.use_clipboard>


  Storybook: Any other HTML
      <.use_clipboard :let={c}>
        <div {c.root}>
          <div class="stats shadow">
            <div class="stat">
              <div class="stat-title">Total Page Views</div>
              <div {c.content} class="stat-value">89,400</div>
              <div class="stat-desc">21% more than last month</div>
            </div>
          </div>

          <button {c.trigger} class="btn">Copy stat</button>
        </div>
      </.use_clipboard>


  """
  def clipboard(assigns) do
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
