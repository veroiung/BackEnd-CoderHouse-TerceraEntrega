import express from 'express';
import __dirname from './util.js';
import mongoose from 'mongoose';
import studentRouter from './routes/students.router.js'
import coursesRouter from './routes/courses.router.js'
import { handlebars } from 'express-handlebars'
//import views from './routes/students.router.js'
// Completar imports que faltan


//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Configuraciones de .hbs

app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'handlebars');




//Declaración de Routers:

app.use("/api/student", studentRouter)
app.use("/api/courses", coursesRouter)
app.use("/", views)

//Conexion a la BD

const SERVER_PORT = 9090;
app.listen(9090, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/colegio?retryWrites=true&w=majority');
        // let nuevoEstudiante = await studentModel.create({
        // name: "Luis",
        // lastName: "Munar",
        // age: "20",
    })
        
        console.log("Conectado con exito a MongoDB usando Moongose.");
    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};

connectMongoDB();