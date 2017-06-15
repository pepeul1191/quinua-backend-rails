class Accesos::UsuarioController < ApplicationController
	layout 'application'
	
	def index
		@title = 'Bienvenido'
	    @title_form = 'Bienvenido'
	    @modulo = 'Accesos'

	    render 'index'
	end
end