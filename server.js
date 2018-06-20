//Aquí se incializan los módulos
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var rutas = require('./backend/rutas.js');

//Configuracion de la base de datos/ conexion
mongoose.connect('mongodb://localhost:27017/Lab02');
app.use(express.static(__dirname + '/angular'));
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
// app.use('/',rutas);
// app.set('view engine','ejs');

//Cargador de rutas
rutas.iniciar(__dirname);
rutas.principal(app);

// function servidor(){
//     console.log('Se esta abriendo en el puerto 3000');
// }

// var server = app.listen(3000,servidor);

//Inicia el servidor
app.listen(3000);
console.log("Listening on port 3000");