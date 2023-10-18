/* rojo verde azul, 420 explota y vuelve a 200, cuando sale del globo se reduce el tamaño y cambia el coor en orden inverso  */
var colores = ['green', 'blue', 'red']; 
var colores1 = ['red', 'blue', 'green']; 
var colorActual = 0;

function hinchar (){
    var div = document.querySelector('.baloon');
    var estilo = getComputedStyle(div);
    var alturaActual = parseInt(estilo.height);
    var anchoActual = parseInt(estilo.width);
    var nuevaAltura = alturaActual + 10;
    var nuevoAncho = anchoActual + 10;
    
    

    div.style.backgroundColor = colores[colorActual];
    colorActual = (colorActual + 1) % colores.length; // Ciclo entre los colores

    if (nuevaAltura <= 420){
        div.style.height = nuevaAltura + 'px';
        div.style.width = nuevoAncho + 'px';
    }
    else {
        div.style.height = '200px';
        div.style.width = '200px';
        div.style.backgroundColor = colores[2]; 
    }
}

function deshinchar (){
    var div = document.querySelector('.baloon');
    var estilo = getComputedStyle(div);
    var alturaActual = parseInt(estilo.height);
    var anchoActual = parseInt(estilo.width);
    var nuevaAltura = alturaActual - 5;
    var nuevoAncho = anchoActual - 5;

    if (nuevaAltura >= 200){
        div.style.height = nuevaAltura + 'px';
        div.style.width = nuevoAncho + 'px';
        div.style.backgroundColor = colores1[colorActual];
        colorActual = (colorActual + 1) % colores1.length;

    }
}