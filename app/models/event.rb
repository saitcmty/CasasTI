require 'google/apis/calendar_v3'

class Event < ApplicationRecord
    has_one_attached :portrait

    has_many :redirects
    has_many :evidences, through: :redirects
    has_many :assistances
    has_many :students, through: :assistances

end
