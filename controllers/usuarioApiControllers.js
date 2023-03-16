const Usuario = require('../models/usuarioModel');

const bcrypt = require('bcryptjs');

const {generarJWT} = require('../helpers/jwt');


const getUsuarios = async (req, res) => {

    try {

        const usuarios = await Usuario.find();

        return res.status(200).json({
            ok: true,
            msg: 'Obtengo todos los usuarios.',
            data: usuarios
        });
        
    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no se están obteniendo todos los usuarios.'
        });
        
    };

}; 


const getUsuario = async (req, res) => {


};  


const loginUsuario = async (req, res) => {

    const {email, password} = req.body;

    try {

        const user = await Usuario.findOne({email});

        const passwordOK = bcrypt.compareSync(password, user.password); 

        if(!user || passwordOK == false){
            return res.status(400).json({
                ok: false,
                msg: 'ERROR: contraseña o email incorrecto.'
            });
        } else {

            const token = await generarJWT(user._id, user.usuario);

            return res.status(200).json({
                ok: true,
                msg: `LOGIN COMPLETADO`,
                name: user.usuario,
                email,
                uid: user._id,
                token
            });
        };
        
    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: contacta con el administrador.'
        });

    }

}; //!FUNC-LOGINUSUARIO


const crearUsuario = async (req, res) => {

    const {usuario, email, password} = req.body;

    const newUsuario = new Usuario(req.body);

    try {

        const user = await Usuario.findOne({email});

        if(user){

            return res.status(400).json({
                ok: false,
                msg: 'ERROR: el e-mail ya existe.'
            });

        }else{

            // encriptar password
            let salt = bcrypt.genSaltSync(10);
            newUsuario.password = bcrypt.hashSync(password, salt);

            const newData = await newUsuario.save();

            // generar token
            const token = await generarJWT(newData.id, usuario);

            return res.status(201).json({
                ok: true,
                uid: newData.id,
                name: newData.usuario,
                email: newData.email,
                token
            });

        };

    } catch (error) {

        return res.status(500).json({
            ok: false,
            msg: 'ERROR: contacta con el administrador.'
        });
        
    };

}; 


const renew = async (req, res) => {

    const {uid, usuario} = req;

    const token = await generarJWT(uid, usuario);

    return res.status(200).json({
        ok: true,
        msg: 'Renew JWT',
        user:{
            uid,
            usuario
        },
        token
    });

}; 


const actualizarUsuario = async (req, res) => {

    const uid = req.params.id;

    try {
        const usuario = await Usuario.findById(uid);

        if (!usuario) {
            return res.status(404).json({
                ok: false,
                msg: 'Usuario no encontrado'
            });
        }

        const { usuario: nombreUsuario, email, password } = req.body;

        usuario.usuario = nombreUsuario || usuario.usuario;
        usuario.email = email || usuario.email;

        if (password) {
            let salt = bcrypt.genSaltSync(10);
            usuario.password = bcrypt.hashSync(password, salt);
        }

        const usuarioActualizado = await usuario.save();

        return res.status(200).json({
            ok: true,
            msg: 'Usuario actualizado correctamente',
            usuario: usuarioActualizado
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Error al actualizar usuario'
        });
    }

};



const eliminarUsuario = async (req, res) => {

    try {

        const id = req.params.id;

        await Usuario.findByIdAndDelete(id);

        return res.status(200).json({
            ok: true,
            msg: 'Usuario eliminado  correctamente.',
        });
        
    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: el usuario no existe en la base de datos.'
        });

    };

}; 


module.exports = {getUsuarios, getUsuario, loginUsuario, crearUsuario, renew, actualizarUsuario, eliminarUsuario};