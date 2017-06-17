class Accesos::Usuario
  	def initialize
  	     @db = Databases.db_quinua
  	end

  	def validar(usuario, contrasenia)
           rpta = @db[:usuario].where(:username => usuario, :password => contrasenia).count  
           @db.disconnect
           rpta 
      end
end