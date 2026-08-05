
function mostrarInput() {
    let contenedor = document.getElementById("resultado");
    let cuadroTexto = document.createElement("input");
    cuadroTexto.style.color = "blue"
    cuadroTexto.style.margin = "8px"
    cuadroTexto.style.border = "3px solid yellow"
    cuadroTexto.style.background = "grey"
    contenedor.appendChild(cuadroTexto);
}