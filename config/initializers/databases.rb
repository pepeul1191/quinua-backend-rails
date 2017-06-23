# config/initializers/databases.rb
require 'sqlite3'
require 'sequel'
require 'mongolitedb'

class Databases
	def self.db_quinua
		Sequel.connect(:adapter=>'sqlite', :database=>File.expand_path('../../../db/db_quinua.db', __FILE__))
		 #Sequel.connect('postgres://postgres:ulima@172.16.28.184:5432/quinua')
	end

	def self.db_tokens
		MongoLiteDB.new File.expand_path('../../../db/db_tokens.mglite', __FILE__)
	end
end