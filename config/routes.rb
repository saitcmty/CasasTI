Rails.application.routes.draw do
  resources :registrations
  resources :redirects
  resources :assistances
  resources :evidences
  resources :events
  resources :students
  resources :houses
  root 'home#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
