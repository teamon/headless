defmodule Headless.Examples.Toggle do
  use Headless.Examples, :live_view
  alias Headless.Examples.User

  import Headless.Examples.Tailwind

  def mount(_params, _session, socket) do
    {:ok, assign(socket, :form, to_form(User.changeset(%{})))}
  end

  def handle_event("validate", %{"user" => params}, socket) do
    form =
      %User{}
      |> User.changeset(params)
      |> Map.put(:action, :insert)
      |> to_form()

    {:noreply, assign(socket, :form, form)}
  end

  def render(assigns) do
    ~H"""
    <.styles />

    <.form :let={f} for={@form} phx-change="validate" phx-submit="save">
      <p class="p-5">
        <label for={f[:is_admin].id}>Admin? (toggle)</label>
        <.toggle field={f[:is_admin]} />
      </p>

      <p class="p-5">
        <label for={f[:is_blocked].id}>Blocked? (checkbox)</label>
        <Headless.input field={f[:is_blocked]} type="checkbox" />
      </p>

      <pre><%= inspect(@form, pretty: true) %></pre>
    </.form>
    """
  end
end
