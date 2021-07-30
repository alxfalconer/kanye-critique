Rails.application.routes.draw do
  # delete :logout, to "sessions#logout"
  # get :logged_in, to "sessions#logged_in"
  root to: "static#home"
    resources :reviews
    resources :albums
    resources :users
    resources :sessions, only: [:create]
    resources :registrations, only: [:create]

    post "/signup", to: "users#create"
    post "/login", to: "sessions#login"

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
