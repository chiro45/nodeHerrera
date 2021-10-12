const { describe } = require('yargs');

const argv = require('yargs')
  .options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'

  })
  .options('l', {
    alias: 'listar',
    type: 'boolean',
    demandOption:true,
   default:false,
   describe: 'Es para listar la tabla en consola'
  })
  .options('h', {
    alias: 'hasta',
    type: 'number',
    demandOption: true,
   default:25,
   describe: 'Es para indicar hasta donde iterar'
  })
  .check((argv,options)=>{
    console.log('yargs', argv)
    if(isNaN(argv.b)){
    throw 'la base tiene que ser un numero'
  } 
  return true;
  })
  
.argv;
module.exports = argv;