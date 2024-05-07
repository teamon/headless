defmodule Headless do
  defdelegate avatar(assigns), to: Headless.Avatar
  defdelegate input(assigns), to: Headless.Input
  defdelegate toggle(assigns), to: Headless.Toggle
end
