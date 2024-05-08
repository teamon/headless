defmodule Headless.Demo.DaisyUI do
  @moduledoc """
  Example of how to use DaisyUI style Headless components.
  """

  use Phoenix.Component, global_prefixes: ~w(x-)

  @doc """
  Avatar component - using multiple components

  Storybook: Image
      <.avatar1 src="https://github.com/teamon.png" alt="@teamon" initials="TT"/>
      <.avatar1 src="https://github.com/hodak.png" alt="@hodak" initials="AH"/>

  Storybook: Missing image
      <.avatar1 src={nil} alt="@teamon" initials="TT"/>

  Storybook: Bad image
      <.avatar1 src="https://example.com" alt="@teamon" initials="TT"/>

  Storybook: Online / Offline
      <.avatar1 src="https://github.com/teamon.png" alt="@teamon" initials="TT" online={true}/>
      <.avatar1 src="https://github.com/teamon.png" alt="@teamon" initials="TT" online={false}/>
  """

  attr :src, :string, default: nil
  attr :alt, :string, default: nil
  attr :online, :boolean, default: nil
  attr :initials, :string

  def avatar1(assigns) do
    ~H"""
    <div class="w-12 h-12 rounded-full">
      <Headless.Avatar.avatar1 class={[
        "avatar placeholder",
        @online == true && "online",
        @online == false && "offline"
      ]}>
        <Headless.Avatar.img src={@src} alt={@alt} class="rounded-full" />
        <Headless.Avatar.fallback class="bg-neutral text-neutral-content rounded-full w-12">
          <%= @initials %>
        </Headless.Avatar.fallback>
      </Headless.Avatar.avatar1>
    </div>
    """
  end

  @doc """
  Avatar component - using slots

  Storybook: Image
      <.avatar2 src="https://github.com/teamon.png" alt="@teamon" initials="TT"/>
      <.avatar2 src="https://github.com/hodak.png" alt="@hodak" initials="AH"/>

  Storybook: Missing image
      <.avatar2 src={nil} alt="@teamon" initials="TT"/>

  Storybook: Bad image
      <.avatar2 src="https://example.com" alt="@teamon" initials="TT"/>

  Storybook: Online / Offline
      <.avatar2 src="https://github.com/teamon.png" alt="@teamon" initials="TT" online={true}/>
      <.avatar2 src="https://github.com/teamon.png" alt="@teamon" initials="TT" online={false}/>
  """

  attr :src, :string, default: nil
  attr :alt, :string, default: nil
  attr :online, :boolean, default: nil
  attr :initials, :string

  def avatar2(assigns) do
    ~H"""
    <div class="w-12 h-12 rounded-full">
      <Headless.Avatar.avatar2 class={[
        "avatar placeholder",
        @online == true && "online",
        @online == false && "offline"
      ]}>
        <:image src={@src} alt={@alt} class="rounded-full" />
        <:fallback class="bg-neutral text-neutral-content rounded-full w-12">
          <%= @initials %>
        </:fallback>
      </Headless.Avatar.avatar2>
    </div>
    """
  end

  @doc """
  Avatar component - using parent function

  Storybook: Image
      <.avatar3 src="https://github.com/teamon.png" alt="@teamon" initials="TT"/>
      <.avatar3 src="https://github.com/hodak.png" alt="@hodak" initials="AH"/>

  Storybook: Missing image
      <.avatar3 src={nil} alt="@teamon" initials="TT"/>

  Storybook: Bad image
      <.avatar3 src="https://example.com" alt="@teamon" initials="TT"/>

  Storybook: Online / Offline
      <.avatar3 src="https://github.com/teamon.png" alt="@teamon" initials="TT" online={true}/>
      <.avatar3 src="https://github.com/teamon.png" alt="@teamon" initials="TT" online={false}/>
  """

  attr :src, :string, default: nil
  attr :alt, :string, default: nil
  attr :online, :boolean, default: nil
  attr :initials, :string

  def avatar3(assigns) do
    ~H"""
    <Headless.Avatar.avatar3 :let={a} src={@src}>
      <div class="w-12 h-12 rounded-full">
        <div
          {a.main}
          class={[
            "avatar placeholder",
            @online == true && "online",
            @online == false && "offline"
          ]}
        >
          <img {a.image} alt={@alt} class="rounded-full" />
          <div {a.fallback} class="bg-neutral text-neutral-content rounded-full w-12">
            <%= @initials %>
          </div>
        </div>
      </div>
    </Headless.Avatar.avatar3>
    """
  end

  @doc """
  Popover component

  Storybook: Basic
      <.popover1>
        <:trigger>
          Open
        </:trigger>
        <:content>
          <ul class="menu">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </:content>
      </.popover1>
  """

  slot :trigger
  slot :content

  def popover1(assigns) do
    ~H"""
    <Headless.Popover.popover1 class="a">
      <Headless.Popover.trigger class="b">
        <button class="btn m-1"><%= render_slot(@trigger) %></button>
      </Headless.Popover.trigger>

      <Headless.Popover.content class="shadow absolute z-[1] bg-base-100 rounded-box">
        <%= render_slot(@content) %>
      </Headless.Popover.content>
    </Headless.Popover.popover1>
    """
  end

  @doc """
  Popover2 component

  Storybook: Basic
      <.popover2>
        <:trigger>
          Open
        </:trigger>
        <:content>
          <ul class="menu">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </:content>
      </.popover2>
  """

  slot :trigger
  slot :content

  def popover2(assigns) do
    ~H"""
    <Headless.Popover.popover2>
      <:trigger as="button" class="btn m-1">
        <%= render_slot(@trigger) %>
      </:trigger>

      <:content class="shadow absolute z-[1] bg-base-100 rounded-box">
        <%= render_slot(@content) %>
      </:content>
    </Headless.Popover.popover2>
    """
  end

  @doc """
  Popover3 component

  Storybook: Basic
      <.popover3>
        <:trigger>
          Open
        </:trigger>
        <:content>
          <ul class="menu">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </:content>
      </.popover3>
  """

  slot :trigger
  slot :content

  def popover3(assigns) do
    ~H"""
    <Headless.Popover.popover3 :let={p}>
      <div {p.main}>
        <button {p.trigger} class="btn m-1">
          <%= render_slot(@trigger) %>
        </button>
        <div {p.content} class="shadow absolute z-[1] bg-base-100 rounded-box">
          <%= render_slot(@content) %>
        </div>
      </div>
    </Headless.Popover.popover3>
    """
  end

  @doc """
  Toggle

  Storybook: Default
      <.toggle field={@form[:is_admin]}/>
  """
  attr :field, Phoenix.HTML.FormField, required: true
  attr :rest, :global

  def toggle(assigns) do
    ~H"""
    <Headless.toggle field={@field} class="toggle" {@rest} />
    """
  end
end
