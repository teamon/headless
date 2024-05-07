defmodule Headless.Demo.DaisyUI do
  @moduledoc """
  Example of how to use DaisyUI style Headless components.
  """

  use Phoenix.Component, global_prefixes: ~w(x-)

  @doc """
  Avatar component

  Storybook: Image
      <.avatar src="https://github.com/teamon.png" alt="@teamon" initials="TT"/>

  Storybook: Missing image
      <.avatar src={nil} alt="@teamon" initials="TT"/>

  Storybook: Bad image
      <.avatar src="https://example.com" alt="@teamon" initials="TT"/>
  """

  attr :src, :string, default: nil
  attr :alt, :string, default: nil
  attr :initials, :string

  def avatar(assigns) do
    ~H"""
    <div class="avatar">
      <div class="w-12 rounded-full">
        <Headless.avatar src={@src} alt={@alt}>
          <:fallback>
            <div class="bg-accent w-12 h-12 flex items-center justify-center text-xl font-bold">
              <%= @initials %>
            </div>
          </:fallback>
        </Headless.avatar>
      </div>
    </div>
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
    <Headless.toggle field={@field} class="toggle" {@rest} />
    """
  end
end
