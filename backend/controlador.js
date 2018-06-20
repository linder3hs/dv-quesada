var Partido = require('../modelos/partido');
//Obtener los partidos programados
exports.getPartidos = function(req, res){
    Partido.find( {}, function(err, partidos){
        if (err)
            res.send(err);
            res.json(partidos);
    });
}