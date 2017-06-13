Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'login', to: 'login#index'
  post 'login/acceder', to: 'login#acceder'

  get 'accesos/estado_usuario/listar' => 'accesos/estado_usuario#listar'
end
