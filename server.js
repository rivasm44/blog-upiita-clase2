//1,.Creamos un objeto para acceder a las funciones de express
var express = require("express"); //obtiene express
var app = express();//funcinalidades que permiten levantar el servidor

//5.-Obtenemos objetos para usar consolidate y dust
var consolidate = require("consolidate");
var dust = require("dustjs-linkedin");

//2.-Configuramos el puerto para escuchar
app.listen(8081);//Configuramos el puerto
console.log("Servidor levantado...");

//3.-Hacemos que nuestra pagina despache archivos estaticos
//app.use("/", express.static(__dirname + "/vistas"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/imagenes", express.static(__dirname + "/imagenes"));
app.use("/videos", express.static(__dirname + "/videos"));
console.log("Directorios estáticos configurados...");

//4.-Hagamos que se muestre el directorio de imagenes
app.use("/imagenes", express.directory(__dirname + "/imagenes"));

/******  HACEMOS LA PAGINA DINAMICA  *******/
//6.-Configuramos dust para hacer vistas dinamica
//definimos la carpeta donde se encontraran las vistas
app.set("views",__dirname + "/vistas");
//extension de las vistas sera .dust
app.set("view engine", "dust");
//para manipular archivo .dust uso consolidate.dust
app.engine("dust", consolidate.dust);

//7.-Habilitar el parseo de inputs para que el servidor pueda recibir parametros
app.use(express.urlencoded());

//8.-Respondemos a una peticion GET (/index)
//esta peticion se realiza cuando escribirmos en el navegador
//http://127.0.0.1:8081/index
app.get("/index", function(request, response){
	response.render("index");
});

//9.-Respondemos a la peticion POST (/suscribirse)
//esta peticion se realiza cuando oprimo el boton submit en
//la FORM que declare en el footer del index.dust
app.post("/suscribirse", function(req, res){
	console.log("Email:" + req.body.email);
	res.render("respuesta_suscribirse",{
		email: req.body.email
	});
});

//10.-Respondemos a una peticion GET (/contacto)
//esta peticion se realiza cuando escribirmos en el navegador
//http://127.0.0.1:8081/contacto
app.get("/contacto", function(request, response){
	response.render("contacto");
});

//11.-Respondemos a otra peticion POST (/contacto)
//esta peticion se realiza cuando oprimo el boton submit en
//la FORM que declare en el archivo contacto.dust
app.post("/respuesta_contacto", function(request, response){
	/*imprimo los datos recibidos en la consola del servidor*/
	console.log("Nombre:" + request.body.nombre);
	console.log("Email:" + request.body.email);
	console.log("URL:" + request.body.url);
	console.log("Edad:" + request.body.edad);
	console.log("Comentario:" + request.body.comentario);
	/*respondo al cliente, enviandole respuesta_contacto.dust
	 y un objeto JSON con la info*/
	response.render("respuesta_contacto",{
		nombre: request.body.nombre,
		email: request.body.email,
		url: request.body.url,
		edad: request.body.edad
	});
});



