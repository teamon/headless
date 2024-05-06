defmodule Headless.Examples.User do
  use Ecto.Schema
  import Ecto.Changeset

  embedded_schema do
    field(:name, :string)
    field(:email, :string)
  end
end

defmodule Headless.Examples.Project do
  use Ecto.Schema
  import Ecto.Changeset

  embedded_schema do
    field(:name, :string)
    field(:is_public, :boolean, default: true)

    belongs_to(:user, Headless.Examples.User)
  end

  def changeset(project \\ %__MODULE__{}, params) do
    project
    |> cast(params, [:name, :is_public, :user_id])
    |> validate_required([:name])
  end
end
