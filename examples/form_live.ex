defmodule Headless.Examples.FormLive do
  use Headless.Examples, :live_view

  alias Headless.Examples.Project
  alias Headless.Examples.User

  # Import UI library
  import Headless.Examples.Tailwind

  # Import your app components
  import Headless.Examples.Components

  def mount(_params, _session, socket) do
    users = [
      %User{id: 101, name: "Jon Snow", email: "jon@example.com"},
      %User{id: 102, name: "Arya Stark", email: "arya@example.com"},
      %User{id: 103, name: "Robb Stark", email: "robb@example.com"}
    ]

    changeset = Project.changeset(%{user_id: 101})

    {:ok, assign(socket, users: users, form: to_form(changeset))}
  end

  def handle_event("validate", %{"project" => params}, socket) do
    changeset =
      %Project{}
      |> Project.changeset(params)
      |> Map.put(:action, :insert)

    {:noreply, assign(socket, form: to_form(changeset))}
  end

  def handle_event("add-user", _, socket) do
    id = :rand.uniform(10000)
    user = %User{id: id, name: "User #{}", email: "user#{id}@example.com"}
    {:noreply, assign(socket, users: socket.assigns.users ++ [user])}
  end

  def render(assigns) do
    ~H"""
    <!-- NOTE: Do not do this in production - import the JS file in your app.js instead -->
    <script src="/assets/combobox.js">
    </script>
    <!-- NOTE: Do not do this in production - use tailwind compiler the comes with Phoenix -->
    <Headless.Examples.Tailwind.styles />

    <div class="w-96">
      <.form :let={f} for={@form} phx-change="validate" phx-submit="save">
        <div class="p-5">
          <label class="block text-sm pb-2" for={f[:is_public].id}>Is Public? (toggle)</label>
          <.toggle field={f[:is_public]} />
        </div>

        <div class="p-5">
          <label class="block text-sm pb-2" for={f[:user_id].id}>
            Assigned to (combobox)
          </label>

          <.users_combobox field={f[:user_id]} users={@users} />
        </div>
      </.form>

      <div class="p-5">
        <button type="button" phx-click="add-user" class="ring-1 ring-black px-2 py-1 text-sm">
          Add random user to the list above
        </button>
      </div>

      <div class="p-5">
        <label class="block text-sm pb-2">form preview</label>
        <pre class="pt-5 text-sm"><%= inspect(@form, pretty: true) %></pre>
      </div>
    </div>
    """
  end
end
