var usuariosController = require(__dirname + '/api/controladores/usuariosController.js').usuarios

app.post("/Usuarios/Guardar",function(request,response){
    usuariosController.Guardar(request,response)
})
app.post("/Usuarios/CargarTodas",function(request,response){
    usuariosController.CargarTodas(request,response)
})
app.post("/Usuarios/CargarId",function(request,response){
    usuariosController.CargarId(request,response)
})
app.post("/Usuarios/ActualizarId",function(request,response){
    usuariosController.ActualizarId(request,response)
})
app.post("/Usuarios/Eliminar",function(request,response){
    usuariosController.Eliminar(request,response)
})