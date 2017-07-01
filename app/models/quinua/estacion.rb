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
end