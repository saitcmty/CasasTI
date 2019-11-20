class Registration < ApplicationRecord
    belongs_to :student
    belongs_to :evidence

    def points
        evidence.points || assigned_points
    end
end
