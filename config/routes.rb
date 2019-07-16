Rails.application.routes.draw do
  get 'home/index'
  get 'home/login'
  resources :registrations
  resources :redirects
  resources :assistances
  resources :evidences
  resources :events
  resources :students
  resources :houses
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Routes for Google authentication
  get 'login', to: redirect('/auth/google_oauth2'), as: 'login'
  get 'logout', to: 'sessions#destroy', as: 'logout'
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  get 'home', to: 'home#index'
  get 'me', to: 'me#show', as: 'me'
end
