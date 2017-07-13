class Quinua::SensorController < ApplicationController
	def historico
		# demo sqlite : http://BASE_URL:3000/sensor/historico/1?fecha_inicio=2017-02-01&fecha_fin=2017-02-10
		# demo postgres : http://localhost:3000/sensor/historico/1?fecha_inicio=2017-01-01&fecha_fin=2017-08-10
		id = params[:id]
		fecha_inicio = params[:fecha_inicio] + ' 00:00:00'
		fecha_fin = params[:fecha_fin] + ' 23:59:59'

		sensor = Quinua::Sensor.new
		rpta = sensor.historico(id, fecha_inicio, fecha_fin)

		render :plain => rpta.to_json
	end
end