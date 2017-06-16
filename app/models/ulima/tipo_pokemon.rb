class Ulima::TipoPokemon
  	def initialize
  	   @db = Databases.db_pokemones
  	end

  	def listar
      	   begin
              @db[:tipos].select(:id, :nombre).to_a
           rescue Sequel::DatabaseError => e#ZeroDivisionError#LoadError
              {:tipo_mensaje => 'error', :rpta_mensaje => "Error ocurrido un error con la base de datos de accesos", :error => e}.to_json
           ensure
              @db.disconnect
           end
  	end

      def crear(nombre)
          begin
              @db[:tipos].insert(:nombre => nombre)
           rescue Sequel::DatabaseError => e#ZeroDivisionError#LoadError
              {:tipo_mensaje => 'error', :rpta_mensaje => "Error ocurrido un error con la base de datos de accesos", :error => e}.to_json
           ensure
              @db.disconnect
           end
      end

      def editar(id, nombre)
          begin
              @db[:tipos].where(:id => id).update(:nombre => nombre)
           rescue Sequel::DatabaseError => e#ZeroDivisionError#LoadError
              {:tipo_mensaje => 'error', :rpta_mensaje => "Error ocurrido un error con la base de datos de accesos", :error => e}.to_json
           ensure
              @db.disconnect
           end
      end

        def obtener(id)
          begin
              rpta = @db[:tipos].select(:id, :nombre).where(:id => id).to_a
              rpta[0]
           rescue Sequel::DatabaseError => e#ZeroDivisionError#LoadError
              {:tipo_mensaje => 'error', :rpta_mensaje => "Error ocurrido un error con la base de datos de accesos", :error => e}.to_json
           ensure
              @db.disconnect
           end
      end

      def eliminar(id)
          begin
              @db[:tipos].where(:id => id).delete
           rescue Sequel::DatabaseError => e#ZeroDivisionError#LoadError
              {:tipo_mensaje => 'error', :rpta_mensaje => "Error ocurrido un error con la base de datos de accesos", :error => e}.to_json
           ensure
              @db.disconnect
           end
      end
end