Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :login
  root "login#index"

  resources :dashboard
  root "dashboard#index"

  resources :estadocuenta
  root "estadocuenta#index"

  resources :billetera
  root "billetera#index"

  resources :carrito
  root "carrito#index"

  resources :red
  root "red#index"

end
