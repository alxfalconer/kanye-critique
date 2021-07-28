Rails.application.routes.draw do
  namespace :v1 do
    resources :reviews
    resources :albums
    resources :users
  end

  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
