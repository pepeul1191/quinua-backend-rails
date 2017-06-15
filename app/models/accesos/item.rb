class Accesos::Item
  	def initialize
  		@db = Databases.db_accesos
  	end

  	def menu(sistema, nombre_modulo)
      	   begin
              rpta = @db['
                SELECT I.nombre AS item, I.url, S.nombre AS subtitulo FROM items I 
                INNER JOIN subtitulos S ON I.subtitulo_id = S.id
                INNER JOIN modulos M ON S.modulo_id = M.id 
                INNER JOIN sistemas SI ON SI.id = M.sistema_id 
                WHERE M.nombre = ?  AND SI.nombre = ?', sistema, nombre_modulo]
              puts "1 ++++++++++++++++++++++++++++++++++++++++++++++++++++++"
              puts sistema
              puts nombre_modulo
              puts "2 ++++++++++++++++++++++++++++++++++++++++++++++++++++++"
              rpta.to_a.to_json
           rescue Sequel::DatabaseError => e#ZeroDivisionError#LoadError
              {:tipo_mensaje => 'error', :rpta_mensaje => "Error ocurrido un error con la base de datos de accesos", :error => e}.to_json
           ensure
              @db.disconnect
           end
  	end
end