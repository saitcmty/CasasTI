Rails.application.routes.draw do
  root 'home#index'

  get '/home', to: 'home#index', as: 'dashboard'
  get 'home/index'
  get 'home/login'
  get 'home/admin'
  get 'home/validate_input'
  get 'home/signup', as: 'signup'

  resources :registrations  do
    get :approve, on: :member
    get :completed, on: :member
  end
  resources :redirects, except: [:show]
  resources :assistances, only: [:create, :destroy]
  resources :evidences
  resources :events
  resources :students, except: [:new]
  resources :houses, except: [:new, :destroy]

  get '/admin', to: 'home#admin', as: 'admin_dashboard'

  get '/estudiantes', to: 'students#index'
  get '/casas', to: 'houses#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/registration_with_code', to: 'registrations#create_with_code', as: 'register_with_code'

  # Routes for Google authentication
  get '/login', to: redirect('/home/login'), as: 'login'
  get '/auth/google_oauth2', as: 'google_login'
  get '/logout', to: 'sessions#destroy', as: 'logout'
  get '/auth/:provider/callback', to: 'sessions#create'
  get '/auth/failure', to: redirect('/')
  get '/me', to: 'me#show', as: 'me'

  # Routes for selecting your house when signup
  get '/select_cuervo', to: 'sessions#select_cuervo', as: 'select_cuervo'
  get '/select_gallina', to: 'sessions#select_gallina', as: 'select_gallina'
  get '/select_pato', to: 'sessions#select_pato', as: 'select_pato'
  get '/select_pavo_real', to: 'sessions#select_pavo_real', as: 'select_pavo_real'
  get '/select_venado', to: 'sessions#select_venado', as: 'select_venado'

  get '/internships', to: 'internships#index'
end
