// function colorrandom(){
//     var indice = "#" + Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = indice;
// }

window.colorrandom = function() {
    var indice = "#" + Math.floor(Math.random() * 16777215).toString(16);
    $("body").css("background-color", indice);
}

