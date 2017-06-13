class Accesos::EstadoUsuarioController < ApplicationController
	def listar
		estado_usuarios = Accesos::EstadoUsuario.new
		render :plain => estado_usuarios.listar
	end
end