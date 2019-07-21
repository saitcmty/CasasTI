class Redirect < ApplicationRecord
    belongs_to :event
    belongs_to :evidence
end
