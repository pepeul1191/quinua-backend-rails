# encoding: UTF-8
# coding: UTF-8
# -*- coding: UTF-8 -*-

class Quinua::Estacion
  def initialize
  	# tabla : inve_estacion
      @db = Databases.db_quinua
  end

    def listar
        rpta = @db[:inve_estacion].to_a
        @db.disconnect
        rpta 
    end

    def detalle(id)
        rpta = @db['
               SELECT IE.nombre_estacion, II.ide_sensor, IE.descripcion, II.nombre_sensor, II.desc_instrumento, MTT.des_tipo FROM inve_estacion IE 
				INNER JOIN inve_estacion_instru IEI ON IE.ide_estacion = IEI.ide_estacion 
				INNER JOIN inve_instru II ON II.ide_sensor = IEI.ide_sensor 
				INNER JOIN mae_tablatipo_tipo MTT ON MTT.ide_tipo = II.fk_tipo_unidad_medida 
				WHERE IEI.ide_estacion = ?', id].to_a
        @db.disconnect
        rpta 
    end
end