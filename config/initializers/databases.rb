# config/initializers/databases.rb
require 'sqlite3'
require 'sequel'

class Databases
	@db_accesos = Sequel.connect(:adapter=>'sqlite', :database=>File.expand_path('../../../db/db_accesos.db', __FILE__))
	
	def self.db_accesos
		@db_accesos
	end
end