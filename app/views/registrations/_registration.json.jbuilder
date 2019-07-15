json.extract! registration, :id, :student_id, :evidence_id, :proof, :approved, :date, :created_at, :updated_at
json.url registration_url(registration, format: :json)
