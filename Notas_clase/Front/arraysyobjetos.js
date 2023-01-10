// Objetos
    var persona = {
        nombre:"Nicolas",
        apellido:"Rodriguez",
        edad:"30",
        documento:"12345667",
    }
    // Mostrar la edad de la persona
    alert(persona.edad)
    // Agregar nuevo elemento al objeto Persona
    persona.habilidad = "correr"
    // Modificar elemento 
    persona.nombre = "Nico"


// Arrays
    // Llenado manual de un array
    var datos = ["Nicolas", "Juan","Pedro"]
    var edades = [30,45,50]
    var otros = [30,"Nicolas"]

    // Arrays siempre inician desde la posición 0
    // Mostrar el dato guardado en la primera posición del array datos
    alert(datos[0])
    // Mostrar longitud de un array o # de elementos
    datos.length
    // Modificar un elemento
    datos[0] = "NICOLAS"

    // Llenado push
    var dragonball = []
    dragonball.push("Goku")
    dragonball.push("Vegeta")
    dragonball.push("Gohan")

    // Unshift
    // Agrega un elemento pero al principio del array (posición 0)
    dragonball.unshift("Milk")

    // Borrado pop
    // Borra el último elemento creado
    dragonball.pop()

    // Splice
    // Borra elementos del array
    // Depende de dónde empieza y cuántos quiero borrar
    dragonball.splice(0,2) // desde la 1ra posición, y borrar 2 elementos

    // Reverse
    // Invertir el orden de los elementos dentro de un array
    dragonball.reverse()

    // Join
    // Convierte los datos dentro de un array en un string separados por lo que uno le diga
    dragonball.join('|')

    // Includes
    // Busca si mi input existe dentro del array
    dragonball.includes("Goku") // = verdadero

    // IndexOf
    // La posición dentro del array de un elemento
    dragonball.indexOf("Goku")

    // Llenado fill
    // Reemplaza todos los valores del array por un valor específico
    dragonball.fill("Krillin")

    // Filter
    // Filtra el array y devuelve los que cumplan con la condición
    dragonball.filter((item) => item == "Goku")

    // Concat
    // Unir arrays
    var malos = ["Freezer","Cell"]
    dragonball.concat(malos)

// Arrays de Objetos
    // Llenado manual
    var datospersonas = [
        {nombre:"Nico", edad:30},
        {nombre:"Juan", edad:35}
    ]

    // Llenado push
    datospersonas.push({nombre:"Pipe", edad:60})

    // Aplican casi todos los mismos comandos que con un array normal
    datospersonas.filter((item) => item.nombre == "Goku")
    datospersonas.filter((item) => item.edad > 32)

    // FIND
    // Encontrar el elemento completo basado en una caracteristica
    datospersonas.find((item) => item.edad == "Goku")
    // Encontrar la posición de un elemento del array, basado en una caracteristica del elemento
    datospersonas.findIndex((item) => item.edad == "Goku")

