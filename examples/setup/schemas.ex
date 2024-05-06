defmodule Headless.Examples.User do
  use Ecto.Schema
  import Ecto.Changeset

  embedded_schema do
    field(:name, :string)
    field(:email, :string)
    field(:is_admin, :boolean, default: true)
    field(:is_blocked, :boolean, default: true)
  end

  def changeset(user \\ %__MODULE__{}, params) do
    user
    |> cast(params, [:name, :is_admin, :is_blocked])
    |> validate_required([:name])
  end
end

defmodule Headless.Examples.Project do
  use Ecto.Schema
  import Ecto.Changeset

  embedded_schema do
    field(:name, :string)

    belongs_to(:user, Headless.Examples.User)
  end

  def changeset(project \\ %__MODULE__{}, params) do
    project
    |> cast(params, [:name, :user_id])
    |> validate_required([:name])
  end
end
