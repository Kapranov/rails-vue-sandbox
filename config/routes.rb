Rails.application.routes.draw do
  get 'demo/index'
  root to: "home#index"
  mount ActionCable.server => '/cable'
end
