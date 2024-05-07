defmodule Headless.Avatar do
  use Phoenix.Component, global_prefixes: ~w(x-)

  @doc """
  Avatar component

  Storybook: Image
      <.avatar src="https://github.com/teamon.png" alt="@teamon" />

  Storybook: Missing image
      <.avatar src={nil} alt="@teamon">
        <:fallback>TT</:fallback>
      </.avatar>

  Storybook: Bad image
      <.avatar src="https://example.com" alt="@teamon">
        <:fallback>TT</:fallback>
      </.avatar>
  """

  attr :src, :string, default: nil
  attr :alt, :string, default: nil
  slot :fallback

  def avatar(assigns) do
    ~H"""
    <span x-data="hsAvatar">
      <img :if={@src} x-bind="image" src={@src} alt={@alt} />
      <span x-bind="fallback"><%= render_slot(@fallback) %></span>
    </span>
    """
  end
end
