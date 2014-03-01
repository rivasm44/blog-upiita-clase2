//0.-npm install express
//1.-usamos la libreria express para levantar un serv
var express = require("express");

//6.-Definimos un engine para los templates
var consolidate = require("consolidate");
var dust = require("dustjs-linkedin");

//2.-app contiene la conf para levanatr el serv
var app = express();

app.listen(8081);
console.log("Servidor levantado...");

//3.-Indicamos a que carpetas se puede acceder Estáticamnte
//app.use("/", express.static(__dirname + "/vistas"));

//4.-indicar que los demas recursos son estaticos
app.use("/css", express.static(__dirname + "/css"));
app.use("/videos", express.static(__dirname + "/videos"));
app.use("/imagenes", express.static(__dirname + "/imagenes"));

//5.-hagamos que se muestre el directorio de las imagenes
app.use("/imagenes", express.directory(__dirname + "/imagenes"));

/****  AHORA HAGAMOS QUE LA PÁGINA SEA DINÁMICA  6.-*****/

//7.-Indicamos el engine para acceder a las vistas
app.engine("dust", consolidate.dust);
app.set("views", __dirname + "/vistas");
app.set("view engine", "dust");

//8.- habilitar el parseo de inputs para recibir parámetros
app.use(express.urlencoded());


//9.-respondemos a peticiones get
app.get("/index", function(req, res){
	res.render("index");
});

//10.- respondemos a la petición post de suscribirse
app.post("/suscribirse", function(request, response){
	console.log("Email:" + request.body.email);
	response.render("respuesta_contacto",{
		email: request.body.email
	});
});