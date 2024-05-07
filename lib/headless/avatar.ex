defmodule Headless.Avatar do
  use Phoenix.Component, global_prefixes: ~w(x-)

  @doc """
  Avatar component

  Storybook: Image
      <Headless.Avatar.avatar>
        <Headless.Avatar.img src="https://github.com/teamon.png" alt="@teamon"/>
        <Headless.Avatar.fallback>TT</Headless.Avatar.fallback>
      </Headless.Avatar.avatar>

  Storybook: Missing Image
      <Headless.Avatar.avatar>
        <Headless.Avatar.img src={nil} alt="@teamon"/>
        <Headless.Avatar.fallback>TT</Headless.Avatar.fallback>
      </Headless.Avatar.avatar>
  """

  attr :rest, :global
  slot :inner_block

  def avatar(assigns) do
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

  # attr :src, :string, default: nil
  # attr :alt, :string, default: nil
  # attr :rest, :global
  # slot :fallback
  # slot :img

  # def avatar(assigns) do
  #   ~H"""
  #   <div x-data="hsAvatar" x-bind="main" data-src={@src} {@rest}>
  #     <img :if={@src} x-bind="image" alt={@alt} {slotattrs(@img)} />
  #     <div x-bind="fallback"><%= render_slot(@fallback) %></div>
  #   </div>
  #   """
  # end
end
