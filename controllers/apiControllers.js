const Servicio = require('../models/servicioModels');

// función que obtenga todos los servicios
const getServicios = async (req, res) => {

    try {

        const servicios = await Servicio.find();

        return res.status(200).json({
            ok: true,
            msg: 'Obteniendo todos los servicios.',
            data: servicios
        });

    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: contacta con el administrador.'
        });

    };

}; 

// función que obtenga un servicio
const getServicio = async (req, res) => {

    try {

        const id = req.params.id; 
        
        const servicio = await Servicio.findById(id);

        if(!servicio){ 

            return res.status(404).json({
                ok: false,
                msg: 'ERROR: No hay ningún servicio con el ID indicado'
            });

        }else{

        return res.status(200).json({

            ok: true,
            msg: 'Obteniendo un servicio.',
            data: servicio
            });

        };
            
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: el servicio no existe.'
        });
    };

}; 


// función que cree un servicio
const crearServicio = async (req, res) => {

    const newServicio = new Servicio(req.body);

    try {

        const newData = await newServicio.save();
        
        return res.status(201).json({
            ok: true,
            msg: 'Servicio creado correctamente.',
            data: newData
        });

    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no se ha podido crear el servicio.'
        });

    };

}; 


// función que actualice un servicio
const actualizarServicio = async (req, res) => {

    try {

        const id = req.params.id;
        //const body = req.body;
        const servicio = req.body.servicio;
        const descripcion = req.body.descripcion;

        const servicioAct = await Servicio.findOneAndUpdate({_id:id},{$set:{servicio,descripcion}},{new:true}); 
       
        
        return res.status(200).json({
                ok: true,
                msg: 'Servicio actualizado correctamente.',
                data: servicioAct
            });        
        
    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: no se ha encontrado el servicio que quiere actualizar.'
        });

    };

}; 


// función que elimine un servicio
const eliminarServicio = async (req, res) => {

    try {

        const id = req.params.id;

        

        await Servicio.findOneAndDelete({_id:id});
        

        return res.status(200).json({
            ok: true,
            msg: 'Servicio eliminado correctamente.'
        });
        
    } catch (error) {
        
        return res.status(500).json({
            ok: false,
            msg: 'ERROR: el servicio que quiere eliminar no existe.'
        });

    };

}; 


module.exports = {
    getServicio, 
    getServicios, 
    crearServicio, 
    actualizarServicio, 
    eliminarServicio
};