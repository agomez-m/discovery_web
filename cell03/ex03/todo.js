function newtodo() {
    var textoIngresado = prompt("Introduce un texto:");
    if (textoIngresado !== null) {
        var contenedor = document.getElementById("ft_list");
        var nuevaTarea = document.createElement("li"); // Crear un elemento de lista
        nuevaTarea.textContent = "Tarea: " + textoIngresado;
        
        var confirmar = confirm("¿Seguro que deseas agregar esta tarea?");
        if (confirmar) {
            // Agregar la nueva tarea al principio de la lista
            contenedor.insertBefore(nuevaTarea, contenedor.firstChild);
            
            // Guardar la lista de tareas en una cookie
            setCookie("respuestas", contenedor.innerHTML, 365);
        }
    }
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

document.getElementById("ft_list").addEventListener("click", function (event) {
    var tarea = event.target.closest("li");
    if (tarea) {
        var confirmar = confirm("¿Seguro que deseas eliminar esta tarea?");
        if (confirmar) {
            tarea.remove();

            // Elimina la tarea de la cookie
            var contenedor = document.getElementById("ft_list");
            setCookie("respuestas", contenedor.innerHTML, 365);
        }
    }
});




cargarRespuestasDesdeCookie();