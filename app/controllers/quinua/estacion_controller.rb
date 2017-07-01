class Quinua::EstacionController < ApplicationController
	def listar
		estacion = Quinua::Estacion.new
		rpta = estacion.listar.to_json

		render :plain => rpta
	end
end