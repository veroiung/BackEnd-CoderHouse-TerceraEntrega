import express from 'express';


// declaramos express
const app = express();
const PORT = 8080;



// endpoint - nuetra API
app.get('/saludo', (req, res) => {
    res.send("Hola desde el backend usando Express!!")
})

//Usando req.params
app.get('/usuario2/:nombre/:apellido', (req, res)=>{
    console.log(req.params);

    res.send(`Hola, tu nombre completo es: ${req.params.nombre} ${req.params.apellido}`)
})



// confi puerto de escucha
app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`);
});


//ejemplo

const usuarios = [
    {id: 1, nombre: "Die", apellido: "Bell", edad: "x", genero:"m"},
    {id: 2, nombre: "Die2", apellido: "Bell2", edad: "x2", genero:"m"},
    {id: 3, nombre: "Die3", apellido: "Bell3", edad: "x3", genero:"m"}
];

app.get('/', (req, res)=>{
    res.send(usuarios);
})

app.get('/:userId', (req, res)=>{
    let{ userId } = req.params;
    console.log (typeof (req.params.userId))

    //hacemos la busqueda
const usuarios = usuarios.find(u => u.id === parseInt(userId));
    if (usuarios){
        res.json({usuario})
    }


    res.send(usuarios);
})








