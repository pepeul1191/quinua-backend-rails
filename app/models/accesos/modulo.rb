class Accesos::Modulo
  	def initialize
  		@db = Databases.db_accesos
  	end

  	def listar_menu(sistema)
      	   begin
              rpta = @db['
                SELECT M.url, M.nombre FROM 
                sistemas S LEFT JOIN modulos M 
                ON M.sistema_id = S.id 
                WHERE S.nombre =  ?', sistema]
              rpta.to_a
           rescue Sequel::DatabaseError => e#ZeroDivisionError#LoadError
              {:tipo_mensaje => 'error', :rpta_mensaje => "Error ocurrido un error con la base de datos de accesos", :error => e}.to_json
           ensure
              @db.disconnect
           end
  	end
end