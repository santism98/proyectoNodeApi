const express = require("express");

const router = express.Router();


const { check } = require('express-validator');

const { validarInputs } = require('../middleware/validarInputs');


const { getUsuarios, getUsuario, crearUsuario, actualizarUsuario, eliminarUsuario } = require("../controllers/usuarioApiControllers");



// GET todos los usuarios
router.get('/usuarios', getUsuarios);


// GET un usuario
router.get('/usuario/:id', getUsuario);


// POST crear un usuario
router.post('/usuarios',

    [check('usuario', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'No es un email correcto').isEmail(),
    check('pass', 'Falta la password').not().isEmpty(),
    check('pass', 'La contraseña debe tener al menos 10 caracteres').isLength({ min: 10 }),
        validarInputs],   
    crearUsuario);


// PUT actualizar uno 
router.put('/usuarios/:id',

    [check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('email', 'No es un email correcto').isEmail(),
    check('password', 'Falta la password').not().isEmpty(),
    check('password', 'La contraseña debe tener al menos 10 caracteres').isLength({ min: 10 }),
        validarInputs],  
    actualizarUsuario);


// DELETE elminar un usuario
router.delete('/usuarios/:id', eliminarUsuario);

 
module.exports = router