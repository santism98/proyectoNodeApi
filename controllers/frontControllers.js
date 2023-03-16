const Servicio = require("../models/servicioModels")
const Instalaciones=require("../models/instalacionesModel")



const getIndex = (req, res) => {
    res.render('index', {
        titulo: "Index",
        msg: "este es el mensaje",

    });
}

const getServicios =async (req, res) => {

    try {
        const servicios=await Servicio.find()
        console.log(servicios); 
        res.render('servicios', {
            titulo: "servicio",
            msg: "este es el mensaje",
            servicios:servicios
        })

    } catch (error) {
        console.log("esta mal");
    }
   
        ;
}

const getContacto = (req, res) => {
    res.render('contacto', {
        titulo: "CONTACTO",
        msg: "LLAMANOS 66666666",
        
    });
}

const getQuienes = (req, res) => {
   
    res.render('who', {
        titulo: "QUIENES SOMOS",
        msg: "SOMOS UN PROYECTO",
        
    })
}


const getInstalaciones=async(req,res)=>{
    try {
        const instalaciones=await Instalaciones.find() 
        res.render('instalaciones', {
            titulo: "instalaciones",
            msg: "Estas son nuestras instalaciones",
            instalaciones
        })

    } catch (error) {
        console.log("esta mal");
    }
        ;
}

const getProductos=()=>{
    //ahora es un herlper
}


module.exports = {
    getIndex,
    getServicios,
    getContacto,
    getQuienes,
    getInstalaciones,
    getProductos
   
}






















// const Servicio=require('../models/servicioModels')
// const Instalaciones=require('../models/instalacionesModel')

// const {consultarBBDD}=require('../helpers/adminFetch')


// const getIndex= (req, res) => {
//     res.render("index", {
//         titulo: 'Esta es la pagina de inicio',
//         msg: 'Aquí va la descripción principal'

//     })
// }



// const getServicios= async (req, res) => {

//    res.render('admin/templates/vistaNuevoServicio')
    
// const respuesta = await consultarBBDD('/subir/servicios', 'get', req.body);

// const {data, ok}= await respuesta.json()


// //console.log(data);

// //console.log(servicios)
// res.render("servicios", {
//            titulo: "Servicios",
//             msg: "este es el mensaje de servicios actualizado",

//             servicios:data,
//          })


    
    
// }

// const getProductos= (req, res) => {
//     res.render("productos", {
//         titulo: "Productos",
//         msg: "este es el apartados de productos de nuestra empresa"
//     })
// }

// const getQuienes = (req, res) => {
//     res.render("who", {
//         titulo: "Quienes somos",
//         msg: "HOLA SOMOS UN PROYECTO"
//     })
// }

// const getContacto = (req, res) => {
//     res.render("contacto", {
//         titulo: "Contacto",
//         msg: "Este es el apartado en el que te puedes poner en contacto con nosotros"
//     })
// }


// const getInstalaciones= async (req, res) => {
//     try{

// const instalaciones= await Instalaciones.find()
// //console.log(instalaciones)
// res.render("instalaciones", {
//            titulo: "Instalaciones",
//             msg: "este es el mensaje de instalaciones actualizado",
//             instalaciones,
//          })

//     }
// catch{
//     console.log(error)
// }
    
    
// }



// ///////////////////////////SCRAPPING







// module.exports={
//     getIndex,
//     getServicios,
//     getProductos,
//     getQuienes,
//     getContacto,
//     getInstalaciones,
//    // searchGoogle,
// }
