class Accesos::SistemaController < ApplicationController
	layout 'application'
	
	def index
		@title = 'Bienvenido'
	    @title_form = 'Bienvenido'
	    @ruta_form = 'Accesos / Sistema'
	    @modulo = 'Accesos'
	    @css = ['bower_components/swp-plugins/assets/css/mootools.grid', 'assets/accesos/menu/css/index']
        @js = ['bower_components/swp-plugins/assets/js/mootools.dao', 'bower_components/swp-plugins/assets/js/mootools.form', 'bower_components/swp-plugins/assets/js/mootools.observer', 'bower_components/swp-plugins/assets/js/mootools.grid', 'bower_components/swp-plugins/assets/js/mootools.chain', 'assets/accesos/sistema/js/index']

	    render 'index'
	end

	def listar
		sistema = Accesos::Sistema.new
		render :plain => sistema.listar
	end
end