var Controlador = require('./controlador');
var mainDir =  "";

module.exports ={
    principal: function(app) {
        //Obtener los encuentros de los partidos
        app.get('/api/partidos', Controlador.getPartidos);

        //A la aplicación principal
        app.get('*', function(req, res){
            res.sendFile(mainDir + '/angular/index.html');
        });
},

iniciar: function (mdir) {
   mainDir = mdir;
}
}