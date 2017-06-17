class Tokens::TokenController < ApplicationController
	def obtener
		usuario = params[:usuario]
		tokens = Tokens::Token.new
		render :plain => tokens.obtener(usuario)
	end
end