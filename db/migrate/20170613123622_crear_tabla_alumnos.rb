class CrearTablaAlumnos < ActiveRecord::Migration[5.1]
  def up
    down()

  	create_table :alumnos do |t|
      t.integer :codigo
      t.string :nombres
      t.string :apellido_paterno
      t.string :apellido_materno
 
      t.timestamps
    end
  end

  def down
  	drop_table 'alumnos' if ActiveRecord::Base.connection.table_exists? 'alumnos'
  end
end
