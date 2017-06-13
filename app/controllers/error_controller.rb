class ErrorController < ApplicationController
    layout 'blank'

    def access
        numero_error = params[:id]
        case numero_error.to_i
        when 404
        	error = {:numero => 404, :mensaje => 'Archivo no encontrado', :descripcion => 'La página que busca no se encuentra en el servidor', :icono => 'fa fa-exclamation-triangle'}
        when 501
        	error = {:numero => 501, :mensaje => 'Página en Contrucción', :descripcion => 'Lamentamos el incoveniente, estamos trabajando en ello.', :icono => 'fa fa-code-fork'}
        when 5050
        	error = {:numero => 5050, :mensaje => 'Acceso restringido', :descripcion => 'No cuenta con los privilegios necesarios.', :icono => 'fa fa-ban'}
        when 5051
        	error = {:numero => 5050, :mensaje => 'Acceso restringido', :descripcion => 'Necesita estar logueado.', :icono => 'fa fa-ban'}
        when 8080
        	error = {:numero => 8080, :mensaje => 'Tiempo de la sesion agotado', :descripcion => 'Vuelva a ingresar al sistema.', :icono => 'fa fa-clock-o'}
        else
        	error = {:numero => 404, :mensaje => 'Archivo no encontrado', :descripcion => 'La página que busca no se encuentra en el servidor', :icono => 'fa fa-exclamation-triangle'}
        end

        @body_error = true
        @statics = Statics.new(false, 'error')
        @statics.set_css(['access'])
        @title = 'Error de Acceso ' + numero_error.to_str
        @css = ['assets/error/css/access']
        @datos = JSON.parse(error.to_json)

        render 'access'
    end
end
