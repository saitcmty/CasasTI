class Event < ApplicationRecord
    has_one_attached :portrait

    has_many :assistances, dependent: :destroy
    has_many :students, through: :assistances
end
