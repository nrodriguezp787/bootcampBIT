// Vincular este archivo a modelUsuarios.js
var modelUsuarios = require(__dirname + '/../modelos/modelUsuarios.js').usuarios
                    //^ /../ se devuelve una carpeta en la ruta
var usuariosController = {
}

//CRUD de usuarios
usuariosController.Guardar = function(request,response){
     //Guardar datos que se enviaran en el POST en un objeto
     var post = {
        cedula: request.body.cedula,
        name: request.body.name,
        age: request.body.age
    }

    // Validaciones de datos
    //Campo no está vacío
    if(post.cedula == "" || post.cedula == null || post.cedula == undefined){
        response.json({state: false, mensaje: "El campo cedula es obligatorio"})
        return false
    }            
    if(post.name == "" || post.name == null || post.name == undefined){
        response.json({state: false, mensaje: "El campo name es obligatorio"})
        return false
    }
    if(post.age == "" || post.age == null || post.age == undefined){
        response.json({state: false, mensaje: "El campo age es obligatorio"})
        return false
    }
    if(post.surname == "" || post.surname == null || post.surname == undefined){
        response.json({state: false, mensaje: "El campo surname es obligatorio"})
        return false
    }
    if(post.tel == "" || post.tel == null || post.tel == undefined){
        response.json({state: false, mensaje: "El campo tel es obligatorio"})
        return false
    }
    if(post.address == "" || post.address == null || post.address == undefined){
        response.json({state: false, mensaje: "El campo address es obligatorio"})
        return false
    }
    if(post.civil == "" || post.civil == null || post.civil == undefined){
        response.json({state: false, mensaje: "El campo civil es obligatorio"})
        return false
    }
    // Longitud de campo
    if(post.name.length <3){
        response.json({state: false, mensaje: "El campo nombre debe tener al menos 3 caracteres"})
        return false
    }

    modelUsuarios.Guardar(post,function(respuesta){
        response.json(respuesta)
    })

    
}

usuariosController.ListarUsuarios = function(request,response){
    modelUsuarios.ListarUsuarios(null,function(respuesta){
        response.json(respuesta)
    })
    
}

usuariosController.Actualizar = function(request,response){
    var post = {
        cedula: request.body.cedula,
        age: request.body.age
    }

    if(post.cedula == "" || post.cedula == null || post.cedula == undefined){
        response.json({state: false, mensaje: "El campo cedula es obligatorio"})
        return false
    } 
    if(post.age == "" || post.age == null || post.age == undefined){
        response.json({state: false, mensaje: "El campo edad es obligatorio"})
        return false
    } 

    var posicion = datos.findIndex((item) => item.cedula == post.cedula )
    if(posicion == -1){
        response.json({state:false, mensaje:"Esta cédula no existe"})
        return false
    }
    
    post.posicion = posicion 
    modelUsuarios.Actualizar(post,function(respuesta){
        response.json(respuesta)
    })
}

usuariosController.Eliminar = function(request,response){
    var post = {
        cedula: request.body.cedula,
    }

    if(post.cedula == "" || post.cedula == null || post.cedula == undefined){
        response.json({state: false, mensaje: "El campo cedula es obligatorio"})
        return false
    } 

    var posicion = datos.findIndex((item) => item.cedula == post.cedula )
    if(posicion == -1){
        response.json({state:false, mensaje:"Esta cédula no existe"})
        return false
    }
    
    modelUsuarios.Eliminar(posicion,function(respuesta){
            response.json(respuesta)
        })
}

//Permitir que este archivo se vincule a Routes.js
module.exports.usuario = usuariosController