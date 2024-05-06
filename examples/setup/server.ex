defmodule Headless.Examples.Layouts do
  use Phoenix.Component

  def app(assigns) do
    ~H"""
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="csrf-token" content={Phoenix.Controller.get_csrf_token()} />
        <title>UX</title>

        <style type="text/css">
          body {
            font-family: system-ui, -apple-system, sans-serif;
          }
        </style>

        <script type="text/javascript" src="/phoenix/phoenix.js">
        </script>
        <script type="text/javascript" src="/phoenix_live_view/phoenix_live_view.js">
        </script>
        <script src="https://unpkg.com/alpinejs" defer>
        </script>

        <script type="text/javascript">
          let csrfToken = document
            .querySelector("meta[name='csrf-token']")
            .getAttribute("content");

          let liveSocket = new window.LiveView.LiveSocket("/live", window.Phoenix.Socket, {
            params: { _csrf_token: csrfToken },
            dom: {
              onBeforeElUpdated(from, to) {
                if (from._x_dataStack) {
                  window.Alpine.clone(from, to);
                }
              },
            },
          });

          liveSocket.connect();
        </script>
      </head>

      <body>
        <%= @inner_content %>
      </body>
    </html>
    """
  end
end

defmodule Headless.Examples do
  defmacro __using__(which) when is_atom(which) do
    apply(__MODULE__, which, [])
  end

  def live_view do
    quote do
      use Phoenix.LiveView,
        layout: {Headless.Examples.Layouts, :app}

      use Phoenix.VerifiedRoutes,
        endpoint: Headless.Examples.Endpoint,
        router: Headless.Examples.Router
    end
  end
end

defmodule Headless.Examples.HomeLive do
  use Headless.Examples, :live_view

  def mount(_params, _session, socket) do
    {:ok, socket}
  end

  def render(assigns) do
    ~H"""
    <ul>
      <li><.link href={~p"/toggle"}>Toggle</.link></li>
    </ul>
    """
  end
end

defmodule Headless.Examples.Router do
  use Phoenix.Router
  import Phoenix.LiveView.Router

  pipeline :browser do
    plug :accepts, ["html"]
  end

  scope "/", Headless.Examples do
    pipe_through :browser

    live "/", HomeLive
    live "/toggle", Toggle
  end
end

defmodule Headless.Examples.Endpoint do
  use Phoenix.Endpoint, otp_app: :headless

  socket "/live", Phoenix.LiveView.Socket

  plug Plug.Static, at: "/phoenix", from: :phoenix
  plug Plug.Static, at: "/phoenix_live_view", from: :phoenix_live_view

  plug Plug.Static, at: "/", from: :headless, only: ~w(assets)
  if code_reloading? do
    socket "/phoenix/live_reload/socket", Phoenix.LiveReloader.Socket
    plug Phoenix.LiveReloader
    plug Phoenix.CodeReloader
  end

  plug Headless.Examples.Router
end

defmodule Headless.Examples.Application do
  use Application

  def start(_type, _args) do
    children = [
      Headless.Examples.Endpoint
    ]

    opts = [strategy: :one_for_one, name: Headless.Examples.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
