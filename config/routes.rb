Rails.application.routes.draw do
  resources :pins

  devise_for :users
  root :to => "static_pages#index"
  get 'about' => "static_pages#about"

  # static pages
  get '/the-boy' => "static_pages#the_boy", as: :theboy
  get '/childishgambino' => "static_pages#childish_gambino", as: :childishgambino
  get '/donaldglover' => "static_pages#donald_glover", as: :donaldglover
  get '/troy' => "static_pages#troy", as: :troy
  get '/unlabeled' => "static_pages#unlabeled", as: :unlabled
  get '/real' => "static_pages#real", as: :real
  
end
