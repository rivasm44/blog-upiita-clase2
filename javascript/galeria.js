/*$(function(){
	//debemos escuchar el evento click sbre las imagenes
	var cajitas = $(".preview");
	var imagen_principal = $("#imagen-normal");
	cajitas.click(function(evento){
		//alert("escucho el evento click");
		var detonadora = $(evento.target);
		var ruta = detonadora.attr("data-src-imagen");
		var contenedor = $("#producto");
		//oculto con animacion
		contenedor.fadeOut("slow",function(){
			imagen_principal.attr("src", ruta);
		});		
		contenedor.fadeIn("slow");
	});
});*/