# Headless

**TODO: Add description**

## Installation

If [available in Hex](https://hex.pm/docs/publish), the package can be installed
by adding `headless` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [
    {:headless, "~> 0.1.0"}
  ]
end
```

Documentation can be generated with [ExDoc](https://github.com/elixir-lang/ex_doc)
and published on [HexDocs](https://hexdocs.pm). Once published, the docs can
be found at <https://hexdocs.pm/headless>.

## Update bundled Alpine

```
curl -L https://unpkg.com/@alpinejs/csp/dist/module.cjs.js > ./apps/headless/assets/vendor/alpine.js
```
