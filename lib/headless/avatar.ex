defmodule Headless.Avatar do
  use Phoenix.Component, global_prefixes: ~w(x-)

  import Headless.Utils

  @doc """
  Avatar component

  Storybook: Image
      <Headless.Avatar.avatar1>
        <Headless.Avatar.img src="https://github.com/teamon.png" alt="@teamon"/>
        <Headless.Avatar.fallback>TT</Headless.Avatar.fallback>
      </Headless.Avatar.avatar1>

  Storybook: Missing Image
      <Headless.Avatar.avatar1>
        <Headless.Avatar.img src={nil} alt="@teamon"/>
        <Headless.Avatar.fallback>TT</Headless.Avatar.fallback>
      </Headless.Avatar.avatar1>
  """

  attr :rest, :global
  slot :inner_block

  def avatar1(assigns) do
    ~H"""
    <div x-data="hsAvatar" x-bind="main" {@rest}>
      <%= render_slot(@inner_block) %>
    </div>
    """
  end

  @doc false

  attr :src, :string
  attr :alt, :string, default: ""
  attr :rest, :global

  def img(assigns) do
    ~H"""
    <img :if={@src} x-bind="image" data-src={@src} alt={@alt} {@rest} />
    """
  end

  @doc false

  attr :rest, :global
  slot :inner_block

  def fallback(assigns) do
    ~H"""
    <div x-bind="fallback" {@rest}><%= render_slot(@inner_block) %></div>
    """
  end

  @doc """
  Avatar component

  Storybook: Image
      <Headless.Avatar.avatar2>
        <:image src="https://github.com/teamon.png" alt="@teamon"/>
        <:fallback>TT</:fallback>
      </Headless.Avatar.avatar2>

  Storybook: Missing Image
      <Headless.Avatar.avatar2>
        <:image src={nil} alt="@teamon"/>
        <:fallback>TT</:fallback>
      </Headless.Avatar.avatar2>
  """

  attr :rest, :global

  slot :image, validate_attrs: false
  slot :fallback, validate_attrs: false

  def avatar2(assigns) do
    ~H"""
    <div x-data="hsAvatar" x-bind="main" {@rest}>
      <.dynamic_slot slot={@image} as="img" x-bind="image" data-src={s(@image, :src)} />
      <.dynamic_slot slot={@fallback} as="div" x-bind="fallback" />
    </div>
    """
  end

  defp s(slot, key) do
    rest(slot)[key]
  end

  @doc """
  Avatar component

  Storybook: Image
      <Headless.Avatar.avatar3 :let={a} src="https://github.com/teamon.png">
        <div {a.main}>
          <img {a.image} alt="@teamon" />
          <div {a.fallback}>TT</div>
        </div>
      </Headless.Avatar.avatar3>

  Storybook: Missing Image
      <Headless.Avatar.avatar3 :let={a} src={nil}>
        <div {a.main}>
          <img {a.image} alt="@teamon" />
          <div {a.fallback}>TT</div>
        </div>
      </Headless.Avatar.avatar3>
  """

  attr :src, :string, default: nil
  slot :inner_block

  def avatar3(assigns) do
    use_avatar(assigns)
  end

  def use_avatar(assigns) do
    render(assigns, %{
      main: [
        "x-data": "hsAvatar",
        "x-bind": "main"
      ],
      image: [
        "x-bind": "image",
        "data-src": assigns[:src]
      ],
      fallback: [
        "x-bind": "fallback"
      ]
    })
  end

  defp render(assigns, ctx) do
    assigns = assign(assigns, ctx: ctx)

    ~H"""
    <%= render_slot(@inner_block, @ctx) %>
    """
  end
end
