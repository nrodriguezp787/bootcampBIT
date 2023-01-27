var ModelUsuarios = require(__dirname + '/../modelos/modelUsuarios.js').usuarios

var usuariosController = {}

usuariosController.Guardar = function(request,response){

    var post = {
        codigo:request.body.codigo,
        nombre: request.body.nombre,
        edad: request.body.edad
    }

    if(post.codigo == undefined || post.codigo == null || post.codigo == ""){
        response.json({state:false, mensaje:"el campo codigo es obligatorio"})
        return false
    }
    if(post.nombre == undefined || post.nombre == null || post.nombre == ""){
        response.json({state:false, mensaje:"el campo nombre es obligatorio"})
        return false
    }
    if(post.edad == undefined || post.edad == null || post.edad == ""){
        response.json({state:false, mensaje:"el campo edad es obligatorio"})
        return false
    }

    ModelUsuarios.Guardar(post,function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:"Se guardó correctamente"})
        }
        else{
            response.json({state:false,mensaje:"Se presentó un error al guardar. Por favor inténtalo de nuevo"})
        }
    })

}
usuariosController.CargarTodas = function(request,response){

    ModelUsuarios.CargarTodas(null,function(respuesta){
        console.log(respuesta)
        response.json(respuesta)
    })

}
usuariosController.CargarId = function(request,response){

    var post = {
        id:request.body.id,
    }

    if(post.id == undefined || post.id == null || post.id == ""){
        response.json({state:false, mensaje:"el campo id es obligatorio"})
        return false
    }

    ModelUsuarios.CargarId(post,function(respuesta){
        console.log(respuesta)
        response.json(respuesta)
    })

}
usuariosController.ActualizarId = function(request,response){

    var post = {
        id: request.body.id,
        codigo:request.body.codigo,
        nombre: request.body.nombre,
        edad: request.body.edad
    }

    if(post.id == undefined || post.id == null || post.id == ""){
        response.json({state:false, mensaje:"el campo id es obligatorio"})
        return false
    }
    if(post.codigo == undefined || post.codigo == null || post.codigo == ""){
        response.json({state:false, mensaje:"el campo codigo es obligatorio"})
        return false
    }
    if(post.nombre == undefined || post.nombre == null || post.nombre == ""){
        response.json({state:false, mensaje:"el campo nombre es obligatorio"})
        return false
    }
    if(post.edad == undefined || post.edad == null || post.edad == ""){
        response.json({state:false, mensaje:"el campo edad es obligatorio"})
        return false
    }
    
    ModelUsuarios.ActualizarId(post,function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:"Se actualizó correctamente el elemento"})
        }
        else{
            response.json({state:false,mensaje:"Se presentó un error al actualizar. Por favor inténtalo de nuevo"})
        }
    })

}
usuariosController.Eliminar = function(request,response){

    var post = {
        id:request.body.id,
    }

    if(post.id == undefined || post.id == null || post.id == ""){
        response.json({state:false, mensaje:"el campo id es obligatorio"})
        return false
    }

    ModelUsuarios.Eliminar(post,function(respuesta){
        console.log(respuesta)
        if(respuesta.state == true){
            response.json({state:true,mensaje:"Se eliminó correctamente el elemento"})
        }
        else{
            response.json({state:false,mensaje:"Se presentó un error eliminando el elemento. Por favor inténtalo de nuevo"})
        }
    })



}

module.exports.usuarios = usuariosController