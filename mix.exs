defmodule Mono.MixProject do
  use Mix.Project

  def project do
    [
      apps_path: "apps",
      version: "0.1.0",
      start_permanent: Mix.env() == :prod,
      deps: deps(),
      releases: [
        demo: [
          applications: [
            demo: :permanent
          ],
          strip_beams: [
            keep: ["Docs"]
          ]
        ]
      ]
    ]
  end

  # Dependencies listed here are available only for this
  # project and cannot be accessed from applications inside
  # the apps folder.
  #
  # Run "mix help deps" for examples and options.
  defp deps do
    [
      {:mix_test_watch, "~> 1.0", only: [:test], runtime: false}
    ]
  end

  def cli do
    [
      preferred_envs: ["test.watch": :test]
    ]
  end
end
