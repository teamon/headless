import Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :demo, Demo.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "/gF9KTr5xmGxYEIVU3v1x4m67virs0X5ERMR4+a5/h2ustVtKxhEEHgwShDYbf/z",
  server: false
