$(function() {

	//obteniendo mi posicion
	var latitud;
	var longitud;
	navigator.geolocation.getCurrentPosition(function(posicion) {
		latitud = posicion.coords.latitude;
		longitud = posicion.coords.longitude;
		//alert("Tu posicion es lat " + latitud + " lon " + longitud);
		//pintando mi posicion con goMap
		$("#mapa").goMap({
			markers : [{
				latitude : latitud,
				longitude : longitud,
				title: "Yo",
				draggable: true,
				html: "UPIITA-IPN",
				icon:"imagenes/arrastrar.png"
			},{
				address: "Avenida Montevideo 363, Lindavista, Gustavo A. Madero, 07300 Gustavo A. Madero, DF",
				title: "Mi empresa",
				draggable: false,
				html: "Montevideo 363, Lindavista",
				icon:"imagenes/apartamento.png"
			}],
			zoom : 11,
			maptype: "roadmap",
		});
	});
}); 