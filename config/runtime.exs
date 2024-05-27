import Config

if config_env() == :prod do
  config :demo, Demo.Endpoint,
    url: [host: "headless.fly.dev", port: 80],
    http: [ip: {0, 0, 0, 0}, port: 4000],
    secret_key_base: String.duplicate("a", 64),
    server: true
end
