const fs = require('fs');

fs.writeFileSync('./ejemplo.txt', "Hola, estoy creando un nuevo archivo");

if(fs.existsSync('./ejemplo.txt')){
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8')
    console.log(contenido);

    fs.appendFileSync('./ejemplo.txt', '\nIncorporo mas contenido');
    contenido = fs.readFileSync('.ejemplo.txt', 'utf-8');
    console.log(contenido);

    fs.unlinkSync('./ejemplo.txt');
};