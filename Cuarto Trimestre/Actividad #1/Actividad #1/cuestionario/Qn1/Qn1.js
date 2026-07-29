let nombre = document.getElementById("nombre");
let resultado = document.getElementById("resultado");
let boton = document.getElementById("btn");

boton.onclick = function MostrarDatos () {
    resultado.textContent = nombre.value 
}