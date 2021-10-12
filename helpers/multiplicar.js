const fs = require('fs');
var colors = require ('colors')




const crearArchivo = (base = 5, bandera = false, hasta = 25 ) =>{
    return new Promise( (resolve, reject) =>{
        let salida, consola = '';  
        for (let i = 1; i <= hasta; i++) {
            salida +=`${base} x ${i} = ${base * i} \n`;
            consola +=`${base} ${'x'.green} ${i} ${ '='.green} ${base * i} \n`;
        }
if(bandera === true){
    console.log("==========================".green);
    console.log(`Tabla del numero:`,colors.blue(base));
    console.log("==========================".green); 
    console.log(consola);
}
    
    fs.writeFileSync(`./salida/tabla-${base}.txt`,salida,);
    
    resolve(`tabla-${ base }.txt creado`)
    
    
})}
module.exports = {
    crearArchivo,
}