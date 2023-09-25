////const express = require('express')
//const app = express()

//app.listen(3000, ()=>{
//    console.log('Aplicación corriendo en el puerto 3000')
//})

const moment = require = require ('moment');
const hoy = moment()
console.log(hoy);
console.log(moment().format('MMMM Do YYYY, h:mm a'));
const fecha_nac = moment('1973-17-12', 'YYYY-MM-DD');

if(fecha_nac.isValid()){
    console.log(`Desde mi naciemiento han pasado ${hoy.diff(fecha_nac, 'days')} días.`);
}else{
    console.log('fecha invalida')
}