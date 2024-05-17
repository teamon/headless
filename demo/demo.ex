defmodule Headless.Demo.Layouts do
  use Phoenix.Component

  def root(assigns) do
    ~H"""
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.10.5/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://cdn.tailwindcss.com?plugins=typography">
        </script>

        <script src="/assets/avatar.js">
        </script>
        <script src="/assets/clipboard.js">
        </script>
        <script src="/assets/popover.js">
        </script>

        <%!-- <script src="https://unpkg.com/alpinejs" defer>
        </script> --%>
        <script defer src="https://cdn.jsdelivr.net/npm/@alpinejs/csp@3.x.x/dist/cdn.min.js">
        </script>
      </head>
      <body class="bg-gray-50 min-h-screen">
        <%= @inner_content %>
      </body>
    </html>
    """
  end
end

defmodule Headless.Demo.Router do
  use Phoenix.Router

  import Phoenix.LiveView.Router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :put_root_layout, {Headless.Demo.Layouts, :root}
  end

  scope "/" do
    pipe_through :browser

    live_session :storybook do
      live "/", Headless.Demo.Storybook
      live "/:id", Headless.Demo.Storybook
    end
  end
end

defmodule Headless.Demo.Endpoint do
  use Phoenix.Endpoint, otp_app: :headless

  @session_options [
    store: :cookie,
    key: "_demo_key",
    signing_salt: "789yoasfd",
    same_site: "Lax"
  ]

  socket("/live", Phoenix.LiveView.Socket, websocket: [connect_info: [session: @session_options]])

  plug Plug.Static, at: "/", from: :headless, only: ~w(assets)

  # plug Plug.Static, at: "/phoenix_live_view", from: :phoenix_live_view
  if code_reloading? do
    socket("/phoenix/live_reload/socket", Phoenix.LiveReloader.Socket)
    plug Phoenix.LiveReloader
    plug Phoenix.CodeReloader
  end

  plug Plug.Session, @session_options
  plug Headless.Demo.Router
end

defmodule Headless.Demo.Application do
  use Application

  def start(_type, _args) do
    children = [
      Headless.Demo.Endpoint
    ]

    opts = [strategy: :one_for_one, name: Headless.Demo.Supervisor]
    Supervisor.start_link(children, opts)
  end
end
