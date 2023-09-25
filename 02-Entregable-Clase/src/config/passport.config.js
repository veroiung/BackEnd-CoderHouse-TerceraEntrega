import passport from "passport";
//Para usar JWT como estrategia.
import jwtStrategy from 'passport-jwt'
import studentsModel from "../services/db/models/students"


const JwtStrategy = jwtStrategy.Strategy;
const extractJWT = jwtStrategy.ExtractJwt;

const initializePassport = () => {
    //TODO generar las reglas para extraer el token y las autorizaciones necesarias.
    passport.use('jwt', new JwtStrategy(

    {
        jwtFromRequest: extractJWT.fromExtractors([cookieExtractor]), 
        secretOrKey: PRIVATE_KEY
    },
    async (jwt_payload, done) => {
            
        try {
            c
            return done(null, jwt_payload.user)
        } catch (error) {
            console.error(error);
            return done(error);
        }
    }
    ))

    //Funciones de Serializacion y Desserializacion
    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            let user = await userModel.findById(id);
            done(null, user);
        } catch (error) {
            console.error("Error deserializando el usuario: " + error);
        }
    });
};

/**
 * Metodo utilitario en caso de necesitar extraer cookies con Passport
 * @param {*} req el request object de algun router.
 * @returns El token extraido de una Cookie
 */
const cookieExtractor = req => {
    let token = null;
    console.log("Entrando a Cookie Extractor");
    if (req && req.cookies) { //Validamos que exista el request y las cookies.
        console.log("Cookies presentes: ");
        console.log(req.cookies);
        token = req.cookies['jwtCookieToken']; //-> Tener presente este nombre es el de la Cookie.
        console.log("Token obtenido desde Cookie:");
        console.log(token);
    }
    return token;
};

export default initializePassport;