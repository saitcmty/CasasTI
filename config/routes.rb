Rails.application.routes.draw do
  root 'home#index'

  get 'home/index'
  get 'home/login'
  resources :registrations
  resources :redirects
  resources :assistances
  resources :evidences
  resources :events
  resources :students
  resources :houses

  get '/estudiantes', to: 'students#index'
  get '/casas', to: 'houses#index'
  get '/Venados', to: redirect('houses/Venados')
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Routes for Google authentication
  get '/login', to: redirect('/auth/google_oauth2'), as: 'login'
  get '/logout', to: 'sessions#destroy', as: 'logout'
  get '/auth/:provider/callback', to: 'sessions#create'
  get '/auth/failure', to: redirect('/')
  get '/home', to: 'home#index'
  get '/me', to: 'me#show', as: 'me'

  # Routes for selecting your house when signup
  get '/select_cuervo', to: 'sessions#select_cuervo', as: 'select_cuervo'
  get '/select_gallina', to: 'sessions#select_gallina', as: 'select_gallina'
  get '/select_pato', to: 'sessions#select_pato', as: 'select_pato'
  get '/select_pavo_real', to: 'sessions#select_pavo_real', as: 'select_pavo_real'
  get '/select_venado', to: 'sessions#select_venado', as: 'select_venado'
end
