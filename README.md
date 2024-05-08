# Headless UI Components for Phoenix

Unstyled, accessible UI components for Phoenix and Phoenix LiveView.
To be styled with the CSS framework of your choice.

## Goals & Rules

- Provide unstyled Phoenix components as building blocks for your own UI components
- If something can be achieved with HTML and CSS only, it should be done with HTML and CSS only (no-JS)
- Where JS is required, use [Alpine.js](http://alpinejs.dev)
- Use [`Alpine.data()`](https://alpinejs.dev/globals/alpine-data) instead of inline markup
- Components must work with standard Phoenix controllers (_dead_ views)
- Components must work with Phoenix LiveView
- Components must work with standard Phoenix forms
- Components must be accessible (aria attributes, keyboard navigation, focus, etc.)

## Components

| Name     | Status         |
| -------- | -------------- |
| Avatar   | ✅ Done        |
| Combobox | 🏗️ In progress |
| Popover  | ✅ Done        |
| Toggle   | ✅ Done        |

## Installation

The package can be installed by adding `headless` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [
    {:headless, "~> 0.1"}
  ]
end
```

## Usage

You should not use Headless components directly but use them as building blocks for your own components.

See [examples](examples) directory for styling examples.

```elixir
defmodule MyAppWeb.Components do
  use Phoenix.Component, global_prefixes: ~w(x-)

  attr :field, Phoenix.HTML.FormField

  def toggle(assigns) do
    ~H"""
    <Headless.toggle field={@field} class="...">
      <span class="...">Toggle</span>
    </Headless.toggle>
    """
  end
end
```

## Development

```bash
# Start development server with examples
mix phx.server
```

## Inspirations

- [headless UI](https://headlessui.com)
- [Sprout UI](https://github.com/TunkShif/sprout_ui)
- [Zig](https://zagjs.com/)
