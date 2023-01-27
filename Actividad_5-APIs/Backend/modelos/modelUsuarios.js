var modelUsuarios = {
}


//CRUD de usuarios
modelUsuarios.Guardar = function(post,callback){
    datos.push(
        {
            nombre: post.name, 
            apellido: post.surname,
            direccion: post.address,
            telefono: post.tel,
            estadocivil: post.civil,
            edad: post.age,
            cedula: post.cedula
        })

        return callback({state: true, mensaje:"Cliente guardado exitosamente"})
}

modelUsuarios.ListarUsuarios = function(post,callback){
    return callback({state: true, datos: datos})
}

modelUsuarios.Actualizar = function(post,callback){
    datos[post.posicion].edad = post.edad
    return callback({state:true, mensaje:"Se actualizó correctamente"})
}

modelUsuarios.Eliminar = function(posicion,callback){
    datos.splice(posicion,1)
    return callback({state:true, mensaje:"Se eliminó correctamente"})
}

module.exports.usuarios = modelUsuarios