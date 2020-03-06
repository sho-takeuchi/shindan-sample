Rails.application.routes.draw do
  resources :shindans, only: :index
end
