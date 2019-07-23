class Evidence < ApplicationRecord
    has_many :redirects
    has_many :events, through: :redirects
    has_many :registrations
    has_many :students, through: :registrations
end
