      function Feliz(){
            document.getElementById("japi").src="../img/japiface.jpg";
        }
       
         function Triste(){
            document.getElementById("japi").src="../img/sadface.jpg";
         }
        

function sumar(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultado = num1 + num2;
    document.getElementById("resultado").innerHTML = "El resultado de la suma es: " + resultado;
}

function restar(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultado = num1 - num2;
    document.getElementById("resultado").innerHTML = "El resultado de la resta es: " + resultado;
}

function multiplicar(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultado = num1 * num2;
    document.getElementById("resultado").innerHTML = "El resultado de la multiplicación es: " + resultado;
}

function dividir(){
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    let resultado = num1 / num2;
    document.getElementById("resultado").innerHTML = "El resultado de la división es: " + resultado;
}