class LoginController < ApplicationController
	layout 'blank'

	def index
		@title = 'Bienvenido'
		render 'index'
	end

	def acceder
		usuarios = Accesos::Usuario.new
		usuario = params[:usuario]
		contrasenia = params[:contrasenia]

		if usuarios.validar(usuario, contrasenia).to_s == '1'
			redirect_to Constantes.public_url + 'home'
		else
			@mensaje = true
			render 'index'
		end
	end
end