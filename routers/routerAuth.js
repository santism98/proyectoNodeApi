const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { validarInputs } = require('../middleware/validarInputs');
const { register, login, renew } = require("../controllers/authController");
const { validarJWT } = require("../middleware/validarJwt");

// Ruta de registro de usuario
router.post('/register',
  [
    check('usuario', 'Por favor, introduce un nombre de usuario').not().isEmpty(),
    check('email', 'Por favor, introduce una dirección de correo electrónico válida').isEmail().normalizeEmail(),
    check('pass', 'Por favor, introduce una contraseña que tenga al menos 6 caracteres').isLength({ min: 10 }),
    validarInputs
  ],
  register
);

// Ruta de inicio de sesión
router.post('/login',
  [
    check('email', 'Por favor, introduce una dirección de correo electrónico válida').isEmail().normalizeEmail(),
    check('pass', 'Por favor, introduce una contraseña').exists(),
    validarInputs
  ],
  login
);

// Ruta de renovación de token
router.get('/renew',
  validarJWT,
  renew
);

module.exports = router;


