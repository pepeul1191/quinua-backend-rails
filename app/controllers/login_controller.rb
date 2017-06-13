class LoginController < ApplicationController

	def index
		@nombre = 'Pepito'
		@title = 'Bienvenido' 
		render 'index'
	end

	def acceder
		usuario = params[:usuario]
		contrasenia = params[:contrasenia]

		if usuario == 'pepe' && contrasenia == '123'
			@mensaje = false
			redirect_to Constantes.public_url + 'home'
		else
			@mensaje = true
			render 'index'
		end
	end
end