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

// parse app
app.use(express.urlencoded({ extended: false }))

// parse json
app.use(express.json())



//conexion 

conexion()


//rutas

app.use('/', require('./routers/routerFront'));

app.use('/api/v1/servicios', require('./routers/routerApi')); 

app.use('/api/v1/usuarios', require('./routers/routerUsuarioApi')); 

app.use('/admin', require('./routers/routerAdmin'));


app.use((req, res, next) => {
  res.status(404).render("404", {
    titulo: "404",
    texto: "La pagina no se encuentra",
  });
});
//listener
app.listen(port, () => {
  console.log(`servidor a la escucha del puerto ${port}`)
})

