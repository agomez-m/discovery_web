function colorrandom(){
    // Lista de colores disponibles
    var colores = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF", "#FF33FF", "#333333"];
    
    // Genera un índice aleatorio math.floor redondea hacia abajo y math.random*collen coge un numero entre (0,leng)
    var indice = Math.floor(Math.random() * colores.length);
    
    // Obtiene un color aleatorio de la lista
    var colorAleatorio = colores[indice];
    
    // Cambia el color de fondo de la página
    document.body.style.backgroundColor = colorAleatorio;
}