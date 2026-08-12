let boton = document.getElementById("boton");
let contador = document.getElementById("contador");
let juego = document.getElementById("juego");

let aciertos = 0;

boton.addEventListener("click", function () {

    aciertos++;

    contador.textContent = aciertos;

    let posicionX = Math.random() * (juego.clientWidth - boton.offsetWidth);
    let posicionY = Math.random() * (juego.clientHeight - boton.offsetHeight);

    boton.style.left = posicionX + "px";
    boton.style.top = posicionY + "px";

});