defmodule Demo.CrashLive do
  use Phoenix.LiveView

  @impl true
  def mount(_params, _session, socket) do
    {:ok, socket}
  end

  @impl true
  def handle_params(%{"component" => component}, _uri, socket) do
    {:noreply, assign(socket, :component, component)}
  end

  @impl true
  def handle_params(%{}, _uri, socket) do
    {:noreply, assign(socket, :component, nil)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div class="p-10 space-y-10">
      <div>
        Switch beteen Popver and Avatar components and observe console for errors.
      </div>
      <div>
        <.link class="link" patch="/crash?component=popover">Popover</.link>
        <.link class="link" patch="/crash?component=avatar">Avatar</.link>
      </div>

      <%= case @component do %>
        <% "avatar" -> %>
          <div class="w-12 h-12 rounded-full">
            <div x-data="hsAvatar" class="avatar placeholder">
              <img
                x-bind="image"
                data-src="https://github.com/teamon.png"
                alt="Avatar"
                class="rounded-full"
              />
              <div x-bind="fallback" class="bg-neutral text-neutral-content rounded-full w-12">
                TT
              </div>
            </div>
          </div>
        <% "popover" -> %>
          <div x-data="hsPopover" x-bind="root">
            <button x-bind="trigger" class="btn m-1">Open</button>
            <div x-bind="content" class="shadow absolute z-[1] bg-base-100 rounded-box">
              <div class="p-5">Secrets</div>
            </div>
          </div>
        <% _ -> %>
      <% end %>
    </div>
    """
  end
end
