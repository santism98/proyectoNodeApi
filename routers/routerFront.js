const express = require("express");
const router = express.Router();

const {getIndex,getServicios,getQuienes,getContacto, getProductos, getInstalaciones}=require("../controllers/frontControllers")



router.get('/',getIndex)

router.get("/servicios",getServicios)

router.get("/productos",getProductos)

router.get("/who",getQuienes)

router.get("/contacto",getContacto)

router.get("/instalaciones", getInstalaciones)

//router.get("/scrapped", searchGoogle)

module.exports = router