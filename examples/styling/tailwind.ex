defmodule Headless.Examples.Tailwind do
  use Phoenix.Component, global_prefixes: ~w(x-)

  attr :field, Phoenix.HTML.FormField
  attr :class, :any, default: nil
  attr :rest, :global

  def toggle(assigns) do
    ~H"""
    <Headless.toggle field={@field} class={["relative", @class]} {@rest}>
      <:input class={~w(peer appearance-none absolute left-0 top-0 w-full h-full rounded-md)}/>

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

  # NOTE: This is just an example, do not use this in production
  #       Use tailwind compiler that comes with Phoenix
  def styles(assigns) do
    ~H"""
    <script src="https://unpkg.com/tailwindcss-cdn@3.4.1/tailwindcss.js"></script>
    """
  end
end
