/* Inicializar variables */
var nombre = "Nicolas";
var edad = 30;

/* Inicializar objetos */
var persona = {nombre,edad};

/* Inicializar array */
var items = ["Nicolas",30];

/* Inicializar una función */
var suma = function(){
    var n1 = 80
    var n2 = 20
    return n1 + n2
}

/* Inicializar función con parámetros */
var resta = function(n1, n2){
    return n1 - n2
}

/* Ejecutar función sin parámetros*/
suma()

/* Ejecutar función con parámetros */
resta(10,20)

/* Mostrar algo en el log */
console.log(persona)