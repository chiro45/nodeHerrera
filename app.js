
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require ('./config/yars')
var colors = require ('colors')
//opcion l deberia listar
//tipo de dato boolean
//opcional
//default en false
// se mandara l como 
console.clear();
  
crearArchivo(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
  .catch(err => console.log(err));

