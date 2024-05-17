[
  import_deps: [:phoenix],
  plugins: [Phoenix.LiveView.HTMLFormatter, Recode.FormatterPlugin],
  inputs: ["*.{heex,ex,exs}", "{config,lib,test}/**/*.{heex,ex,exs}"]
]
