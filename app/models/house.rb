class House < ApplicationRecord
    has_many :students

    # Function that sums all points from evidence of each student
    def points
        @puntos = 0
        students.each do |s| 
            @puntos += s.points
        end
        @puntos += house_points
    end
end
