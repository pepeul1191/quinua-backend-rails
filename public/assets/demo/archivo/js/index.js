$.fn.upload = function(remote, data, successFn, progressFn) {
	// if we dont have post data, move it along
	if (typeof data != "object") {
		progressFn = successFn;
		successFn = data;
	}

	var formData = new FormData();

	var numFiles = 0;
	this.each(function() {
		var i, length = this.files.length;
		numFiles += length;
		for (i = 0; i < length; i++) {
			formData.append(this.name, this.files[i]);
		}
	});

	// if we have post data too
	if (typeof data == "object") {
		for (var i in data) {
			formData.append(i, data[i]);
		}
	}

	var def = new $.Deferred();
	if (numFiles > 0) {
		// do the ajax request
		$.ajax({
			url: remote,
			type: "POST",
			xhr: function() {
				myXhr = $.ajaxSettings.xhr();
				if(myXhr.upload && progressFn){
					myXhr.upload.addEventListener("progress", function(prog) {
						var value = ~~((prog.loaded / prog.total) * 100);

						// if we passed a progress function
						if (typeof progressFn === "function") {
							progressFn(prog, value);

						// if we passed a progress element
						} else if (progressFn) {
							$(progressFn).val(value);
						}
					}, false);
				}
				return myXhr;
			},
			data: formData,
			dataType: "json",
			cache: false,
			contentType: false,
			processData: false,
			complete: function(res) {
				var json;
				try {
					json = JSON.parse(res.responseText);
				} catch(e) {
					json = res.responseText;
				}
				if (typeof successFn === "function") successFn(json);
				def.resolve(json);
			}
		});
	} else {
		def.reject();
	}

	return def.promise();
};

//fuente : https://www.youtube.com/watch?v=AZJfXr2LZXg

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

$( "#triggerInputFile1" ).click(function() {
  	$( "#inputFile1" ).click();
});

$( "#triggerUploadFile1" ).click(function() {
  	$( "#uploadFile1" ).click();
});

$("#uploadFile1").on("click", 
	function(){
		$("#inputFile1").upload(
			BASE_URL + "demo/archivo/upload",
				//"http://localhost:3001/archivo/recibir",
			{
				nombre : "Imagen 1 nombre",
				descripcion : "Imagen 1 descripcion"
			}, 
			function(success){
				alert("DONE");
				console.log(success);
				$("#lblIdImagen1").html(success);
		},	$("#prog1")
	);
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

$( "#triggerInputFile2" ).click(function() {
  	$( "#inputFile2" ).click();
});

$( "#triggerUploadFile2" ).click(function() {
  	$( "#uploadFile2" ).click();
});

$("#uploadFile2").on("click", 
	function(){
		$("#inputFile2").upload(
			BASE_URL + "demo/archivo/upload",
				//"http://localhost:3001/archivo/recibir",
			{
				nombre : "Imagen 2 nombre",
				descripcion : "Imagen 2 descripcion"
			}, 
			function(success){
				alert("DONE");
				console.log(success);
				$("#lblIdImagen2").html(success);
		},	$("#prog2")
	);
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

$( "#triggerInputFile3" ).click(function() {
  	$( "#inputFile3" ).click();
});

$( "#triggerUploadFile3" ).click(function() {
  	$( "#uploadFile3" ).click();
});

$("#uploadFile3").on("click", 
	function(){
		$("#inputFile3").upload(
			BASE_URL + "demo/archivo/upload",
				//"http://localhost:3001/archivo/recibir",
			{
				nombre : "Imagen 3 nombre",
				descripcion : "Imagen 3 descripcion"
			}, 
			function(success){
				alert("DONE");
				console.log(success);
				$("#lblIdImagen3").html(success);
		},	$("#prog3")
	);
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

var Demo = new Class({
    initialize: function(){
        var demo = new Object();
        demo.razon_social = $("#txtRazonSocial").val();
        demo.ruc = $("#txtRuc").val();
        demo.id_imagen1 = $("#lblIdImagen1").html();
        demo.id_imagen2 = $("#lblIdImagen2").html();
        demo.id_imagen3 = $("#lblIdImagen3").html();

        this.demo = demo;
    },
    Guardar(){
		 $.ajax({
                type: "POST",
                url: BASE_URL + "demo/archivo/guardar",
                data: "demo=" + JSON.stringify(this.demo),
                async: false,
                success:function(data){
                    var rpta = JSON.parse(data);
                    console.log(rpta);
                    if (rpta["tipo_mensaje"] == "error"){
                        $("#lblMensaje").html("Ha ocurrido un error al demo");
                        $("#lblMensaje").addClass("color-rojo");
                    }else{
                      if (rpta['tipo_mensaje'] == 'success'){
                         $("#lblMensaje").html(rpta['mensaje'][0]);
                         $("#lblMensaje").removeClass("color-rojo");
                         $("#lblMensaje").addClass("color-success");
                        if (typeof rpta['mensaje'][1] !== "undefined"){
                        	$("#lblId").html(rpta['mensaje'][1]);
                        }
                    }else{
                        $("#lblMensaje").html(rpta['mensaje'][0]);
                        $("#lblMensaje").removeClass("color-success");
                    	$("#lblMensaje").addClass("color-rojo");
                	}
        		}
            }
        });
    }
});

$(document).on("click", "#btnGuardarCambios",function() {
   var demo = new Demo(); demo.Guardar(); 
});

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

$("#upload").on("click", 
	function(){
		$("#myFile").upload(
			BASE_URL + "demo/archivo/upload",
				//"http://localhost:3001/archivo/recibir",
			{
				nombre : $("#txtNombre").val(),
				descripcion : $("#txtDescripcion").val()
			}, 
			function(success){
				alert("DONE");
				console.log(success);
		},	$("#prog")
	);
});