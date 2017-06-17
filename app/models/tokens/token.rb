# encoding: utf-8

class Tokens::Token
  	def initialize
  	    @db = Databases.db_tokens
  	end

  	def generar(usuario)
  		rpta = ''
	
	    begin
			rs = @db.find({'usuario' => usuario})

			if rs.length == 1
				doc = rs[0]
				rpta = doc['token']
			else
				o = [('a'..'z'), ('A'..'Z')].map(&:to_a).flatten
				string = (0...25).map { o[rand(o.length)] }.join
				token = AesEncryptDecrypt.encryption(string)
				doc = {'usuario' => usuario, 'token' => token}
				@db.insert(doc)
				rpta = token
			end
	    rescue ZeroDivisionError => e #StandardError
	    	rpta = { :tipo_mensaje => 'error', :mensaje => ['Se ha producido un error al generar el token al usuario', e]}
	    end
	         
	    rpta 
    end

    def obtener(usuario)
     	begin
			rs = @db.find({'usuario' => usuario})

			if rs.length == 1
				doc = rs[0]
				rpta = doc['token']
			else
				rpta = { :tipo_mensaje => 'warning', :mensaje => ['usuario no encontrado'] }.to_json
			end
		rescue ZeroDivisionError => e #StandardError
	      	rpta = { :tipo_mensaje => 'error', :mensaje => ['Se ha producido un error al obtener el token al usuario', e]}
	   end
	         
	    rpta 
    end
end