var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Nombre",index:"nombre",estilos:"width: 250px;"},
    {titulo:"Versión",index:"version",estilos:"width: 100px;"},
    {titulo:"Repositorio",index:"repositorio",estilos:"width: 250px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 80px;"}
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"text",estilos:"width:250px;", index:"nombre", edicion:""},
    {tipo:"text",estilos:"width:100px;", index:"version", edicion:""},
    {tipo:"text",estilos:"width:250px;", index:"repositorio", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var array_json_btn_td = [
	{clase:"fa fa-chevron-right",url:"#",alt:"Gestionar Menú",estilos:"padding-left: 2px;", operacion:"GestionarMenu"},
	{clase:"fa fa-list",url:"#",alt:"Gestionar Permisos",estilos:"padding-left: 2px;", operacion:"GestionarPermisos"},
	{clase:"fa fa-id-card-o",url:"#",alt:"Gestionar Roles",estilos:"padding-left: 2px;", operacion:"GestionarRoles"},
	{clase:"fa fa-times",url:"#",alt:"Eliminar capa",estilos:"padding-left: 2px;", operacion:"QuitarFila"}
]; 

var array_json_btn = [
	{tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_dao_tipo_activos = new AjaxPython(); 
ajax_dao_tipo_activos.Constructor("GET", BASE_URL + "accesos/sistema/listar", "", false);

var tablaSistemas = new Grid();

tablaSistemas.SetTableId("tablaSistemas");
tablaSistemas.SetTableObj("tablaSistemas");
tablaSistemas.SetTableHeader(array_json_th);
tablaSistemas.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_tipo_activos);
tablaSistemas.SetTableFooter(array_json_btn, false);
tablaSistemas.SetLabelMensaje("#txtMensajeRpta");
tablaSistemas.SetURLGuardar(BASE_URL + "accesos/sistema/guardar");

tablaSistemas.MostrarTable();

var GestionarMenu = new Class({
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
        if(operacion == "GestionarMenu"){
        	var id_sistema = thisDOM.parent().parent().children().eq(0).children().eq(0).html();
	       $.ajax({
				type: "GET",
				url: BASE_URL + "accesos/sistema/ver_menu",
				data: "data=",
				async: false,
				success:function(data){
					$("#modal-container").empty();
					$("#modal-container").append(data);
					$("#sistema_id").html(id_sistema);
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

var GestionarPermisos = new Class({
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
        if(operacion == "GestionarPermisos"){
        	var id_sistema = thisDOM.parent().parent().children().eq(0).children().eq(0).html();
	       $.ajax({
				type: "GET",
				url: BASE_URL + "accesos/sistema/ver_permisos",
				data: "data=",
				async: false,
				success:function(data){
					$("#modal-container").empty();
					$("#modal-container").append(data);
					$("#sistema_id").html(id_sistema);
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

var GestionarRoles = new Class({
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
        if(operacion == "GestionarRoles"){
        	var id_sistema = thisDOM.parent().parent().children().eq(0).children().eq(0).html();
	       $.ajax({
				type: "GET",
				url: BASE_URL + "accesos/sistema/ver_roles",
				data: "data=",
				async: false,
				success:function(data){
					$("#modal-container").empty();
					$("#modal-container").append(data);
					$("#sistema_id").html(id_sistema);
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
    var eslabon_1 = new GestionarMenu();
    var eslabon_2 = new GestionarPermisos();
    var eslabon_3 = new GestionarRoles();
    var operacion = this.get("operacion"); console.log(operacion);

	 eslabon_1.SetearSiguienteInstancia(eslabon_2);
    eslabon_2.SetearSiguienteInstancia(eslabon_3);

    eslabon_1.EjecutarOperacion(operacion, $(this), objeto);
});