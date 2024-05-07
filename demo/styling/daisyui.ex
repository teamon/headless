defmodule Headless.Demo.DaisyUI do
  @moduledoc """
  Example of how to use DaisyUI style Headless components.
  """

  use Phoenix.Component, global_prefixes: ~w(x-)

  @doc """
  Avatar component

  Storybook: Image
      <.avatar src="https://github.com/teamon.png" alt="@teamon" initials="TT"/>
      <.avatar src="https://github.com/hodak.png" alt="@hodak" initials="AH"/>

  Storybook: Missing image
      <.avatar src={nil} alt="@teamon" initials="TT"/>

  Storybook: Bad image
      <.avatar src="https://example.com" alt="@teamon" initials="TT"/>

  Storybook: Online / Offline
      <.avatar src="https://github.com/teamon.png" alt="@teamon" initials="TT" online={true}/>
      <.avatar src="https://github.com/teamon.png" alt="@teamon" initials="TT" online={false}/>
  """

  attr :src, :string, default: nil
  attr :alt, :string, default: nil
  attr :online, :boolean, default: nil
  attr :initials, :string

  def avatar(assigns) do
    ~H"""
    <div class="w-12 h-12 rounded-full">
      <Headless.avatar class={[
        "avatar placeholder",
        @online == true && "online",
        @online == false && "offline"
      ]}>
        <Headless.Avatar.img src={@src} alt={@alt} class="rounded-full" />
        <Headless.Avatar.fallback class="bg-neutral text-neutral-content rounded-full w-12">
          <%= @initials %>
        </Headless.Avatar.fallback>
      </Headless.avatar>
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
