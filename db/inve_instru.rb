require "sqlite3"
require "date"

def db_quinua
	SQLite3::Database.open("db_quinua.db")
	# ide_dato | ide_estacion | ide_sensor | valor_med | fec_med
end
#db.execute("INSERT INTO users(id, name) VALUES(?, ?)", [1, 'Bugs Bunny'])
def llenar_temperaturas
	datos = []
	datos.push({"sensor" => 1, "estacion" => 1})
	datos.push({"sensor" => 2, "estacion" => 2})
	datos.push({"sensor" => 3, "estacion" => 3})
	datos.push({"sensor" => 4, "estacion" => 4})
	datos.push({"sensor" => 5, "estacion" => 5})

	for dato in datos
		ide_estacion = dato["estacion"]
		ide_sensor = dato["sensor"]
		tiempo_base = DateTime.new(2017,2,1)
		(1..1000).step(1) do |n|
			temperatura = rand(15..30.0).round(3)
			tiempo_base = tiempo_base + 0.0208333333 # equivale a 30 minutos
			tmp = tiempo_base.to_s.split("+")[0].split("T")
			tiempo = tmp[0] + " " + tmp[1]
			#YYYY-MM-DD HH:MM:SS
			db = db_quinua
			db.execute("INSERT INTO inve_instru_dato (ide_estacion, ide_sensor, valor_med, fec_med) VALUES (?,?,?,?)", [ide_estacion, ide_sensor, temperatura, tiempo])
			db.close
		end
	end
end

def llenar_vientos
	datos = []
	datos.push({"sensor" => 6, "estacion" => 1})
	datos.push({"sensor" => 7, "estacion" => 2})
	datos.push({"sensor" => 8, "estacion" => 3})
	datos.push({"sensor" => 9, "estacion" => 4})

	for dato in datos
		ide_estacion = dato["estacion"]
		ide_sensor = dato["sensor"]
		tiempo_base = DateTime.new(2017,2,1)
		(1..1000).step(1) do |n|
			viento = rand(5..9)
			tiempo_base = tiempo_base + 0.0208333333 # equivale a 30 minutos
			tmp = tiempo_base.to_s.split("+")[0].split("T")
			tiempo = tmp[0] + " " + tmp[1]
			#YYYY-MM-DD HH:MM:SS
			db = db_quinua
			db.execute("INSERT INTO inve_instru_dato (ide_estacion, ide_sensor, valor_med, fec_med) VALUES (?,?,?,?)", [ide_estacion, ide_sensor, viento, tiempo])
			db.close
		end
	end
end

def llenar_humedad
	datos = []
	datos.push({"sensor" => 10, "estacion" => 1})
	datos.push({"sensor" => 11, "estacion" => 2})
	datos.push({"sensor" => 12, "estacion" => 3})

	for dato in datos
		ide_estacion = dato["estacion"]
		ide_sensor = dato["sensor"]
		tiempo_base = DateTime.new(2017,2,1)
		(1..1000).step(1) do |n|
			humedad = rand(50..80)
			tiempo_base = tiempo_base + 0.0208333333 # equivale a 30 minutos
			tmp = tiempo_base.to_s.split("+")[0].split("T")
			tiempo = tmp[0] + " " + tmp[1]
			#YYYY-MM-DD HH:MM:SS
			db = db_quinua
			db.execute("INSERT INTO inve_instru_dato (ide_estacion, ide_sensor, valor_med, fec_med) VALUES (?,?,?,?)", [ide_estacion, ide_sensor, humedad, tiempo])
			db.close
		end
	end
end

llenar_temperaturas
llenar_vientos
llenar_humedad
