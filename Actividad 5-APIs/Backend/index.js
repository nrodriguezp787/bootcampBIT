//* FUNCIONES PARA "LEVANTAR" UN SERVIDOR *//

    //* Habilita el paquete que se descargó de express de la carpeta node_modules *//
    var express = require('express')
    global.app = express()
    global.datos = [];
    //Instalar body parser
    var bodyParse = require('body-parser')
    app.use(bodyParse.json())
    app.use(bodyParse.urlencoded({ entended: true }))

    global.config = require(__dirname + '/config.js').config
    global.mongoose = require()

    //Parametrizar headers para que se procesen los requests
    app.all('*',function(request,response,next){
        var whitelist = request.headers.origin;
    
        response.header('Access-Control-Allow-Origin', whitelist)
        response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS,HEAD');
        response.header('Access-Control-Allow-Headers', " authorization, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
        response.header("Access-Control-Allow-Credentials", "true");
    
        next()
    })

    //Parametrizar CORS para que se procesen los requests
    var cors = require('cors') //Instalar paquete cors (npm i cors --save)

    app.use(cors({
        origin:function(origin,callback){
            console.log()
            if(!origin) return callback(null,true)
            
            if(config.listablanca.indexOf(origin) === -1){
                return callback('error CORS', false)
            }


            return callback(null,true)
        }
        
    }))


    // Ejemplos de requests
        // GET (traer info), POST (Escribir info)
        //* Determina la respuesta del servidor a un request, en este caso en la página principal (/) 
            // Los parametros se mandan en la URL
                //app.get('/saluda', function(request,response){
                //  response.json({state:true,edad:30}) //Respuesta en json -- Esto es básicamente un API
                //})
    
    
                // app.get("/operaciones/suma/:num1/:num2",function(request,response){
                //     var total = parseInt(request.params.num1) + parseInt(request.params.num2)
                //     response.json({state:true,total:total})
                // })
           // Antes de usar un POST se debe instalar un paquete que se llama body-parser
            // La info en POST no se manda por URL sino por parametros
            // Los paramentros se meten en BODY-x.www..... en POSTMAN
                //OJO: NO MANDAR COMO PARAMENTRO O EN OTRA OPCIÓN PORQUE NO FUNCIONA

        // app.post("/operaciones/resta",function(request,response){
        //     var num1 = parseInt(request.body.num1) //El nombre del paramentro después de request.body. debe coincidir con el que use en POSTMAN
        //     var num2 = parseInt(request.body.num2)
        //     var total = num1 - num2
        //     response.json({state:true, total:total})
        // })

        require(__dirname + '/routes.js')
        // ^Vincular este archivo al archivo

        //* Parametrizar el puerto  *//
    app.listen(config.puerto,function(){
        console.log('servidor conectado')
    })
