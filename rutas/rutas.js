
var express = require('express');
var router = express.Router();

router.get('/', inicio);
router.get('/partido', partidos);
router.get('/equipo', equipos);
router.get('/score', scores);
router.get('/sesion', sesions);

function inicio(req, res) {
    res.render('index', {});
}
function partidos(req, res) {
    res.render('partido', {});
}
function equipos(req, res) {
    res.render('equipo', {});
}
function scores(req, res) {
    res.render('score', {});
}
function sesions(req, res) {
    res.render('sesion', {});
}


module.exports = router;