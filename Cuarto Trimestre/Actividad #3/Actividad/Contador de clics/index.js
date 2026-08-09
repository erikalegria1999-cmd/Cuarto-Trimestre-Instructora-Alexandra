let contador = document.getElementById("contador");
let boton = document.getElementById("btn");

let numero = 0;

function numeroClick() {
    numero = numero + 1;
    contador.textContent = numero;
}