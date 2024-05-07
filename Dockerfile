ARG ELIXIR=1.16.1
ARG ERLANG=26.2.2
ARG ALPINE=3.19.1

ARG ELIXIR_BUILDER="hexpm/elixir:${ELIXIR}-erlang-${ERLANG}-alpine-${ALPINE}"
ARG RUNTIME="alpine:${ALPINE}"

FROM ${ELIXIR_BUILDER} as elixir_builder

# install build dependencies
RUN apk add --no-cache --update bash openssl ca-certificates git alpine-sdk coreutils

# prepare build dir
WORKDIR /app

# install hex + rebar
RUN mix local.hex --force && \
    mix local.rebar --force

# set build ENV
ENV MIX_ENV="dev"
ENV PLATFORM="docker"

# install mix dependencies
COPY mix.exs mix.lock ./

RUN mix deps.get --only $MIX_ENV
RUN mkdir config

# copy compile-time config files before we compile dependencies
# to ensure any relevant config change will trigger the dependencies
# to be re-compiled.
COPY config/config.exs config/
RUN mix deps.compile

# copy project files
COPY priv priv
COPY lib lib
COPY demo demo

# Compile the release
RUN mix compile

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
ENV MIX_ENV="dev"
ENV PLATFORM="docker"

# Only copy the final release from the build stage
COPY --from=elixir_builder --chown=nobody:root /app/_build/${MIX_ENV}/rel/headless ./

# Add version as ENV var
ARG version
ENV VERSION=$version

USER nobody
EXPOSE 4000
CMD ["/app/bin/server"]
