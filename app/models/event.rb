class Event < ApplicationRecord
    has_many :redirects
    has_many :evidences, through: :redirects
    has_many :assistances
    has_many :students, through: :assistances
end
