class Student < ApplicationRecord
  belongs_to :house
  has_many :events, through: :assistances
  has_many :evidences, through: :registrations

end
