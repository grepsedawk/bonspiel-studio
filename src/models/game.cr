class Game < BaseModel
  table do
    column sheet : Int16
    column team_a_score : Int16
    column team_b_score : Int16
    column team_a_name : String
    column team_b_name : String
    column team_a_club_name : String?
    column team_b_club_name : String?
    column current_end : Int16
    belongs_to draw : Draw
  end
end
