const {Schema, model}=require('mongoose');

const InstalacionesSchema=new Schema({
    nombre: String,

    capacidad: Number,

    rating: Number,

    interior: Boolean,

    descripcion: String

})

module.exports=model('Instalaciones', InstalacionesSchema) //en mayuscula por convencionalismo