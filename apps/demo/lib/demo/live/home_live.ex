defmodule Demo.HomeLive do
  use Demo, :live_view

  alias Demo.Storybook

  @impl true
  def mount(_params, _session, socket) do
    components = Storybook.extract(Demo.CoreComponents)
    {:ok, assign(socket, component: nil, components: components)}
  end

  @impl true
  def handle_params(%{"fun" => fun}, _uri, socket) do
    component = Enum.find(socket.assigns.components, &(to_string(&1.fun) == fun))
    {:noreply, assign(socket, :component, component)}
  end

  @impl true
  def handle_params(_params, _uri, socket) do
    {:noreply, assign(socket, :component, nil)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div class="flex p-4 gap-4">
      <div class="mr-8">
        <.render_sidebar components={@components} component={@component} />
      </div>

      <div :if={@component} class="w-full">
        <.render_component component={@component} />
      </div>

      <div :if={!@component}>
        <.render_index components={@components} />
      </div>
    </div>
    """
  end

  defp render_sidebar(assigns) do
    ~H"""
    <ul class="menu bg-base-200 w-64 rounded-box">
      <li class="menu-title">Demo Components</li>
      <li>
        <ul class="font-mono">
          <%= for component <- @components do %>
            <li>
              <.link
                patch={~p"/component/#{component.fun}"}
                class={[
                  @component && @component.fun == component.fun && "active"
                ]}
              >
                <%= component.fun %>
              </.link>
            </li>
          <% end %>
        </ul>
      </li>
    </ul>
    """
  end

  defp render_component(assigns) do
    ~H"""
    <div class="space-y-8" id={"c-#{@component.fun}"}>
      <div class="prose">
        <%!-- Name --%>
        <h2>
          <.link class="font-mono" patch={~p"/component/#{@component.fun}"}>
            <%= @component.fun %>
          </.link>
        </h2>
        <p><%= @component.desc %></p>
      </div>

      <div class="grid grid-cols-2 gap-8">
        <div class="space-y-8">
          <div class="prose">
            <h3>Component defintion</h3>
          </div>

          <div class="relative border border-base-500 rounded-lg bg-base-100">
            <div class="text-sm p-5 bg-secondary-content rounded-b-lg overflow-scroll">
              <pre><%= @component.source %></pre>
            </div>
          </div>
        </div>

        <div class="space-y-8">
          <div class="prose">
            <h3>Example usage</h3>
          </div>

          <%= for example <- @component.examples do %>
            <fieldset class="relative border border-base-500 rounded-lg bg-base-100">
              <legend class="absolute text-xs uppercase bg-base-200 text-black-900 px-2">
                <%= example.label %>
              </legend>
              <div class="grid grid-cols-1 pt-2">
                <div class="p-5 bg-base-100 flex gap-4">
                  <%= Storybook.render_code(@component.mod, example.code) %>
                </div>
                <div class="text-sm p-5 bg-secondary-content rounded-b-lg overflow-scroll">
                  <pre><%= example.code %></pre>
                </div>
              </div>
            </fieldset>
          <% end %>
        </div>
      </div>
    </div>
    """
  end

  defp render_index(assigns) do
    ~H"""
    <div class="grid grid-cols-3 gap-10">
      <%= for %{examples: [example | _]} = component <- @components do %>
        <fieldset class="relative border border-base-500 rounded-lg bg-base-100">
          <div class="flex flex-col justify-between h-full rounded-lg">
            <div class="p-5 bg-base-100 flex gap-4  rounded-t-lg">
              <%= Storybook.render_code(component.mod, example.code) %>
            </div>
            <.link patch={"/component/#{component.fun}"}>
              <div class="text-sm p-5 bg-base-200 rounded-b-lg font-mono hover:bg-base-300">
                <%= component.fun %>
              </div>
            </.link>
          </div>
        </fieldset>
      <% end %>
    </div>
    """
  end
end
