class Registration < ApplicationRecord
    belongs_to :student
    belongs_to :evidence
    has_one_attached :file_proof

    def points
        assigned_points || evidence.points
    end
end
