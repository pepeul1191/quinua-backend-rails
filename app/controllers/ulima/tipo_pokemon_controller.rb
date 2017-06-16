class Ulima::TipoPokemonController < ApplicationController
	layout 'ulima'
	
	def index
		tipo_pokemon = Ulima::TipoPokemon.new
		@tipo_pokemones = tipo_pokemon.listar
		render 'index'
	end

	def agregar
		@operacion = 'crear'
		@titulo_operacion = 'Agregar'
		render 'tipo_pokemon'
	end

	def editar
		id = params[:id]
		tipo_pokemon = Ulima::TipoPokemon.new
		
		@tipo_pokemon = tipo_pokemon.obtener(id) 
		@operacion = 'editar'
		@titulo_operacion = 'Editar'
		render 'tipo_pokemon'
	end

	def guardar
		operacion = params[:operacion]
		nombre = params[:nombre]

		if operacion =='crear'
			tipo_pokemon = Ulima::TipoPokemon.new
			tipo_pokemon.crear(nombre)
			@mensaje = 'Se ha añadido un nuevo tipo de pokemon con éxito'
		elsif operacion == 'editar'
			id = params[:id]
			tipo_pokemon = Ulima::TipoPokemon.new
			tipo_pokemon.editar(id, nombre)
			@mensaje = 'Se ha editado un pokemon con éxito'
		end

		@tipo_pokemones = tipo_pokemon.listar
		render 'index'
	end

	def eliminar
		id = params[:id]
		tipo_pokemon = Ulima::TipoPokemon.new
		tipo_pokemon.eliminar(id)
		@mensaje = 'Se ha eliminado un tipo de pokemon con éxito'

		@tipo_pokemones = tipo_pokemon.listar
		render 'index'
	end
end