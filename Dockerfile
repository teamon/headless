ARG ELIXIR=1.16.1
ARG ERLANG=26.2.2
ARG ALPINE=3.19.1
ARG NODEJS=20.8.0

ARG NODEJS_BUILDER="node:${NODEJS}-alpine"
ARG ELIXIR_BUILDER="hexpm/elixir:${ELIXIR}-erlang-${ERLANG}-alpine-${ALPINE}"
ARG RUNTIME="alpine:${ALPINE}"



FROM ${NODEJS_BUILDER} as nodejs_builder

# prepare build dir
WORKDIR /app

# install node dependencies
COPY apps/demo/assets/package.json apps/demo/assets/package-lock.json ./apps/demo/assets/
RUN npm --prefix ./apps/demo/assets install --no-audit



FROM ${ELIXIR_BUILDER} as elixir_builder

# install build dependencies
RUN apk add --no-cache --update bash openssl ca-certificates git alpine-sdk coreutils

# prepare build dir
WORKDIR /app

# install hex + rebar
RUN mix local.hex --force && \
    mix local.rebar --force

# set build ENV
ENV MIX_ENV="prod"
ENV PLATFORM="docker"

# install mix dependencies
COPY mix.exs mix.lock ./
COPY apps/demo/mix.exs ./apps/demo/mix.exs
COPY apps/headless/mix.exs ./apps/headless/mix.exs

RUN mix deps.get --only $MIX_ENV
RUN mkdir config

# copy compile-time config files before we compile dependencies
# to ensure any relevant config change will trigger the dependencies
# to be re-compiled.
COPY config/config.exs config/${MIX_ENV}.exs config/
RUN mix deps.compile

# copy project files
COPY apps ./apps
COPY --from=nodejs_builder --chown=nobody:root /app/apps/demo/assets/node_modules /app/apps/demo/assets/node_modules/

# Compile the release
RUN mix compile

# Copile assets
RUN mix assets.build
RUN mix assets.deploy

# Changes to config/runtime.exs don't require recompiling the code
COPY config/runtime.exs config/

# Build release
COPY rel rel
RUN mix release



# start a new build stage so that the final image will only contain
# the compiled release and other runtime necessities
FROM ${RUNTIME} as runtime

# Install dependencies
RUN apk add --no-cache --update bash openssl openssh-client ca-certificates libstdc++

WORKDIR "/app"
RUN chown nobody /app

# set runner ENV
ENV MIX_ENV="prod"
ENV PLATFORM="docker"

# Only copy the final release from the build stage
COPY --from=elixir_builder --chown=nobody:root /app/_build/${MIX_ENV}/rel/demo ./

# Add version as ENV var
ARG version
ENV VERSION=$version

USER nobody
EXPOSE 4000
CMD ["/app/bin/server"]
