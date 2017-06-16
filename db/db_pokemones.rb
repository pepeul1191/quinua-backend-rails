require 'sqlite3'

def coneccion
  SQLite3::Database.open 'db_pokemones.db'
end

def get_pokemones
    rpta = []

    begin
        file = File.new('db_pokemones.txt', 'r')
    rescue StandardError => e
        puts 'Archivo no encontrado'
    end

    while (line = file.gets)
        line_array = line.split('::')
        nombre = line_array[0]
        hp = line_array[1]
        tipo = line_array[2].strip
        rpta.push({:nombre => nombre, :hp => hp, :tipo => tipo})
    end
    rpta
end

def llenar_tipos(pokemones)
    tipos = []
    for pokemon in pokemones
        if !tipos.include? pokemon[:tipo]
            tipos.push(pokemon[:tipo])
        end
    end

    for tipo in tipos
        coneccion.execute('INSERT INTO tipos (nombre) VALUES(?)', [tipo])
    end
end

def llenar_pokemones(pokemones)
    for pokemon in pokemones
        tipo_id = coneccion.execute('SELECT id FROM tipos WHERE nombre = ?', [pokemon[:tipo]])
        tipo_id = tipo_id[0]
        coneccion.execute('INSERT INTO pokemones (nombre, hp, tipo_id) VALUES(?,?,?)', [pokemon[:nombre], pokemon[:hp], tipo_id])
    end
end

llenar_tipos(get_pokemones)
llenar_pokemones(get_pokemones)