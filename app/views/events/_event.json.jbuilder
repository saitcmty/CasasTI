json.extract! event, :id, :title, :start_date, :start_time, :end_date, :end_time, :description, :img_url, :link, :created_at, :updated_at
json.url event_url(event, format: :json)
