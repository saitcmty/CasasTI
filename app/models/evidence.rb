class Evidence < ApplicationRecord
    has_many :registrations, dependent: :destroy
    has_many :students, through: :registrations

    def self.open_evidences
        Evidence.where('deadline > ?', DateTime.now)
    end
end
