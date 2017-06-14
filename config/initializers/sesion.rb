class Session
  def self.tiempo
      true
  end

  def self.logeado(session)
      rpta = true

      if defined? session[:estado]
          if session[:estado] != 'autenticado'
              rpta = false
          end
      else
          rpta = false
      end
      rpta
  end
end
