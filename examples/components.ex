defmodule Headless.Examples.Components do
  use Phoenix.Component, global_prefixes: ~w(x-)

  # NOTE: This is how you would define custom component in your app

  # Import styled UI components
  import Headless.Examples.Tailwind

  attr :field, Phoenix.HTML.FormField
  attr :users, :list

  def users_combobox(assigns) do
    ~H"""
    <.combobox field={@field} options={@users} value={& &1.id} searchkey={&[&1.name, &1.email]}>
      <:placeholder>Select user</:placeholder>

      <:selected :let={user}>
        <%= user.name %>
      </:selected>

      <:option :let={user}>
        <div><%= user.name %></div>
        <div class="text-gray-700 ml-3"><%= user.email %></div>
      </:option>
    </.combobox>
    """
  end
end
