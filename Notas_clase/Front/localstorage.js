var miemail = "n.rodriguezp787@gmail.com"

var almacenar = function(){
    localStorage.setItem("email",miemail)
}

var modificar = function(){
    localStorage.setItem("email","nuevo valor")
}

var leerLocalStorage = function(){
    var dato = document.getElementById("datos")
    dato.innerHTML = localStorage.getItem("email")
}

var leerAlEntrar = function(){
    document.getElementById("elemail").value = localStorage.getItem("email")
}

var eliminar = function(){
    
}

leerAlEntrar()