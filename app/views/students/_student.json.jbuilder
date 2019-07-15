json.extract! student, :id, :tec_id, :name, :email, :house_id, :created_at, :updated_at
json.url student_url(student, format: :json)
