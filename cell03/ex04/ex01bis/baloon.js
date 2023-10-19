var colores = ['green', 'blue', 'red'];
var colores1 = ['red', 'blue', 'green'];
var colorActual = 0;
// function hinchar (){
//     var div = document.querySelector('.baloon');
//     var estilo = getComputedStyle(div);
//     var alturaActual = parseInt(estilo.height);
//     var anchoActual = parseInt(estilo.width);
//     var nuevaAltura = alturaActual + 10;
//     var nuevoAncho = anchoActual + 10;

//     div.style.backgroundColor = colores[colorActual];
//     colorActual = (colorActual + 1) % colores.length; 

//     if (nuevaAltura <= 420){
//         div.style.height = nuevaAltura + 'px';
//         div.style.width = nuevoAncho + 'px';
//     }
//     else {
//         div.style.height = '200px';
//         div.style.width = '200px';
//         div.style.backgroundColor = colores[2]; 
//     }
// }

function hinchar() {
    var $div = $('.baloon');
    var alturaActual = $div.height();
    var anchoActual = $div.width();
    var nuevaAltura = alturaActual + 10;
    var nuevoAncho = anchoActual + 10;

    $div.css('background-color', colores[colorActual]);
    colorActual = (colorActual + 1) % colores.length;

    if (nuevaAltura <= 420) {
        $div.css({ 'height': nuevaAltura + 'px', 'width': nuevoAncho + 'px' });
    } else {
        $div.css({ 'height': '200px', 'width': '200px', 'background-color': colores[2] });
    }
}

// function deshinchar (){
//     var div = document.querySelector('.baloon');
//     var estilo = getComputedStyle(div);
//     var alturaActual = parseInt(estilo.height);
//     var anchoActual = parseInt(estilo.width);
//     var nuevaAltura = alturaActual - 5;
//     var nuevoAncho = anchoActual - 5;

//     if (nuevaAltura >= 200){
//         div.style.height = nuevaAltura + 'px';
//         div.style.width = nuevoAncho + 'px';
//         div.style.backgroundColor = colores1[colorActual];
//         colorActual = (colorActual + 1) % colores1.length;

//     }
// }

function deshinchar() {
    var $div = $('.baloon');
    var alturaActual = $div.height();
    var anchoActual = $div.width();
    var nuevaAltura = alturaActual - 5;
    var nuevoAncho = anchoActual - 5;

    if (nuevaAltura >= 200) {
        $div.css('background-color', colores1[colorActual]);
        colorActual = (colorActual + 1) % colores1.length;
        $div.css({ 'height': nuevaAltura + 'px', 'width': nuevoAncho + 'px' });
    }
}