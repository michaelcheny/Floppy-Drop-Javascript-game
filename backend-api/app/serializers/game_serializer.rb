class GameSerializer < ActiveModel::Serializer
  attributes :id, :score, :player_name
end
