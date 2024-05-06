[
  import_deps: [:phoenix, :ecto],
  plugins: [Phoenix.LiveView.HTMLFormatter, Recode.FormatterPlugin],
  inputs: ["*.{heex,ex,exs}", "{config,examples,lib,test}/**/*.{heex,ex,exs}"],
  locals_without_parens: [
    attr: 2,
    attr: 3,
    slot: 1,
    slot: 2
  ]
]
