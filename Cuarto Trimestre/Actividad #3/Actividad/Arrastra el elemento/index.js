let cuadro = document.getElementById("cuadro");
let moviendo = false;
cuadro.addEventListener("mousedown", function() {
    moviendo = true;
});
document.addEventListener("mouseup", function() {
    moviendo = false;
});
document.addEventListener("mousemove", function(evento) {
    if (moviendo) {

        cuadro.style.left = evento.clientX + "px";
        cuadro.style.top = evento.clientY + "px";
    }
});