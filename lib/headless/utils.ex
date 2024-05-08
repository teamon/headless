defmodule Headless.Utils do
  use Phoenix.Component

  def slotattr(slot, name, default \\ nil)
  def slotattr([], _name, default), do: default
  def slotattr([entry], name, default), do: Map.get(entry, name, default)

  def rest([entry]), do: Phoenix.Component.assigns_to_attributes(entry)
  def rest([]), do: []

  @doc """
  Render slot as given `:as` tag merging attributes passed to the slot.
  """

  attr :slot, :any, required: true
  attr :as, :string, required: true
  attr :rest, :global

  def dynamic_slot(assigns) do
    rest = assigns_to_attributes(assigns[:rest]) ++ rest(assigns[:slot])
    {as, rest} = Keyword.pop(rest, :as)
    assigns = assign(assigns, as: as || assigns[:as], rest: rest)

    ~H"""
    <.dynamic_tag name={@as} {@rest}>
      <%= for entry <- dbg(@slot), entry.inner_block do %>
        <%= render_slot(entry) %>
      <% end %>
    </.dynamic_tag>
    """
  end
end
