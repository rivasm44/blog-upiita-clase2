$(function(){
	//esto se va a ejecutar cuando el DOm este listo
	var caja = $("#redes-sociales");
	var cerrar = $("#cerrar");
	var iconitos = $("#iconitos");
	//var contenido = caja.html();
	//alert(contenido);
	//css cambia atributos de css
	//caja.css("background-color", "red");
	//añadir una clase
	//caja.addClass("prueba");
	//escuchar el evento click
	cerrar.click(function(){
		//remueve la caja
		//caja.remove();
		//ocultar la caja
		/*iconitos.fadeOut("slow",function(){
			cerrar.html("mostrar");
		});*/
		iconitos.fadeToggle("slow");
		if(cerrar.html() === "cerrar")
		{
			cerrar.html("mostrar");
		}
		else
		{
			cerrar.html("cerrar");
		}
	});
	
});

//$(function(){
	//OBTIENE HTML
	//var codigo = $("#redes-sociales").html();
	//alert(codigo);
	
	//AGREGA HTML
	//$("#redes-sociales").html("<p>Aprendiendo Jquery<p>");
	
	//ESCUCHANDO EL EVENTO CLICK
	//$("#redes-sociales").click(function(){
		//$("#redes-sociales").append("<p>Aprendiendo Jquery<p>");
		//OBTENIENDO EL VALOR DE UN ATRIBUTO
		//var color = $("#redes-sociales").css("position");
		//alert(color);
	//});
//});

//$(function(){
	//$("#cerrar").click(function(){
		//ECUCHAR EL CLICK Y REMOVER
		//$("#redes-sociales").remove();
		//ESCONDER LA CAJA
		//$("#redes-sociales").fadeOut("slow");
		//OCULTAR O MOSTRAR LAS IMAGENES
	/*	$("#imagenes-redes").slideToggle("slow");
		var contenido = $("#redes-sociales a").html();
		if (contenido === "ocultar")
			{
			  $("#redes-sociales a").html("mostrar");
			}
		else
			{
			  $("#redes-sociales a").html("ocultar");
			}
		return false;
	});	
	
	
});*/