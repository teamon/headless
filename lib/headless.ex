defmodule Headless do
  use Phoenix.Component, global_prefixes: ~w(x-)

  @doc """
  Toggle (switch) component.

  Uses regular checkbox input under the hood.

  Example:
      <.toggle field={form[:is_admin]}/>
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
  Combobox (select + search) component.

  This component is built from the ground up to be compatible with Phoenix LiveView
  including dynamicly changing the list of options.
  Under the hood this component uses a hidden input to store the selected value
  to ensure seamless integration with Phoenix forms.
  Options are rendered server-side using `:option` slot.
  The client-side dropdown and search functionality is provided by Alpine.js
  operating directly on the rendered DOM.

  Features supported:
  - Client-side search
  - Keyboard navigation (arrows)
  - Keyboard selection (enter)
  - Mouse selection (click)

  Example:
      <.combobox field={form[:user_id]} options={@users} value={&1 &1.id} searchkey={& [&1.name, &1.email]}>
        <:selected :let={user}><%= user.name %></:selected>
        <:option :let={user}><%= user.name %> - <%= user.email %></:option>
      </.combobox>

  """

  attr :field, Phoenix.HTML.FormField
  attr :options, :list
  attr :value, :any, doc: "Function returning value for option"
  attr :searchkey, :any, doc: "Function returning search key for option"
  attr :class, :any, default: nil
  attr :rest, :global

  slot :selected, doc: "Slot rendering the selected option" do
    attr :class, :any
  end

  slot :option, doc: "Slot rendering option inside the panel"

  slot :placeholder, doc: "Placeholder shown when no option is selected" do
    attr :class, :any
  end

  slot :button, doc: "Button that opens the panel" do
    attr :class, :any
  end

  slot :search, doc: "Search input" do
    attr :class, :any
    attr :placeholder, :string
  end

  slot :panel, doc: "Container for options" do
    attr :class, :any
  end

  def combobox(assigns) do
    ~H"""
    <div x-data="headlesscombobox()" x-bind="main" class={@class} {@rest}>
      <!-- Button -->
      <button x-bind="button" type="button" class={slotattr(@button, :class)}>
        <%= for slot <- @placeholder do %>
          <span x-show="selected === null || selected === ''" class={slot[:class]}>
            <%= render_slot(slot) %>
          </span>
        <% end %>

        <%= for option <- @options do %>
          <span
            x-data={data(value: to_string(@value.(option)))}
            x-show="isSelected()"
            class={@selected[:class]}
            style="display: none"
          >
            <%= render_slot(@selected, option) %>
          </span>
        <% end %>

        <%= render_slot(@button) %>
      </button>
      <!-- Search Input -->
      <input
        x-bind="search"
        style="display: none"
        type="text"
        placeholder={slotattr(@search, :placeholder)}
        class={slotattr(@search, :class)}
      />
      <!-- Hidden input -->
      <.input field={@field} type="hidden" x-bind="input" />
      <!-- Panel -->
      <ul x-bind="panel" style="display: none" class={slotattr(@panel, :class)}>
        <%= for {option, index} <- Enum.with_index(@options) do %>
          <li
            x-data={
              data(
                index: index,
                key: to_string(@searchkey.(option)),
                value: to_string(@value.(option))
              )
            }
            x-bind="option"
          >
            <%= render_slot(@option, option) %>
          </li>
        <% end %>
      </ul>
    </div>
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
