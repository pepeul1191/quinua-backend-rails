var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"",index:"momento",estilos:"width: 200px;"},
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"label",estilos:"width:200px;", index:"momento", edicion:""},
];

var array_json_btn_td = [
]; 

var array_json_btn = [
];

var ajax_dao_tipo_activos = new AjaxPython(); 
ajax_dao_tipo_activos.Constructor("GET", BASE_URL + "accesos/usuario/listar_accesos/" + $("#usuario_id").html(), "", false);

var tablaAccesos = new Grid();

tablaAccesos.SetTableId("tablaAccesos");
tablaAccesos.SetTableObj("tablaAccesos");
tablaAccesos.SetTableHeader(array_json_th);
tablaAccesos.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_tipo_activos);
tablaAccesos.SetTableFooter(array_json_btn, false);
tablaAccesos.SetLabelMensaje("#txtMensajeRpta");

tablaAccesos.MostrarTable();