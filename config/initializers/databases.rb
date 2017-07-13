# config/initializers/databases.rb
require 'sqlite3'
require 'pg'
require 'sequel'
require 'mongolitedb'

class Databases
	def self.db_quinua
		Sequel.connect(:adapter=>'sqlite', :database=>File.expand_path('../../../db/db_quinua.db', __FILE__))
		#Sequel.connect('postgres://postgres:ulima@168.121.220.36:5432/quinua')
	end

	def self.db_tokens
		MongoLiteDB.new File.expand_path('../../../db/db_tokens.mglite', __FILE__)
	end
end