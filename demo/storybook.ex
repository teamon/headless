defmodule Headless.Demo.Storybook do
  use Phoenix.LiveView

  defmodule User do
    defstruct [:name, :email, :age, :is_admin]
  end

  defp default_assigns do
    data = %User{}
    types = %{name: :string, email: :string, age: :integer, is_admin: :boolean}
    params = %{name: "Callum", email: "callum@example.com", age: 27}

    changeset = Ecto.Changeset.cast({data, types}, params, Map.keys(types))
    form = Phoenix.Component.to_form(changeset)

    %{
      form: form,
      changeset: changeset
    }
  end

  @modules [
    {"Components",
     [
       Headless.Avatar,
       Headless.Input,
       Headless.Toggle
     ]},
    {"Styled with DaisyUI",
     [
       Headless.Demo.DaisyUI
     ]}
  ]

  @impl true
  def mount(_params, _session, socket) do
    groups = groups(@modules)
    {:ok, assign(socket, component: nil, groups: groups)}
  end

  @impl true
  def handle_params(%{"id" => id}, _uri, socket) do
    component =
      socket.assigns.groups
      |> Enum.flat_map(fn {_, cs} -> cs end)
      |> Enum.find(fn c -> c.id == id end)

    {:noreply, assign(socket, :component, component)}
  end

  @impl true
  def handle_params(_params, _uri, socket) do
    {:noreply, assign(socket, :component, nil)}
  end

  @impl true
  def render(assigns) do
    ~H"""
    <div class="navbar bg-base-100">
      <.link patch="/" class="btn btn-ghost text-xl">headless</.link>
    </div>

    <div class="flex p-4 gap-4">
      <ul class="menu bg-base-200 w-64 rounded-box">
        <%= for {title, components} <- @groups do %>
          <li>
            <h2 class="menu-title"><%= title %></h2>

            <ul class="font-mono">
              <%= for component <- components do %>
                <li>
                  <.link patch={"/#{component.id}"}>
                    <%= component.name %>
                  </.link>
                </li>
              <% end %>
            </ul>
          </li>
        <% end %>
      </ul>

      <div :if={@component} class="w-full">
        <div class="mb-10">
          <h2 class="font-mono">
            <.link patch={"/#{@component.id}"}><%= @component.mfa %></.link>
          </h2>
          <p class="text-sm text-gray-700"><%= @component.desc %></p>

          <%= for example <- @component.examples do %>
            <fieldset class="relative border border-base-200 my-8 rounded-lg">
              <legend class="absolute text-xs uppercase bg-base-200 text-black-900 px-2">
                <%= example.label %>
              </legend>
              <div class="grid grid-cols-1 rounded-lg pt-2">
                <div class="p-5 bg-base-100">
                  <%= render_code(@component, example) %>
                </div>
                <div class="text-sm p-5 bg-secondary-content">
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

  defp groups(groups) do
    for {name, modules} <- groups do
      components =
        for module <- modules,
            component <- extract(module),
            do: component

      {name, components}
    end
  end

  defp extract(mod) do
    components = mod.__components__()
    {:docs_v1, _ann, _lang, _format, _moduledoc, _metadata, docs} = Code.fetch_docs(mod)
    for doc <- docs, fun <- extract_from_doc(doc, mod, components), do: fun
  end

  defp extract_from_doc({{_kind, _name, _arity}, _annotation, _, :none, _}, _, _), do: []
  defp extract_from_doc({{_kind, _name, _arity}, _annotation, _, :hidden, _}, _, _), do: []

  defp extract_from_doc(
         {{:function, name, arity}, _annotation, _signature, %{"en" => doc}, _metadata},
         mod,
         components
       ) do
    {desc, examples} =
      doc
      |> String.split(["\r\n", "\n"], trim: false)
      |> Enum.reduce({[], []}, fn
        "Storybook: " <> label, {desc, examples} ->
          {desc, [{label, []} | examples]}

        "    " <> code, {desc, [{label, codes} | rest]} ->
          {desc, [{label, [code | codes]} | rest]}

        other, {desc, []} ->
          {[other | desc], []}

        _other, acc ->
          acc
      end)

    desc = Enum.join(Enum.reverse(desc), "\n")

    examples =
      examples
      |> Enum.map(fn {label, codes} ->
        code =
          codes
          |> Enum.reverse()
          |> Enum.join("\n")

        %{
          label: label,
          code: code
        }
      end)
      |> Enum.reverse()

    component = components[name]

    [
      %{
        mfa: mfa(mod, name, arity),
        fa: fa(name, arity),
        id: id(mod, name, arity),
        mod: mod,
        name: name,
        arity: arity,
        desc: desc,
        attrs: component[:attrs] || [],
        slots: component[:slots] || [],
        examples: examples
      }
    ]
  end

  defp mfa(m, f, a), do: "#{Enum.join(Module.split(m), ".")}.#{fa(f, a)}"
  defp fa(f, a), do: "#{f}/#{a}"
  defp id(m, f, a), do: "#{Enum.join(Module.split(m), "-")}-#{f}-#{a}"

  defp render_code(component, example) do
    options = [
      caller: __ENV__,
      engine: Phoenix.LiveView.TagEngine,
      tag_handler: Phoenix.LiveView.HTMLEngine,
      source: example.code
    ]

    imports = [
      {component.mod, component.mod.__info__(:functions)},
      {Phoenix.Component, Phoenix.Component.__info__(:functions)}
    ]

    ast = EEx.compile_string(example.code, options)
    env = %{__ENV__ | functions: imports}
    {code, _} = Code.eval_quoted(ast, [assigns: default_assigns()], env)
    code
  end
end