class Assistance < ApplicationRecord
    has_many :students
    has_many :events
end
