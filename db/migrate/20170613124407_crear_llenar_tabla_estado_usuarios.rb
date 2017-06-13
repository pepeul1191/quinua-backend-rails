class CrearLlenarTablaEstadoUsuarios < ActiveRecord::Migration[5.1]
  def up
  	create_table :estado_usuarios do |t|
      t.string :nombre
    end

    estados = ['activo','bloqueado','eliminado']
    for estado in estados
      EstadoUsuarios.create(:nombre=>estado)
    end
  end

  def down
  	drop_table 'estado_usuarios' if ActiveRecord::Base.connection.table_exists? 'estado_usuarios'
  end
end
