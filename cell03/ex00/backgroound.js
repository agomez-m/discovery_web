function colorrandom(){

    // Genera un índice aleatorio math.floor redondea hacia abajo y math.random*collen coge un numero entre (0,leng)
    var indice = "#" + Math.floor(Math.random() * 16777215).toString(16);
    
    // Cambia el color de fondo de la página
    document.body.style.backgroundColor = indice;
}