class Accesos::EstadoUsuario
  	def initialize
  		@db = Databases.db_accesos
  	end

  	def listar
      	   begin
              @db[:estado_usuarios].select(:id, :nombre).to_a.to_json
           rescue Sequel::DatabaseError => e#ZeroDivisionError#LoadError
              {:tipo_mensaje => 'error', :rpta_mensaje => "Error ocurrido un error con la base de datos de accesos", :error => e}.to_json
           ensure
              @db.disconnect
           end
  	end
end