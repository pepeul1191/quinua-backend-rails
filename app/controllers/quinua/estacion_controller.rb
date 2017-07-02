class Quinua::EstacionController < ApplicationController
	def listar
		estacion = Quinua::Estacion.new
		rpta = estacion.listar.to_json
		render :plain => rpta
	end

	def detalle
		id = params[:id]
		estacion = Quinua::Estacion.new
		estaciones = estacion.detalle(id)

		sensores =[]
		for  estacion in estaciones
			temp = Hash.new 
			temp[:nombre_sensor] = estacion[:nombre_sensor]
			temp[:desc_instrumento] = estacion[:desc_instrumento]
			temp[:des_tipo] = estacion[:des_tipo]
			sensores.push(temp)
		end
		rpta = Hash.new
		rpta[:nombre_estacion] = estaciones[0][:nombre_estacion]
		rpta[:descripcion] = estaciones[0][:descripcion]
		rpta[:sensores] = sensores

		render :plain => rpta.to_json
	end
end