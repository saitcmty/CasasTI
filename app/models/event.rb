class Event < ApplicationRecord
    has_many :redirects
    has_many :evidences, through: :redirects
end
