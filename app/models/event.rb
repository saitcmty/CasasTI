class Event < ApplicationRecord
    has_one :redirect
    has_one :evidence, through: :redirects
end
