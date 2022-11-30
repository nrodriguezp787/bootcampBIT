// //Estructuras de control - Decisión
//     //IF para 2 opciones o SWITCH para más de 2 opciones
    
//     //IF 
//         //Ejemplo1
//         var lluvia = true
//         if(lluvia == true){
//             console.log("toma el impermeable")
//         }
//         else{
//             console.log("salga")
//         }

//         //Comparadores
//             // == compara contenido de los datos
//                 // 1 == "1" es verdadero
//             // === compara contenido y tipo de datos
//                 // 1 === "1" es falso: número contra string
//                 // "1" === "1" es verdadero: ambos strings
//             // != es el "diferente a"
//                 // 1 != 2 es verdadero
//                 // 1 != "1" es falso
//             // !== es "diferente a" con tipo de datos
//                 // 1 !== "2" es verdadero
//                 // 1 !== "1" es verdadero

//         //Ejemplo2 = Calculadora
//         if(operacion == "suma"){
//             alert(num1 + num2)
//         }

//         if(operacion == "resta"){
//             alert(num1 - num2)  
//         }

//         if(operacion == "multiplicacion"){
//             alert(num1 * num2)
//         }

//         if(operacion == "division"){
//             alert(num1 / num2)
//         }

//         else{
//             alert("No hay operacion seleccionada")
//         }

//     //SWITCH
//         //Ejemplo1 = Calculadora
//         var operacion = "multiplicacion"
//         var num1 = 3;
//         var num2 = 5;

//         switch(operacion){
//             case "suma":
//                 alert(num1 + num2)
//                 break;
//             case "resta":
//                 alert(num1 - num2)
//                 break;
//             case "multiplicacion":
//                 alert(num1 * num2)
//                 break;
//             case "division":
//                 alert(num1 / num2)
//                 break;
//             default:
//                 alert("No hay operación seleccionada")
//                 break;
//         }

// // Estructuras de repetición
//     // Ciclo FOR o FOREACH
//     //Ejemplo 1 - Mostrar la tabla del 7
//     for (let i = 0; i <= 20; i++) {
//         alert("7 x" + i + "=" + 7*i)
//     }
//     else{
//         alert("nada")
//     }

//     // Ciclo WHILE
//     // OJO: Si no se parametriza bien, se queda ejecutando por siempre
//     var a = 1
//     var b = 20
//     while (a <= b) {
//         alert("7 x" + a + "=" + 7*a)
//         a++ //sumarle 1 a a
//         // se puede también hacer algo como a = a+2
//     }

// Funciones
    // Calcular la tabla del número que yo quiera
    var mostrar = function() {
        for (let i = 0; i <= 20; i++){
            // Captura el valor del input del HTML y lo guarda en una var numero
            var numero = document.getElementById("num1").value 
            // parseInt convierte el input de string a numero (si se llegara a necesitar)
            alert(numero + "x " + i + "= " + (i*parseInt(numero)))
        }
    }

    // Hacer que un div se mueva 10 px a la derecha uando hago click en un botón
    var desplazamiento = 0;
    var mover = function () {
        var elemento = document.getElementById("item")
        desplazamiento = desplazamiento + 10
        elemento.style.left = desplazamiento + 'px'
    }





