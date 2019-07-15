class Registration < ApplicationRecord
    has_many :students
    has_many :evidence
end
