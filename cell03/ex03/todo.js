function newtodo() {
    var textoIngresado = prompt("Introduce un texto:");
        if (textoIngresado !== null) {
            alert("Tarea creada: " + textoIngresado);
        }
    var contenedor = document.getElementById("ft_list");
    contenedor.innerHTML += "Tarea: " + textoIngresado + "<br>";
    
    setCookie("respuestas", contenedor.innerHTML, 365);
}

function cargarRespuestasDesdeCookie() {
    var contenedor = document.getElementById("ft_list");
    var respuestas = getCookie("respuestas");
    if (respuestas) {
        contenedor.innerHTML = respuestas;
    }
    console.log("Respuestas cargadas: " + contenedor.innerHTML);
}

function setCookie(nombre, valor, dias) {
    var fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    var expira = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + "; " + expira;
}

function getCookie(nombre) {
    var nombreC = nombre + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nombreC) == 0) {
            return cookie.substring(nombreC.length, cookie.length);
        }
    }
    return "";
}

cargarRespuestasDesdeCookie();