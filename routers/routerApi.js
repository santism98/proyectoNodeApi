const express = require('express');

const router = express.Router();

//* importar el método check() del componente express-validator
const {check} = require('express-validator');

//* importar la func de la carpeta middleware
const {validarInputs} = require('../middleware/validarInputs');

const {getServicios, getServicio, crearServicio, actualizarServicio, eliminarServicio} = require('../controllers/apiControllers');

//* obtener todos los servicios
router.get('/', getServicios);

//* obtener un servicio
router.get('/:id', getServicio);

//* crear un servicio
router.post('/',[
    check('servicio', 'El servicio es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validarInputs
], crearServicio);

//* actualizar un servicio
router.put('/:id',[
    check('servicio', 'El servicio es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty(),
    validarInputs
], actualizarServicio);

//* eliminar un servicio
router.delete('/:id', eliminarServicio);


module.exports = router;