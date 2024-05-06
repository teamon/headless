defmodule Headless.Examples.Tailwind do
  @moduledoc """
  Example of how to use Tailwind CSS top style Headless components.
  """

  use Phoenix.Component, global_prefixes: ~w(x-)

  attr :field, Phoenix.HTML.FormField
  attr :class, :any, default: nil
  attr :rest, :global

  def toggle(assigns) do
    ~H"""
    <Headless.toggle field={@field} class={["relative", @class]} {@rest}>
      <:input class={~w(peer appearance-none absolute left-0 top-0 w-full h-full rounded-md)} />

      <span class={~w(
        relative h-5 w-10 inline-flex items-center flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent
        rounded-full ease-in-out duration-200 bg-gray-200
        focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2
        peer-checked:bg-green-600 peer-checked:after:translate-x-5
        after:h-4 after:w-4 after:transform after:rounded-full after:bg-white
        after:shadow after:ring-0 after:transition after:duration-200 after:ease-in-out
        after:pointer-events-none
      )} />
    </Headless.toggle>
    """
  end

  attr :field, Phoenix.HTML.FormField
  attr :options, :list
  attr :value, :any
  attr :searchkey, :any
  attr :rest, :global

  slot :selected
  slot :placeholder
  slot :option, required: true

  def combobox(assigns) do
    ~H"""
    <Headless.combobox
      field={@field}
      options={@options}
      value={@value}
      searchkey={@searchkey}
      class="relative"
      {@rest}
    >
      <:placeholder>
        <%= render_slot(@placeholder) %>
      </:placeholder>

      <:selected :let={option}>
        <%= render_slot(@selected, option) %>
      </:selected>

      <:button class={~w(
        relative w-full h-10 cursor-default text-sm text-left px-3 pr-10 rounded-md
        ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-black)}>
        <span
          class="pointer-events-none absolute top-0 right-0 inset-y-0 right-2 flex items-center"
          aria-hidden="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-5 w-5 text-gray-500"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
            />
          </svg>
        </span>
      </:button>

      <:search
        placeholder="Type to search"
        class="h-10 w-full cursor-default rounded-md bg-white ring-black px-3 text-sm focus:outline-none focus:ring-2 focus:ring-black"
      >
      </:search>

      <:panel class="text-sm absolute z-10 w-full overflow-auto rounded-b-md bg-white ring-1 ring-black focus:outline-none">
      </:panel>

      <:option :let={option}>
        <div
          x-bind:class="isHighlighted() ? 'bg-gray-100' : 'text-gray-900'"
          class="relative cursor-default flex p-3"
        >
          <span x-bind:class="isSelected() ? 'visible' : 'invisible'" class="inline-block w-6">
            &#x2705;
          </span>
          <%= render_slot(@option, option) %>
        </div>
      </:option>
    </Headless.combobox>
    """
  end

  # NOTE: This is just an example, do not use this in production
  #       Use tailwind compiler that comes with Phoenix
  def styles(assigns) do
    ~H"""
    <script src="https://unpkg.com/tailwindcss-cdn@3.4.1/tailwindcss.js">
    </script>
    """
  end
end
