import { Router } from 'express';
import {isValidPassword, generateJWToken, createHash} from '../util.js';
//Service import
import StudentService from '../services/db/students.service.js';


const router = Router();
const studentService = new StudentService();


router.post('/register', async (req, res) =>{
    const {name, lastname, email, age, password} = req.body;
    try {
        const studentFind = await studentService.findOne(email);
        if(!studentFind){
            const hashPassword = createHash(password);
            const student = await studentService.save({name, lastname, email, age, password, hashPassword });
            res.send(student)
        }   
        return res.status(404).send({status:"error", error:"Error, el mail ya existe."}); 
    } catch (error) {
        console.log(error);
        //return res.status(500).send({status:"error", error:"Error interno de la aplicacion."});
    }
})

router.post("/login", async (req, res)=>{
    const {email, password} = req.body;
    try {
        const user = await studentService.findByUsername(email);
        console.log("Usuario encontrado para login:");
        console.log(user);
        if (!user) {
            console.warn("User doesn't exists with username: " + email);
            return res.status(400).send({error: "Not found", message: "Usuario no encontrado con username: " + email});
        }
        if (!isValidPassword(user, password)) {
            console.warn("Invalid credentials for user: " + email);
            return res.status(401).send({status:"error",error:"El usuario y la contraseña no coinciden!"});
        }
        const tokenUser= {
            name : `${user.name} ${user.lastName}`,
            email: user.email,
            age: user.age,
            role: user.role
        };
        const access_token = generateJWToken(tokenUser);
        console.log(access_token);
        //Con Cookie
        res.cookie('jwtCookieToken', access_token, {
            maxAge: 60000,
            httpOnly: true
        });
        res.send({message: "Login successful!"});
        //const access_token = generateJWToken(tokenUser); //-->Con access_token
    } catch (error) {
        console.error(error);
        return res.status(500).send({status:"error",error:"Error interno de la applicacion."});
    }
});

//TODO: agregar metodo de registrar estudiante:

export default router;