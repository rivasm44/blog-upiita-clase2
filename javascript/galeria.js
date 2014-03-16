$(function(){
	//obtener los elementos que queremos manipular
	var preview = $(".preview");
	var producto = $("#imagen-normal");
	var contenedor = $("#producto");
	
	preview.click(function(evento){
		//evento tiene informacion de quien genera el evento
		var cajita_detonadora = $(evento.target);
		//1.-obtener la ruta de la nueva imagen
		var ruta = cajita_detonadora.attr("data-src-imagen");
		//alert(ruta);
		//2.-camabiar el atributo src de producto
		//producto.attr("src", ruta);
		//hacer el cambio mas suave
		contenedor.fadeOut("slow",function(){//oculta
			producto.attr("src", ruta);//cambia la imagen
		});
		contenedor.fadeIn("slow");	//muestra
	});
});

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