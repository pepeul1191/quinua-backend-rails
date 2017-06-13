class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  before_action :set_header

  def set_header
      response.set_header('server', 'Ubuntu')
      #response.set_header('Access-Control-Allow-Origin', '*')
      #response.set_header('Access-Control-Allow-Methods', 'POST, PUT, DELETE, GET, OPTIONS')
      #response.set_header('Access-Control-Request-Method', '*')
      #response.set_header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  end
end
