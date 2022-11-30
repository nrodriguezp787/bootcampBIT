var suma = function (){
    num1 = parseFloat(document.getElementById("input1").value);
    num2 = parseFloat(document.getElementById("input2").value)
    result= document.getElementById("result")
    result.innerHTML = "<label>Resultado</label>" +
        "<input type='number' class='form-control' readonly='readonly' value='"+(num1+num2)+"'>"
}

var resta = function (){
    num1 = parseFloat(document.getElementById("input1").value);
    num2 = parseFloat(document.getElementById("input2").value)
    result= document.getElementById("result")
    result.innerHTML = "<label>Resultado</label>" +
        "<input type='number' class='form-control' readonly='readonly' value='"+(num1-num2)+"'>"
}

var multiplicacion = function (){
    num1 = parseFloat(document.getElementById("input1").value);
    num2 = parseFloat(document.getElementById("input2").value)
    result= document.getElementById("result")
    result.innerHTML = "<label>Resultado</label>" +
        "<input type='number' class='form-control' readonly='readonly' value='"+(num1*num2)+"'>"
}
var division = function (){
    num1 = parseFloat(document.getElementById("input1").value);
    num2 = parseFloat(document.getElementById("input2").value);
    result= document.getElementById("result")
    result.innerHTML = "<label>Resultado</label>" +
        "<input type='number' class='form-control' readonly='readonly' value='"+(num1/num2)+"'>"
}

var borrar = function (){
    num1 = document.getElementById("num1")
    num1.innerHTML = "<label>Primer número</label>" +
        "<input type='number' class='form-control' value=''>"
    num2 = document.getElementById("num2")
    num2.innerHTML = "<label>Segundo número</label>" +
        "<input type='number' class='form-control' value=''>"
    result= document.getElementById("result")
    result.innerHTML = "<label>Resultado</label>" +
        "<input type='number' class='form-control' readonly='readonly' value=''>"
}

/* var calcular = function (){
    switch(operacion){
            case "suma":
                console.log(num1 + num2)
                result.innerHTML = "<label>Resultado</label>" +
                "<input type='number' class='form-control' value='"+(num1+num2)+"'>"
                break;
            case "resta":
                result.innerHTML = "<input type='number' class='form-control' id='result' value='"+(num1 - num2)+"'>"
                break;
            case "multiplicacion":
                result.innerHTML = "<input type='number' class='form-control' id='result' value='"+(num1 * num2)+"'>"
                break;
            case "division":
                result.innerHTML = "<input type='number' class='form-control' id='result' value='"+(num1 / num2)+"'>"
                break;
            default:
                result.innerHTML = "<input type='number' class='form-control' id='result' value=''>"
                break;
    }
} */