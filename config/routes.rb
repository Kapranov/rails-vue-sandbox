Rails.application.routes.draw do
  root to: "tops#index"

  get 'demo/index'
  get 'home/index'
  get 'employees/index'

  mount ActionCable.server => '/cable'
end
