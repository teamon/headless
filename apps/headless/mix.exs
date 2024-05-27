defmodule Headless.MixProject do
  use Mix.Project

  @source_url "https://github.com/teamon/headless"
  @version "0.1.1"
  @description "Headless UI components for Phoenix"

  def project do
    [
      app: :headless,
      version: @version,
      description: @description,
      package: package(),
      build_path: "../../_build",
      config_path: "../../config/config.exs",
      deps_path: "../../deps",
      lockfile: "../../mix.lock",
      elixir: "~> 1.15",
      start_permanent: Mix.env() == :prod,
      deps: deps(),
      aliases: aliases(),
      docs: docs()
    ]
  end

  defp package do
    [
      maintainers: ["Tymon Tobolski"],
      licenses: ["MIT"],
      links: %{"GitHub" => @source_url}
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      extra_applications: [:logger]
    ]
  end

  defp deps do
    [
      {:phoenix_live_view, "~> 0.16"},

      # Dev & Test
      {:esbuild, "~> 0.2", only: :dev},
      {:recode, "~> 0.6", only: [:dev, :test], runtime: false},
      {:ex_doc, ">= 0.0.0", only: [:dev, :test], runtime: false}
    ]
  end

  defp aliases do
    [
      "assets.build": ["esbuild module"],
      "assets.watch": ["esbuild module --watch"],
      docs: ["docs", &copy_images/1]
    ]
  end

  defp copy_images(_) do
    File.cp!(
      Path.expand("../../preview.png", __DIR__),
      Path.expand("doc/preview.png", __DIR__)
    )
  end

  defp docs do
    [
      main: "readme",
      source_url: @source_url,
      source_ref: "v#{@version}",
      extras: ["../../README.md", "LICENSE"]
    ]
  end
end
