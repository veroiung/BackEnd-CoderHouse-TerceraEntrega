const http = require('http');

//creamos el server
const server = http.createServer((request, response)=>{
    response.end("mi primer hola mundo desde el server con modulo nativo HTTP!")
})

//abrimos puero de escucha
server.listen(8080, ()=>{
    console.log(`Server run port: 8080`);
})