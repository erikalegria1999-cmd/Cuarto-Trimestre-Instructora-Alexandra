let palabra = document.getElementById("palabra");
let entrada = document.getElementById("entrada");
let btn = document.getElementById("btn");
let resultado = document.getElementById("resultado");

function comprobar() {
    let texto = entrada.value;

    if (texto === palabra.textContent) {
        resultado.textContent = "¡Correcto!";
    } else {
        resultado.textContent = "Incorrecto";
    }
}
btn.onclick = comprobar;