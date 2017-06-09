Rails.application.routes.draw do

  root to: "tops#index"

  get 'demo/index'
  get 'home/index'
  get 'employees/index'
  get 'sortlists/index'

  resources :books

  mount ActionCable.server => '/cable'
end
