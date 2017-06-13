class CrearTablaUsuarios < ActiveRecord::Migration[5.1]
  def up
    down()

  	create_table :usuarios do |t|
      t.string :usuario
      t.string :contrasenia
      t.string :correo
 	
      t.timestamps
    end

    add_foreign_key :estado_usuarios, :usuarios, column: :estado_usuario_id
  end

  def down
  	drop_table 'usuarios' if ActiveRecord::Base.connection.table_exists? 'usuarios'
  end
end
