class Quinua::EstacionController < ApplicationController
	def listar
		estacion = Quinua::Estacion.new
		rpta = estacion.listar		

		render :plain => rpta
	end
end