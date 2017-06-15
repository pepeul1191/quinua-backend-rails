class Accesos::Sistema
  	def initialize
  	     @db = Databases.db_accesos
  	end

  	def listar
           begin
              @db[:sistemas].select(:id, :nombre, :version, :repositorio).to_a.to_json
           rescue Sequel::DatabaseError => e#ZeroDivisionError#LoadError
              {:tipo_mensaje => 'error', :rpta_mensaje => "Error ocurrido un error en el  código sql", :error => e}.to_json
           ensure
              @db.disconnect
           end
      end
end