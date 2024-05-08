defmodule Headless.Popover do
  use Phoenix.Component, global_prefixes: ~w(x-)

  import Headless.Utils

  @doc """
  Popover component

  Storybook: Basic
      <Headless.Popover.popover1>
        <Headless.Popover.trigger>
          <button>Open</button>
        </Headless.Popover.trigger>
        <Headless.Popover.content>
          <ul>
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
            <li><a>Item 3</a></li>
          </ul>
        </Headless.Popover.content>
      </Headless.Popover.popover1>
  """

  attr :rest, :global
  slot :inner_block

  def popover1(assigns) do
    ~H"""
    <div x-data="hsPopover" x-bind="main" {@rest}>
      <%= render_slot(@inner_block) %>
    </div>
    """
  end

  @doc false

  attr :rest, :global
  slot :inner_block

  def trigger(assigns) do
    ~H"""
    <div x-bind="trigger" {@rest}>
      <%= render_slot(@inner_block) %>
    </div>
    """
  end

  @doc false

  attr :rest, :global
  slot :inner_block

  def content(assigns) do
    ~H"""
    <div x-bind="content" style="display: none;" {@rest}>
      <%= render_slot(@inner_block) %>
    </div>
    """
  end

  attr :rest, :global

  slot :trigger, validate_attrs: false
  slot :content, validate_attrs: false

  def popover2(assigns) do
    ~H"""
    <div x-data="hsPopover" x-bind="main" {@rest}>
      <.dynamic_slot slot={@trigger} as="span" x-bind="trigger" />
      <.dynamic_slot slot={@content} as="div" x-bind="content" style="display: none;" />
    </div>
    """
  end

  slot :inner_block

  def popover3(assigns) do
    ctx = %{
      main: %{"x-data" => "hsPopover", "x-bind" => "main"},
      trigger: %{"x-bind" => "trigger"},
      content: %{"x-bind" => "content", "style" => "display: none;"}
    }

    assigns = assign(assigns, ctx: ctx)

    ~H"""
    <%= render_slot(@inner_block, @ctx) %>
    """
  end
end
