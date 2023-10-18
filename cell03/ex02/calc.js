function operacion() {
    var numeroiz = document.getElementById("numeroiz").value;
    var numerode = document.getElementById("numerode").value;
    var operacion = document.getElementById("operacion").value;
    var resultado;

    if (numeroiz < 0 || numerode < 0) {
        alert("Error :(");
    } else {
        // Convertir las cadenas a números enteros
        var num1 = parseInt(numeroiz, 10); // 10 indica que se interpreta como base decimal
        var num2 = parseInt(numerode, 10);

        if (operacion == "+") {
            resultado = num1 + num2;
        } else if (operacion == "-") {
            resultado = num1 - num2;
        } else if (operacion == "*") {
            resultado = num1 * num2;
        } else if (operacion == "/") {
            if (num2 === 0) {
                alert("It´s over 9000!");
                return;
            }
            resultado = num1 / num2;
        } else if (operacion == "%") {
            resultado = num1 % num2;
        } else {
            alert("Operación no soportada");
            return;
        }

        alert(resultado);
    }

    console.log("Resultado de la operación = ", resultado);
    console.log("Operación seleccionada:", operacion);
}
document.addEventListener("DOMContentLoaded", function() {
    function mostrarAlerta() {
        alert("PLEASE USE ME");
    }

    setInterval(mostrarAlerta, 30000);
});