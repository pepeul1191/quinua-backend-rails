class Ulima::Pokemon
  	def initialize
  	   @db = Databases.db_pokemones
  	end

  	def listar
      	   begin
              @db['
                SELECT P.id, P.nombre, P.hp, T.nombre FROM 
                pokemones P INNER JOIN tipos T 
                ON P.tipo_id = T.id'].to_a
           rescue Sequel::DatabaseError => e#ZeroDivisionError#LoadError
              {:tipo_mensaje => 'error', :rpta_mensaje => "Error ocurrido un error con la base de datos de accesos", :error => e}.to_json
           ensure
              @db.disconnect
           end
  	end
end