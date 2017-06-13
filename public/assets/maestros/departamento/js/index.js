var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Nombre",index:"nombre",estilos:"width: 90px;"},
	{titulo:"Botones",index:"NA",estilos:"width: 10px;"}
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"text",estilos:"width:90px;", index:"nombre", edicion:""},
	{tipo:"botones", index:"botones", edicion:"true"}
];

var array_json_btn_td = [
	{clase:"fa fa-chevron-right",url:"#",alt:"Gestionar Provincias del Departamento",estilos:"padding-left: 20px;", operacion:"MostrarProvincias"},
	{clase:"fa fa-times",url:"#",alt:"Eliminar módulo",estilos:"padding-left: 10px;", operacion:"QuitarFila"}
]; 

var array_json_btn = [
	{tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_modulo = new AjaxPython(); 
ajax_modulo.Constructor("GET", BASE_URL + "maestros/departamentos", "", false);

var tablaDepartamentos = new Grid();
var tablaProvincias = new Grid();
var tablaDistritos = new Grid();

tablaDepartamentos.SetTableId("tablaDepartamentos");
tablaDepartamentos.SetTableObj("tablaDepartamentos");
tablaDepartamentos.SetTableHeader(array_json_th);
tablaDepartamentos.SetTableBody(array_json_td, array_json_btn_td, ajax_modulo);
tablaDepartamentos.SetTableFooter(array_json_btn, false);
tablaDepartamentos.SetLabelMensaje("#txtMensajeRpta");
tablaDepartamentos.SetURLGuardar(BASE_URL + "maestros/departamento/guardar");

tablaDepartamentos.MostrarTable();

var MostrarProvincias = new Class({
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
        //console.log("MostrarProvincias");
        var departamento_id = thisDOM.parent().parent().children(0).children(0).html();

        if(operacion == "MostrarProvincias"){
        	tablaProvincias.BorrarTable();
        	tablaDistritos.BorrarTable();

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
				{clase:"fa fa-th-list",url:"#",alt:"Cargar Distritos",estilos:"padding-left: 23px;", operacion:"MostrarDistritos"}, 
				{clase:"fa fa-times",url:"#",alt:"Quitar Fila",estilos:"padding-left: 23px;", operacion:"QuitarFila"}
			]; 

			var array_json_btn = [
				{tipo: "agrega_fila", operacion:"AgregarFila", icono: "fa fa-plus", label: "Agregar Registro", clase: "boton-tabla  mootools"},
				{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
			];

			var array_extra_data = [
				{tipo: "label", llave: "departamento_id", id : "departamento_id"}
			];

			var ajax_subtitulos = new AjaxPython(); 
			ajax_subtitulos.Constructor("GET", BASE_URL + "maestros/provincias/" + departamento_id, "", false);

			tablaProvincias.SetTableId("tablaProvincias");
			tablaProvincias.SetTableObj("tablaProvincias");
			tablaProvincias.SetTableHeader(array_json_th);
			tablaProvincias.SetTableBody(array_json_td, array_json_btn_td, ajax_subtitulos);
			tablaProvincias.SetTableFooter(array_json_btn, false);
			tablaProvincias.SetURLGuardar(BASE_URL + "maestros/provincia/guardar/");
			tablaProvincias.SetExtraData(array_extra_data);

			$("#departamento_id").html(departamento_id);
           
          	tablaProvincias.MostrarTable();
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

var MostrarDistritos = new Class({
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
        //console.log("MostrarDistritos");
        var provincia_id = thisDOM.parent().parent().children(0).children(0).html();

        if(operacion == "MostrarDistritos"){
        	tablaDistritos.BorrarTable();

        	var array_json_th = [
				{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
				{titulo:"Nombre",index:"nombre",estilos:"width: 90px;"},
				{titulo:"Botones",index:"NA",estilos:"width: 20px;"}
			];

			var array_json_td = [
				{tipo:"label_id",estilos:"color: blue; display:none;", index:"id", edicion:""},
				{tipo:"text",estilos:"width:90px;", index:"nombre", edicion:""},
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
				{tipo: "label", llave: "provincia_id", id : "provincia_id"}
			];
			
			var ajax_dao_subtitulos = new AjaxPython(); 
			ajax_dao_subtitulos.Constructor("GET", BASE_URL + "maestros/distritos/" + provincia_id, "", false);

			tablaDistritos.SetTableId("tablaDistritos");
			tablaDistritos.SetTableObj("tablaDistritos");
			tablaDistritos.SetTableHeader(array_json_th);
			tablaDistritos.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_subtitulos);
			tablaDistritos.SetTableFooter(array_json_btn, false);
			tablaDistritos.SetURLGuardar(BASE_URL + "maestros/distrito/guardar/");
			tablaDistritos.SetExtraData(array_extra_data);

			$("#provincia_id").html(provincia_id);
           
          tablaDistritos.MostrarTable();
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
    var eslabon_1 = new MostrarProvincias();
    var eslabon_2 = new MostrarDistritos();

    eslabon_1.SetearSiguienteInstancia(eslabon_2);

    var operacion = this.get("operacion"); console.log(operacion);

    eslabon_1.EjecutarOperacion(operacion, $(this), objeto);
});

var autocompleteDistritos = new Autocomplete();

autocompleteDistritos.SetUrl(BASE_URL + "maestros/distrito/buscar/");
autocompleteDistritos.SetUlSugerencia("autoDistrito");
autocompleteDistritos.SetDestinoIdSugerencia("idDistrito");
autocompleteDistritos.SetNombreObjeto("autocompleteDistritos");
autocompleteDistritos.SetDestinoValorSugerencia("txtDistrito");
autocompleteDistritos.SetIndices("id", "nombre");
autocompleteDistritos.SetFuncionAdicional("");
