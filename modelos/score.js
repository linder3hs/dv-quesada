var mongoose = require('mongoose');

var EsquemaScore = mongoose.Schema({
    Grupo      : String,
    EquipoL    : String,
    PuntosL    : Number,
    EquipoV    : String,
    PuntosV    : Number,  
});

module.exports = mongoose.model("Scores", EsquemaScore, 'Scores');
