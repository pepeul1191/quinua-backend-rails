class Quinua::UsuarioController < ApplicationController
	def acceder
		rpta = ''
		usuarios = Accesos::Usuario.new
		usuario = params[:usuario]
		contrasenia = params[:contrasenia]

		if usuarios.validar(usuario, contrasenia).to_s == '1'
			tokens = Tokens::Token.new
			token = tokens.generar(usuario)
			rpta = {:token => token, :existe => 1}.to_json
		else
			rpta = {:existe => 0}.to_json
		end

		render :plain => rpta
	end

	def obtener
		usuario = params[:usuario]
		tokens = Tokens::Token.new
		tokens.obtener(usuario)
	end
end