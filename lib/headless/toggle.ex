defmodule Headless.Toggle do
  use Phoenix.Component, global_prefixes: ~w(x-)

  @doc """
  Toggle (switch) component.

  Uses regular checkbox input under the hood.

  Storybook: Default
      <.toggle field={@form[:is_admin]}/>
  """

  attr :field, Phoenix.HTML.FormField, required: true
  attr :class, :any, default: nil
  attr :rest, :global

  def toggle(assigns) do
    ~H"""
    <Headless.input type="checkbox" role="switch" field={@field} {@rest} class={@class} />
    """
  end
end
