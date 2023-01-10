var personas = [];

var limpiar = function(){
    var name = document.getElementById("nombre").value =""
    var age = document.getElementById("edad").value=""
}

var mostrar = function() {
    var mydata = document.getElementById("data")
    mydata.innerHTML = "<br>"
    for (let i = 0; i < personas.length; i++) {
        mydata.innerHTML = mydata.innerHTML + 
        "<div class='item'>"+
        "<div class='name' onclick='cargarNombre('"+personas[i].name+"')'>"+ personas[i].name +"</div>"+
        "<div class='age'>"+ personas[i].age +"</div>"+
        "</div>"
    }
}

var cargarNombre = function(nombre){
    console.log(nombre)

    var posicion = personas.find((item) => item.name == nombre)
}

var guardar = function(){
    var nameValue = document.getElementById("nombre").value 
    var ageValue = document.getElementById("edad").value

    // Guardar registro en array personas
    personas.push({
        name: nameValue,
        age: ageValue
    })

    console.log(personas)
    limpiar()
    mostrar()
}