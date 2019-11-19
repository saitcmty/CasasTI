class Evidence < ApplicationRecord
    has_many :redirects
    has_many :events, through: :redirects
    has_many :registrations
    has_many :students, through: :registrations

    def self.open_evidences
        Evidence.where('deadline > ?', DateTime.now)
    end
end
