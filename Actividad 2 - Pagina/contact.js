var registro = {
    nombre: "",
    email:"",
    producto: "",
    descripcion: "",
}


var almacenar = function(){
    registro.nombre = document.getElementById("Form-name3").value;
    registro.email = document.getElementById("Form-mail3").value;
    registro.producto = document.getElementById("Form-prod3").value;
    registro.descripcion = document.getElementById("Form-descri3").value;
    localStorage.setItem("registro",JSON.stringify(registro));
    var confirm = document.getElementById("confirm")
    confirm.innerHTML = "<div class='alert alert-success' role='alert'> ¡Tu aplicación se ha enviado existosamente!</div>"
}