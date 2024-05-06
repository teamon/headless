import Config

if config_env() == :dev do
  config :headless, Headless.Examples.Endpoint,
    url: [host: "localhost"],
    http: [ip: {127, 0, 0, 1}, port: 5001],
    adapter: Bandit.PhoenixAdapter,
    live_view: [signing_salt: "aaaaaaaa"],
    secret_key_base: String.duplicate("a", 64),
    check_origin: false,
    code_reloader: true,
    debug_errors: true
end
