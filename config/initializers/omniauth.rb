Rails.application.config.middleware.use OmniAuth::Builder do
    provider :google_oauth2, "757375848231-ttffcoi9brhgm04kcc1a6jfsaa295lb6.apps.googleusercontent.com", "BFbRwGUN0nb6XHan8ikR1Kfn"
end