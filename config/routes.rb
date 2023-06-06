Rails.application.routes.draw do
  get 'root/index'
  namespace :api do
    namespace :v1 do
      resources :greetings
    end
  end
  root 'root#index'
end
