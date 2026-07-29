
let nombre = document.getElementById("nombre");
let resultado = document.getElementById("resultado");

nombre.onfocus = function() {
    resultado.textContent = nombre.value
}