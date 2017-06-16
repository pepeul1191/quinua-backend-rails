class Ulima::Pokemon
  	def initialize
  	   @db = Databases.db_pokemones
  	end

  	def listar
      	   begin
              @db['
                SELECT P.id, P.nombre, P.hp, P.img, T.nombre AS tipo FROM 
                pokemones P INNER JOIN tipos T 
                ON P.tipo_id = T.id'].to_a
           rescue Sequel::DatabaseError => e#ZeroDivisionError#LoadError
              {:tipo_mensaje => 'error', :rpta_mensaje => "Error ocurrido un error con la base de datos de accesos", :error => e}
           ensure
              @db.disconnect
           end
  	end

        def crear(nombre, hp, img, tipo_id)
            begin
                @db[:pokemones].insert(:nombre => nombre, :hp => hp, :img => img, :tipo_id => tipo_id)
             rescue Sequel::DatabaseError => e#ZeroDivisionError#LoadError
                x = {:tipo_mensaje => 'error', :rpta_mensaje => "Error ocurrido un error con la base de datos de accesos", :error => e}
             ensure
                @db.disconnect
             end
        end

        def editar(id, nombre, hp, img, tipo_id)
            begin
                @db[:pokemones].where(:id => id).update(:nombre => nombre, :hp => hp, :img => img, :tipo_id => tipo_id)
             rescue Sequel::DatabaseError => e#ZeroDivisionError#LoadError
                {:tipo_mensaje => 'error', :rpta_mensaje => "Error ocurrido un error con la base de datos de accesos", :error => e}
             ensure
                @db.disconnect
             end
        end

          def obtener(id)
            begin
                rpta = @db['
                  SELECT P.id, P.nombre, P.hp, P.img, T.nombre AS tipo FROM 
                  pokemones P INNER JOIN tipos T 
                  ON P.tipo_id = T.id WHERE P.id = ?', id].to_a
                rpta[0]
             rescue Sequel::DatabaseError => e#ZeroDivisionError#LoadError
                {:tipo_mensaje => 'error', :rpta_mensaje => "Error ocurrido un error con la base de datos de accesos", :error => e}
             ensure
                @db.disconnect
             end
        end

        def eliminar(id)
            begin
                @db[:pokemones].where(:id => id).delete
             rescue Sequel::DatabaseError => e#ZeroDivisionError#LoadError
                {:tipo_mensaje => 'error', :rpta_mensaje => "Error ocurrido un error con la base de datos de accesos", :error => e}
             ensure
                @db.disconnect
             end
        end
end