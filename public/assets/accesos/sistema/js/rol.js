var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Nombre",index:"nombre",estilos:"width: 200px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 10px;"}
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"text",estilos:"width:200px;", index:"nombre", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var array_json_btn_td = [
	{clase:"fa fa-list",url:"#",alt:"Ver Permisos",estilos:"padding-left: 20px;", operacion:"VerPermisos"},
	{clase:"fa fa-times",url:"#",alt:"Eliminar rol",estilos:"padding-left: 32px;", operacion:"QuitarFila"}
]; 

var array_json_btn = [
	{tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_dao_tipo_activos = new AjaxPython(); 
ajax_dao_tipo_activos.Constructor("GET", BASE_URL + "accesos/rol/listar/" + $("#sistema_id").html(), "", false);

var tablaRoles = new Grid();
var tablaPermisos = new Grid();

var array_extra_data_rol = [
	{tipo: "label", llave: "sistema_id", id : "sistema_id"}
];

tablaRoles.SetTableId("tablaRoles");
tablaRoles.SetTableObj("tablaRoles");
tablaRoles.SetTableHeader(array_json_th);
tablaRoles.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_tipo_activos);
tablaRoles.SetTableFooter(array_json_btn, false);
tablaRoles.SetLabelMensaje("#txtMensajeRptaModal");
tablaRoles.SetExtraData(array_extra_data_rol);
tablaRoles.SetURLGuardar(BASE_URL + "accesos/rol/guardar");

tablaRoles.MostrarTable();

var VerPermisos = new Class({
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

        if(operacion == "VerPermisos"){
        	tablaPermisos.BorrarTable();

        	var array_json_th = [
				{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
				{titulo:"Nombre",index:"nombre",estilos:"width: 200px;"},
				{titulo:"Llave",index:"llave",estilos:"width: 200px;"},
				{titulo:"Existe",index:"existe",estilos:"width: 20px;"}
			];

			var array_json_td = [
				{tipo:"label_id",estilos:"color: blue; display:none;", index:"id", edicion:""},
				{tipo:"label",estilos:"width:200px;", index:"nombre", edicion:""},
				{tipo:"label",estilos:"width:200px;", index:"llave", edicion:""},
				{tipo:"checkbox",estilos:"width:60px; padding-left: 18px;", index:"existe", edicion:""}
			];

			var array_json_btn_td = [
			]; 

			var array_json_btn = [
				{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
			];

			var array_extra_data = [
				{tipo: "label", llave: "id_rol", id : "id_rol"}
			];
			
			var ajax_dao_permisos = new AjaxPython(); 
			ajax_dao_permisos.Constructor("GET", BASE_URL + "accesos/permiso/listar_asociados/" + $("#sistema_id").html() + "/" +  id_rol, "", false);

			tablaPermisos.SetTableId("tablaPermisos");
			tablaPermisos.SetTableObj("tablaPermisos");
			tablaPermisos.SetTableHeader(array_json_th);
			tablaPermisos.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_permisos);
			tablaPermisos.SetTableFooter(array_json_btn, false);
			tablaPermisos.SetURLGuardar(BASE_URL + "accesos/rol/asociar_permisos");
			tablaPermisos.SetExtraData(array_extra_data);
			tablaPermisos.SetLabelMensaje("#txtMensajeRptaModal");

			$("#id_rol").html(id_rol);
           
          tablaPermisos.MostrarTable();
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
    var eslabon_5 = new VerPermisos();

    var operacion = this.get("operacion"); //console.log(operacion);

    eslabon_5.EjecutarOperacion(operacion, $(this), objeto);
});
