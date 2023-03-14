const express = require("express");
const cors = require('cors')
const {conexion}=require('./helpers/dbConnect')
require('dotenv').config()
//configurar servidor

//EXPRESS
const app = express()
const port = process.env.PORT ;

//CORS
app.use(cors())

// establece la carpeta static

app.use(express.static(__dirname + "/public"));
console.log(__dirname + "/public")

//restablecer template engine

app.set('view engine', 'ejs')
app.set("views", __dirname + "/views");

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())



//conexion 

conexion()


//rutas
app.use("/", require("./routers/routerFront"))
//app.use("/", require("./routers/routerApi"))
app.use("/api/usuarios", require("./routers/routerUsuarioApi"))





app.use((req,res,next)=>{
  res.status(404).render("404",{
    error: "404",
    msg : "ERROR 404 page not fuound"
  })
});


app.use((req,res,next)=>{
  res.status(404).use("404",{
    error: "404",
    msg : "ERROR 404 page not fuound"
  })
});

//listener
app.listen(port, () => {
  console.log(`servidor a la escucha del puerto ${port}`)
})

