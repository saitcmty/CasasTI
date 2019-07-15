class Redirect < ApplicationRecord
    belongs_to :event
    has_one :evidence
end
