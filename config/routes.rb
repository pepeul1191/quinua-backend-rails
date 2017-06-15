Rails.application.routes.draw do
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	root 'login#index'
	# login
	get 'login' => 'login#index'
	post 'login/acceder' => 'login#acceder'
    get 'login/ver' => 'login#ver'
    get 'login/cerrar' => 'login#cerrar'
	# error
	get 'error/access/:id' => 'error#access'
	# home
	get 'home' => 'home#index'
	# accesos
	get 'accesos' => 'accesos/usuario#index'
	# accesos / estado_usuarios
	get 'accesos/estado_usuario/listar' => 'accesos/estado_usuario#listar'
end
