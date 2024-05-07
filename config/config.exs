import Config

if config_env() == :dev do
  release? = System.get_env("PLATFORM") == "docker"
  ip = if release?, do: {0, 0, 0, 0}, else: {127, 0, 0, 1}

  config :headless, Headless.Demo.Endpoint,
    url: [host: "localhost"],
    http: [ip: ip, port: 5001],
    adapter: Bandit.PhoenixAdapter,
    live_view: [signing_salt: "aaaaaaaa"],
    secret_key_base: String.duplicate("a", 64),
    check_origin: release?,
    code_reloader: !release?,
    debug_errors: true,
    server: true
end
