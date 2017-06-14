class HomeController < ApplicationController
	layout 'home'
	def index
	    #logeado
	    #tiempo
	    #@modulo = 'Seguridad'
	    #@css = ['swp/css/mootools.grid']
	    #@js = ['swp/js/mootools.dao', 'swp/js/mootools.form', 'swp/js/mootools.observer', 'swp/js/mootools.grid', 'swp/js/mootools.chain', 'assets/seguridad/maestros/js/amenazas']
	    render 'index'
	end
end