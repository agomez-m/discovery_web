// function operacion() {
//     var numeroiz = document.getElementById("numeroiz").value;
//     var numerode = document.getElementById("numerode").value;
//     var operacion = document.getElementById("operacion").value;
//     var resultado;

$(document).ready(function() {
    $("#calcular").click(function() {
        var numeroiz = $("#numeroiz").val();
        var numerode = $("#numerode").val();
        var operacion = $("#operacion").val();
        var resultado;

        if (numeroiz < 0 || numerode < 0) {
            alert("Error :(");
        } else {
            var num1 = parseInt(numeroiz, 10);
            var num2 = parseInt(numerode, 10);

            switch (operacion) {
                case "+":
                    resultado = num1 + num2;
                    break;
                case "-":
                    resultado = num1 - num2;
                    break;
                case "*":
                    resultado = num1 * num2;
                    break;
                case "/":
                    if (num2 == 0) {
                        alert("It's over 9000!");
                        return;
                    }
                    resultado = num1 / num2;
                    break;
                case "%":
                    if (num2 == 0) {
                        alert("It's over 9000!");
                        return;
                    }
                    resultado = num1 % num2;
                    break;
                default:
                    alert("Operación no soportada");
                    return;
            }

            alert("Resultado = " + resultado);
        }
        console.log("Resultado de la operación = ", resultado);
        console.log("Operación seleccionada:", operacion);
    });

    // document.addEventListener("DOMContentLoaded", function() { 
        // NO HACE FALTA PONERLO POR QUE LA PRIMERA LINEA YA LO HACE $(document).ready(function() {
    
    function mostrarAlerta() {
        alert("PLEASE USE ME");
    }

    setInterval(mostrarAlerta, 30000);
});
