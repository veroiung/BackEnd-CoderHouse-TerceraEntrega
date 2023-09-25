import express from "express"
import productsRoutes from './routes/products.routes.js'
import cartsRoutes from './routes/carts.routes.js'
import __dirname from "./utils.js"
import handlebars from "express-handlebars"
import { connectMongoDB } from "./database.js"

const app = express()
const PORT = 8080

app.engine("handlebars", handlebars.engine())
app.set("views", __dirname+"/views")
app.set("view engine", "handlebars")
app.use(express.static(__dirname+"/public"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.render('index')
})

app.use("/api/products", productsRoutes)
app.use("/api/carts", cartsRoutes)



app.listen(PORT, () =>{
    console.log(`server running at port ${PORT}`);
})

connectMongoDB()