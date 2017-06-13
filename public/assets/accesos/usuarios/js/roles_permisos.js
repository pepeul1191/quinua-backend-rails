var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Nombre",index:"nombre",estilos:"width: 200px;"},
	{titulo:"Llave",index:"llave",estilos:"width: 200px;"},
	{titulo:"Existe",index:"existe",estilos:"width: 20px;"}
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"label",estilos:"width:200px;", index:"nombre", edicion:""},
	{tipo:"label",estilos:"width:200px;", index:"llave", edicion:""},
	{tipo:"checkbox",estilos:"width:60px; padding-left: 18px;", index:"existe", edicion:""}
];

var array_json_btn_td = [
	{clase:"fa fa-times",url:"#",alt:"Eliminar permiso",estilos:"padding-left: 32px;", operacion:"QuitarFila"}
]; 

var array_json_btn = [
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var array_extra_data = [
				{tipo: "label", llave: "usuario_id", id : "usuario_id"}
];

var ajax_dao_tipo_activos = new AjaxPython(); 
ajax_dao_tipo_activos.Constructor("GET", BASE_URL + "accesos/usuario/listar_permisos/" + $("#usuario_id").html(), "", false);

var tablaPermisos = new Grid();

tablaPermisos.SetTableId("tablaPermisos");
tablaPermisos.SetTableObj("tablaPermisos");
tablaPermisos.SetTableHeader(array_json_th);
tablaPermisos.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_tipo_activos);
tablaPermisos.SetTableFooter(array_json_btn, false);
tablaPermisos.SetLabelMensaje("#txtMensajeRptaModal");
tablaPermisos.SetURLGuardar(BASE_URL + "accesos/usuario/asociar_permisos");
tablaPermisos.SetExtraData(array_extra_data);

tablaPermisos.MostrarTable();

var array_json_th = [
	{titulo:"id", index: "id", estilos:"width: 10px; display:none;"},
	{titulo:"Nombre",index:"nombre",estilos:"width: 200px;"},
	{titulo:"Existe",index:"existe",estilos:"width: 20px;"}
];

var array_json_td = [
	{tipo:"label_id",estilos:"color: blue; display:none", index:"id", edicion:""},
	{tipo:"label",estilos:"width:200px;", index:"nombre", edicion:""},
	{tipo:"checkbox",estilos:"width:60px; padding-left: 18px;", index:"existe", edicion:""}
];

var array_json_btn_td = [
	{clase:"fa fa-list",url:"#",alt:"Ver Permisos",estilos:"padding-left: 20px;", operacion:"VerPermisos"},
	{clase:"fa fa-times",url:"#",alt:"Eliminar rol",estilos:"padding-left: 32px;", operacion:"QuitarFila"}
]; 

var array_json_btn = [
	{tipo: "guardar_tabla", operacion:"GuardarTabla", icono: "fa fa-check", label: "Guardar Cambios", clase: "boton-tabla  mootools" }
];

var ajax_dao_tipo_activos = new AjaxPython(); 
ajax_dao_tipo_activos.Constructor("GET", BASE_URL + "accesos/usuario/listar_roles/" + $("#usuario_id").html(), "", false);

var tablaRoles = new Grid();

tablaRoles.SetTableId("tablaRoles");
tablaRoles.SetTableObj("tablaRoles");
tablaRoles.SetTableHeader(array_json_th);
tablaRoles.SetTableBody(array_json_td, array_json_btn_td, ajax_dao_tipo_activos);
tablaRoles.SetTableFooter(array_json_btn, false);
tablaRoles.SetLabelMensaje("#txtMensajeRptaModal");
tablaRoles.SetExtraData(array_extra_data);
tablaRoles.SetURLGuardar(BASE_URL + "accesos/usuario/asociar_roles");

tablaRoles.MostrarTable();