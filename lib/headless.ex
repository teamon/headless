defmodule Headless do
  use Phoenix.Component, global_prefixes: ~w(x-)

  @doc """
  Toggle (switch) component.

  Uses regular checkbox input under the hood.
  """

  attr :field, Phoenix.HTML.FormField, required: true
  attr :rest, :global

  slot :inner_block, required: true

  slot :input do
    attr :class, :any
  end

  def toggle(assigns) do
    ~H"""
    <label {@rest}>
      <.input type="checkbox" role="switch" field={@field} {@rest} class={slotattr(@input, :class)} />
      <%= render_slot(@inner_block) %>
    </label>
    """
  end

  @doc """
  Render input for a form field.

  Heavily based on default Phoenix generated CoreComponents
  """
  attr :field, Phoenix.HTML.FormField

  attr :id, :any, default: nil
  attr :name, :any
  attr :value, :any

  attr :type, :string, default: "text"
  attr :checked, :boolean, doc: "the checked flag for checkbox inputs"
  attr :rest, :global
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

  defp data(keyword), do: Jason.encode!(Enum.into(keyword, %{}))

  defp slotattr(slot, name, default \\ nil)
  defp slotattr([], _name, default), do: default
  defp slotattr([entry], name, default), do: Map.get(entry, name, default)
end
