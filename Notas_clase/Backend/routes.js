//Vincular este archivo al archivo de controladores
var usuariosController = require(__dirname + '/controladores/usuariosController.js').usuario

//CRUD de usuarios
//Create
app.post("/cliente/Guardar", function(request,response){
    usuariosController.Guardar(request,response)
})
//Read
app.post("/cliente/ListarClientes", function(request,response){
    usuariosController.ListarUsuarios(request,response)
})
//Update
app.post("/cliente/Actualizar",function(request,response){
    usuariosController.Actualizar(request,response)
})
//Delete
app.post("/cliente/Eliminar",function(request,response){
    usuariosController.Eliminar(request,response)
})