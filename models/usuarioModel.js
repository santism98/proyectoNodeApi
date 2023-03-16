const {Schema,model}=require('mongoose')

const UsuarioSchema=new Schema({

    usuario:{
        type:String,
     required:true
    },
    email:{
        type:String,
       required:true,
        unique: true
    },
    pass:{
        type:String,
        required:true
    }
})


module.exports=model('Usuario',UsuarioSchema)