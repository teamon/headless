import Config

## headless library config
config :esbuild,
  version: "0.20.2",
  module: [
    args:
      ~w(./js/headless --bundle --format=esm --sourcemap --outfile=../priv/static/headless.esm.js),
    cd: Path.expand("../apps/headless/assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]

## demo app config

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
if Code.ensure_loaded?(Jason) do
  config :phoenix, :json_library, Jason
end

# Configures the endpoint
config :demo, Demo.Endpoint,
  url: [host: "localhost"],
  adapter: Phoenix.Endpoint.Cowboy2Adapter,
  render_errors: [
    formats: [html: Demo.ErrorHTML, json: Demo.ErrorJSON],
    layout: false
  ],
  pubsub_server: Demo.PubSub,
  live_view: [signing_salt: "iJLTxc2w"]

# Configure esbuild (the version is required)
config :esbuild,
  default: [
    args: ~w(
      js/app.js
      --bundle
      --target=es2017
      --outdir=../priv/static/assets
      --external:/fonts/*
      --external:/images/*
    ),
    cd: Path.expand("../apps/demo/assets", __DIR__),
    env: %{
      "NODE_PATH" => Enum.map_join(["../deps", "../apps"], ":", &Path.expand(&1, __DIR__))
    }
  ]

# Configure tailwind (the version is required)
config :tailwind,
  version: "3.3.2",
  default: [
    args: ~w(
      --config=tailwind.config.js
      --input=css/app.css
      --output=../priv/static/assets/app.css
    ),
    cd: Path.expand("../apps/demo/assets", __DIR__)
  ]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{config_env()}.exs"
