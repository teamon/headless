import Config

if config_env() == :prod do
  config :demo, Demo.Endpoint,
    http: [ip: {0, 0, 0, 0}, port: 4000],
    secret_key_base: String.duplicate("a", 64),
    server: true
end
