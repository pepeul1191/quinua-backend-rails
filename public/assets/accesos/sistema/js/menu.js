var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Nombre",index:"nombre",estilos:"width: 90px;"},
	{titulo:"Url",index:"url",estilos:"width: 90px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 10px;"}
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"text",estilos:"width:90px;", index:"nombre", edicion:""},
	{tipo:"text",estilos:"width:90px;", index:"url", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var array_json_btn_td = [
	{clase:"fa fa-chevron-right",url:"#",alt:"Gestionar subtitulos",estilos:"padding-left: 20px;", operacion:"MostrarSubtitulos"},
	{clase:"fa fa-times",url:"#",alt:"Eliminar módulo",estilos:"padding-left: 10px;", operacion:"QuitarFila"}
]; 

var array_json_btn = [
	{tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_modulo = new AjaxPython(); 
ajax_modulo.Constructor("GET", BASE_URL + "accesos/modulo/listar/" + $("#sistema_id").html(), "", false);

var tablaModulos = new Grid();
var tablaSubtitulos = new Grid();
var tablaItems = new Grid();

var array_extra_data_modulo = [
	{tipo: "label", llave: "sistema_id", id : "sistema_id"}
];

tablaModulos.SetTableId("tablaModulos");
tablaModulos.SetTableObj("tablaModulos");
tablaModulos.SetTableHeader(array_json_th);
tablaModulos.SetTableBody(array_json_td, array_json_btn_td, ajax_modulo);
tablaModulos.SetTableFooter(array_json_btn, false);
tablaModulos.SetLabelMensaje("#txtMensajeRptaModal");
tablaModulos.SetExtraData(array_extra_data_modulo);
tablaModulos.SetURLGuardar(BASE_URL + "accesos/modulo/guardar");

tablaModulos.MostrarTable();

var MostrarSubtitulos = new Class({
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
        //console.log("MostrarSubtitulos");
        var id_modulo = thisDOM.parent().parent().children(0).children(0).html();

        if(operacion == "MostrarSubtitulos"){
        	tablaSubtitulos.BorrarTable();
        	tablaItems.BorrarTable();

        	var array_json_th = [
				{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
				{titulo:"Nombre",index:"nombre",estilos:"width: 40%;"},
				{titulo:"Botones",index:"NA",estilos:"width: 20%;"}
			];

			var array_json_td = [
				{tipo:"label_id",estilos:"color: blue; display:none;", index:"id", edicion:""},
				{tipo:"text",estilos:"width:100%;", index:"nombre", edicion:""},
				{tipo:"botones", index:"botones", edicion:"true"}
			];

			var array_json_btn_td = [
				{clase:"fa fa-th-list",url:"#",alt:"Cargar Provincias",estilos:"padding-left: 23px;", operacion:"MostrarItems"}, 
				{clase:"fa fa-times",url:"#",alt:"Quitar Fila",estilos:"padding-left: 23px;", operacion:"QuitarFila"}
			]; 

			var array_json_btn = [
				{tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
				{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
			];

			var array_extra_data = [
				{tipo: "label", llave: "id_modulo", id : "id_modulo"}
			];

			var ajax_subtitulos = new AjaxPython(); 
			ajax_subtitulos.Constructor("GET", BASE_URL + "accesos/subtitulo/listar/" + id_modulo, "", false);

			tablaSubtitulos.SetTableId("tablaSubtitulos");
			tablaSubtitulos.SetTableObj("tablaSubtitulos");
			tablaSubtitulos.SetTableHeader(array_json_th);
			tablaSubtitulos.SetTableBody(array_json_td, array_json_btn_td, ajax_subtitulos);
			tablaSubtitulos.SetTableFooter(array_json_btn, false);
			tablaSubtitulos.SetLabelMensaje("#txtMensajeRptaModal");
			tablaSubtitulos.SetURLGuardar(BASE_URL + "accesos/subtitulo/guardar/");
			tablaSubtitulos.SetExtraData(array_extra_data);

			$("#id_modulo").html(id_modulo);
           
          	tablaSubtitulos.MostrarTable();
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

var MostrarItems = new Class({
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
        //console.log("MostrarItems");
        var id_subtitulo = thisDOM.parent().parent().children(0).children(0).html();

        if(operacion == "MostrarItems"){
        	tablaItems.BorrarTable();

        	var array_json_th = [
				{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
				{titulo:"Nombre",index:"nombre",estilos:"width: 90px;"},
				{titulo:"Url",index:"url",estilos:"width: 100px;"},
				{titulo:"Botones",index:"NA",estilos:"width: 20px;"}
			];

			var array_json_td = [
				{tipo:"label_id",estilos:"color: blue; display:none;", index:"id", edicion:""},
				{tipo:"text",estilos:"width:90px;", index:"nombre", edicion:""},
				{tipo:"text",estilos:"width:100px;", index:"url", edicion:""},
				{tipo:"botones", index:"botones", edicion:"true"}
			];

			var array_json_btn_td = [
				{clase:"fa fa-times",url:"#",alt:"Quitar Fila",estilos:"padding-left: 27px;", operacion:"QuitarFila"}
			]; 

			var array_json_btn = [
				{tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
				{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
			];

			var array_extra_data = [
				{tipo: "label", llave: "id_subtitulo", id : "id_subtitulo"}
			];
			
			var ajax_dao_subtitulos = new AjaxPython(); 
			ajax_dao_subtitulos.Constructor("GET", BASE_URL + "accesos/item/listar/" + id_subtitulo, "", false);

			tablaItems.SetTableId("tablaItems");
			tablaItems.SetTableObj("tablaItems");
			tablaItems.SetTableHeader(array_json_th);
			tablaItems.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_subtitulos);
			tablaItems.SetTableFooter(array_json_btn, false);
			tablaItems.SetURLGuardar(BASE_URL + "accesos/item/guardar/");
			tablaItems.SetLabelMensaje("#txtMensajeRptaModal");
			tablaItems.SetExtraData(array_extra_data);

			$("#id_subtitulo").html(id_subtitulo);
           
          tablaItems.MostrarTable();
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
    var eslabon_1 = new MostrarSubtitulos();
    var eslabon_2 = new MostrarItems();

    eslabon_1.SetearSiguienteInstancia(eslabon_2);

    var operacion = this.get("operacion"); console.log(operacion);

    eslabon_1.EjecutarOperacion(operacion, $(this), objeto);
});