var ModelUsuarios = {}
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

var UsuariosSchema = new Schema({
    codigo:String,
    nombre:String,
    edad:Number,
})

const Mymodel = mongoose.model('Usuarios',UsuariosSchema)

ModelUsuarios.Guardar = function(post,callback){

    const instancia = new Mymodel
    instancia.codigo = post.codigo
    instancia.nombre = post.nombre
    instancia.edad = post.edad
    instancia.save((error, Creado) => {
        if(error){
            return callback({state:false, data:error})
        }
        else{
            return callback({state:true})
        }
    })

}
ModelUsuarios.CargarTodas = function(post,callback){
    
    Mymodel.find({},{},(error,documentos) => {
        if(error){
            return callback({state:false, data:error})
        }
        else{
            return callback({state:true, data:documentos})
        }
    })

}
ModelUsuarios.CargarId = function(post,callback){
    
    Mymodel.findById(post.id,{},(error,documentos) => {
        if(error){
            return callback({state:false, data:error})
        }
        else{
            return callback({state:true, data:documentos})
        }
    })

}
ModelUsuarios.ActualizarId = function(post,callback){
    
    Mymodel.findByIdAndUpdate(post.id,{
        codigo:post.codigo,
        nombre:post.nombre,
        edad: post.edad
    },(error,Modificado) => {
        if(error){
            return callback({state:false, data:error})
        }
        else{
            return callback({state:true})
        }
    })

}
ModelUsuarios.Eliminar = function(post,callback){
    
    Mymodel.findByIdAndDelete(post.id,(error,Eliminado) => {
        if(error){
            return callback({state:false, data:error})
        }
        else{
            return callback({state:true})
        }
    })
}

module.exports.usuarios = ModelUsuarios