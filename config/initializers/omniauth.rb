Rails.application.config.middleware.use OmniAuth::Builder do
    if Rails.env.development?
        provider :google_oauth2, ENV["GOOGLE_ID_DEV"], ENV["GOOGLE_SECRET_DEV"]
    elsif Rails.env.production?
        provider :google_oauth2, ENV["GOOGLE_ID_PROD"], ENV["GOOGLE_SECRET_PROD"]
    end
end
