class Registration < ApplicationRecord
    belongs_to :student
    belongs_to :evidence

    def points
        assigned_points || evidence.points
    end
end
