Rails.application.config.middleware.use OmniAuth::Builder do
    provider :google_oauth2, ENV["GOOGLE_ID"], ENV["GOOGLE_SECRET"],  :skip_jwt => true
end
