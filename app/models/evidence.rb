class Evidence < ApplicationRecord
    has_many :redirects
    has_many :events, through: :redirects
end
