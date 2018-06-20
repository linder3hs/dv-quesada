var mongoose = require('mongoose');

var EsquemaPartido = mongoose.Schema({
    Liga       : String,
    EquipoL    : String,
    Hora       : Date,
    EquipoV    : String,
    Lugar      : String,  
});

module.exports = mongoose.model("Partidos", EsquemaPartido, 'Partidos');


