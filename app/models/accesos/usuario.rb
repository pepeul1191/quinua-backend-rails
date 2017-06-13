class Accesos::Usuario
  	def initialize
  	     @db = Databases.db_accesos
  	end

  	def validar(usuario, contrasenia)
           begin
              @db[:usuarios].where(:usuario => usuario, :contrasenia => contrasenia).count
           rescue Sequel::DatabaseError => e#ZeroDivisionError#LoadError
              {:tipo_mensaje => 'error', :rpta_mensaje => "Error ocurrido un error en el  código sql", :error => e}.to_json
           ensure
              @db.disconnect
           end
      end
end