# encoding: UTF-8
# coding: UTF-8
# -*- coding: UTF-8 -*-

class Quinua::Sensor
  	def initialize
  		# tabla : inve_estacion
  	    @db = Databases.db_quinua
  	end

    def historico(id, fecha_inicio, fecha_fin)
        # sqlite3
        q = 'SELECT strftime("%d",  fec_med) as dia, strftime("%m",  fec_med) as mes, strftime("%Y",  fec_med) as anio, AVG(valor_med) AS medicion 
                FROM inve_instru_dato 
                WHERE fec_med > strftime("' + fecha_inicio +'") AND fec_med < strftime("' + fecha_fin+ '") AND ide_sensor = ' + id + '
                GROUP BY dia;'
        # postgres
        #q = "SELECT to_char(fec_med, 'YY') AS anio,to_char(fec_med, 'MM') AS mes, to_char(fec_med, 'DD') AS dia, AVG(valor_med) AS medicion 
                #FROM inve_instru_dato 
                #WHERE fec_med > '" + fecha_inicio + "' AND fec_med < '" + fecha_fin + "' AND ide_sensor = " + id + " 
                #GROUP BY dia, mes, anio 
                #ORDER BY anio, mes, dia;"

        rpta = @db[q]
        @db.disconnect
        rpta 
    end
end