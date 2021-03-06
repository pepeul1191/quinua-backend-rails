Rails.application.routes.draw do
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	# login
	post 'login/acceder' => 'quinua/usuario#acceder'
	get 'token/obtener' => 'tokens/token#obtener'
	get 'estacion/listar' => 'quinua/estacion#listar'
	get 'estacion/detalle/:id' => 'quinua/estacion#detalle'
	get 'sensor/historico/:id' => 'quinua/sensor#historico'
end
