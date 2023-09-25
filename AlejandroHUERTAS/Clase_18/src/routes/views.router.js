import { Router } from 'express';
import cookieParser from 'cookie-parser';

const router = Router();

//Sin firma
router.use(cookieParser())


//Con firma

outer.use(cookieParser(Coder75975))

router.get('/', (req, res) => {

    res.render('index', {})
});


//SetCookie
router.get("/setCookies", (req, res) => {

//Sin firma    
//res.cookie("CoderCookies",) Esta es una cookie", {maxAge: 10000}).send
//("Cookie asignada con exito")

//Con firma    
res.cookie("CoderCookies",) Esta es una cookie", {maxAge: 10000}).send
("Cookie asignada con exito")
})

//getCookies
router.get("/getCookies", (req, res) => {
    res.send(req.cookies)
})

//deleteCookies
router.get("/deleteCookies", (req, res) => {
    res.clearCookie(CoderCookies).send("cookie borrada")
})

export default router;