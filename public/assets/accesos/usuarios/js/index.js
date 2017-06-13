var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Usuario",index:"usuario",estilos:"width: 200px;"},
	{titulo:"Correo",index:"correo",estilos:"width: 200px;"},
	{titulo:"Último Login",index:"momento",estilos:"width: 200px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 90px;"}
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"label",estilos:"width:200px;", index:"usuario", edicion:""},
	{tipo:"label",estilos:"width:200px;", index:"correo", edicion:""},
	{tipo:"label",estilos:"width:200px;", index:"momento", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var array_json_btn_td = [
	{clase:"fa fa-thumb-tack",url:"#",alt:"Ver logs de ingreso",estilos:"padding-left: 8px;", operacion:"VerAccesos"},
	{clase:"fa fa-pencil",url:"#",alt:"Editar usuario",estilos:"padding-left: 8px;", operacion:"EditarUsuario"},
	{clase:"fa fa-envelope-o",url:"#",alt:"Enviar contraseña a su correo",estilos:"padding-left: 8px;", operacion:"EnviarContrasenia"},
	{clase:"fa fa-list",url:"#",alt:"Asociar Roles y Permisos",estilos:"padding-left: 8px;", operacion:"VerRolesPermisos"}
]; 

var array_json_btn = [
	{tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_dao_tipo_activos = new AjaxPython(); 
ajax_dao_tipo_activos.Constructor("GET", BASE_URL + "accesos/usuario/listar", "", false);

var tablaUsuarios = new Grid();

tablaUsuarios.SetTableId("tablaUsuarios");
tablaUsuarios.SetTableObj("tablaUsuarios");
tablaUsuarios.SetTableHeader(array_json_th);
tablaUsuarios.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_tipo_activos);
tablaUsuarios.SetTableFooter(array_json_btn, false);
tablaUsuarios.SetLabelMensaje("#txtMensajeRpta");
tablaUsuarios.SetURLGuardar(BASE_URL + "accesos/usuario/guardar");

tablaUsuarios.MostrarTable();

var VerAccesos = new Class({
    Interfaces: [ IChainOperacion ],
    SetearSiguienteInstancia: function(instancia){
        //implementación de IChainOperacion
        this.siguiente_instancia = instancia;
    },
    SiguienteEslabon: function(operacion, thisDOM, objeto) {
        //implementación de IChainOperacion
        this.siguiente_instancia.EjecutarOperacion(operacion, thisDOM, objeto);
    }, 
    EjecutarOperacion: function(operacion, thisDOM, objeto) {
        //implementación de IChainOperacion
        var id_rol = thisDOM.parent().parent().children(0).children(0).html();

        if(operacion == "VerAccesos"){
        	var id_usuario = thisDOM.parent().parent().children().eq(0).children().eq(0).html();
	       $.ajax({
				type: "GET",
				url: BASE_URL + "accesos/usuario/ver_accesos",
				data: "data=",
				async: false,
				success:function(data){
					$("#modal-container").empty();
					$("#modal-container").append(data);
					$("#usuario_id").html(id_usuario);
					$("#btnModal").click();
				}
			});
           //ObservadorConcreto.NotificarObservadores(objeto.observador, tipo_arreglo, id_fila);
        }else{
             try {
              this.SiguienteEslabon(operacion, thisDOM, objeto);
           }catch(error){
              console.log("Operación no implementada");
           }
        }
    }
});

var EditarUsuario = new Class({
    Interfaces: [ IChainOperacion ],
    SetearSiguienteInstancia: function(instancia){
        //implementación de IChainOperacion
        this.siguiente_instancia = instancia;
    },
    SiguienteEslabon: function(operacion, thisDOM, objeto) {
        //implementación de IChainOperacion
        this.siguiente_instancia.EjecutarOperacion(operacion, thisDOM, objeto);
    }, 
    EjecutarOperacion: function(operacion, thisDOM, objeto) {
        //implementación de IChainOperacion
        var id_rol = thisDOM.parent().parent().children(0).children(0).html();

        if(operacion == "EditarUsuario"){
        	var id_usuario = thisDOM.parent().parent().children().eq(0).children().eq(0).html();
	       $.ajax({
				type: "GET",
				url: BASE_URL + "accesos/usuario/editar_usuario",
				data: "data=",
				async: false,
				success:function(data){
					$("#modal-container").empty();
					$("#modal-container").append(data);
					$("#usuario_id").html(id_usuario);
					$("#btnModal").click();
				}
			});
           //ObservadorConcreto.NotificarObservadores(objeto.observador, tipo_arreglo, id_fila);
        }else{
             try {
              this.SiguienteEslabon(operacion, thisDOM, objeto);
           }catch(error){
              console.log("Operación no implementada");
           }
        }
    }
});

var EnviarContrasenia = new Class({
    Interfaces: [ IChainOperacion ],
    SetearSiguienteInstancia: function(instancia){
        //implementación de IChainOperacion
        this.siguiente_instancia = instancia;
    },
    SiguienteEslabon: function(operacion, thisDOM, objeto) {
        //implementación de IChainOperacion
        this.siguiente_instancia.EjecutarOperacion(operacion, thisDOM, objeto);
    }, 
    EjecutarOperacion: function(operacion, thisDOM, objeto) {
        //implementación de IChainOperacion
        var id_rol = thisDOM.parent().parent().children(0).children(0).html();

        if(operacion == "EnviarContrasenia"){
        	var id_usuario = thisDOM.parent().parent().children().eq(0).children().eq(0).html();
	       alert("ENVIAR CORREO!!!");
           //ObservadorConcreto.NotificarObservadores(objeto.observador, tipo_arreglo, id_fila);
        }else{
             try {
              this.SiguienteEslabon(operacion, thisDOM, objeto);
           }catch(error){
              console.log("Operación no implementada");
           }
        }
    }
});


var VerRolesPermisos = new Class({
    Interfaces: [ IChainOperacion ],
    SetearSiguienteInstancia: function(instancia){
        //implementación de IChainOperacion
        this.siguiente_instancia = instancia;
    },
    SiguienteEslabon: function(operacion, thisDOM, objeto) {
        //implementación de IChainOperacion
        this.siguiente_instancia.EjecutarOperacion(operacion, thisDOM, objeto);
    }, 
    EjecutarOperacion: function(operacion, thisDOM, objeto) {
        //implementación de IChainOperacion
        var id_rol = thisDOM.parent().parent().children(0).children(0).html();

        if(operacion == "VerRolesPermisos"){
        	var id_usuario = thisDOM.parent().parent().children().eq(0).children().eq(0).html();
	       $.ajax({
				type: "GET",
				url: BASE_URL + "accesos/usuario/ver_roles_permisos",
				data: "data=",
				async: false,
				success:function(data){
					$("#modal-container").empty();
					$("#modal-container").append(data);
					$("#usuario_id").html(id_usuario);
					$("#btnModal").click();
				}
			});
           //ObservadorConcreto.NotificarObservadores(objeto.observador, tipo_arreglo, id_fila);
        }else{
             try {
              this.SiguienteEslabon(operacion, thisDOM, objeto);
           }catch(error){
              console.log("Operación no implementada");
           }
        }
    }
});

$(document).on("click", ".mootools", function() {
    var objeto = eval(this.get("objeto"));
    var eslabon_1 = new VerAccesos();
    var eslabon_2 = new EditarUsuario();
    var eslabon_3 = new EnviarContrasenia();
    var eslabon_4 = new VerRolesPermisos();
    var operacion = this.get("operacion"); console.log(operacion);
    eslabon_1.SetearSiguienteInstancia(eslabon_2);
    eslabon_2.SetearSiguienteInstancia(eslabon_3);
    eslabon_3.SetearSiguienteInstancia(eslabon_4);

    eslabon_1.EjecutarOperacion(operacion, $(this), objeto);
});