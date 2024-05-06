defmodule Headless.MixProject do
  use Mix.Project

  @source_url "https://github.com/teamon/headless"
  @version "0.1.0"
  @description "Headless UI components for Phoenix"

  def project do
    [
      app: :headless,
      version: @version,
      description: @description,
      package: package(),
      elixir: "~> 1.15",
      elixirc_paths: elixirc_paths(Mix.env()),
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  defp package do
    [
      maintainers: ["Tymon Tobolski"],
      licenses: ["MIT"],
      links: %{"GitHub" => @source_url}
    ]
  end

  def application do
    if Mix.env() == :dev do
      [
        mod: {Headless.Examples.Application, []},
        extra_applications: [:logger]
      ]
    else
      [extra_applications: [:logger]]
    end
  end

  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(:dev), do: ["examples", "lib"]
  defp elixirc_paths(_), do: ["lib"]

  defp deps do
    [
      {:phoenix_live_view, "~> 0.16"},

      # Dev & Test
      {:ecto, "~> 3.11", only: [:dev, :test]},
      {:phoenix_ecto, "~> 4.4", only: [:dev, :test]},
      {:jason, "~> 1.2", only: [:dev, :test]},
      {:bandit, ">= 0.0.0", only: :dev},
      {:phoenix_live_reload, "~> 1.2", only: :dev},
      {:recode, "~> 0.6", only: [:dev, :test], runtime: false},
      {:ex_doc, ">= 0.0.0", only: :dev, runtime: false}
    ]
  end
end
