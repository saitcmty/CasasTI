Rails.application.config.middleware.use OmniAuth::Builder do
    provider :google_oauth2, ENV["GOOGLE_ID"], ENV["GOOGLE_SECRET"],
    {
        scope: 'userinfo.email, calendar',
        provider_ignores_state: "true",
        prompt: 'consent',
        skip_jwt: 'true'
    }
end
