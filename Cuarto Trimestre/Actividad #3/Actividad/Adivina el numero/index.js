// Obtener los elementos del HTML
let numero = document.getElementById("numero");
let resultado = document.getElementById("resultado");

// Función que genera un número aleatorio del 1 al 10
function numeroAleatorio() {
    return Math.floor(Math.random() * 10) + 1;
}

// Función que se ejecuta al hacer clic en el botón
function adivinar() {

    // Número escrito por el usuario
    let intento = Number(numero.value);

    // Número aleatorio
    let aleatorio = numeroAleatorio();

    // Comparar los números
    if (intento === aleatorio) {
        resultado.textContent = " ¡Ganaste! Adivinaste el número " + aleatorio;
    } else {
        resultado.textContent = " Perdiste. Tú escribiste " + intento +
                                " y el número era " + aleatorio;
    }
}