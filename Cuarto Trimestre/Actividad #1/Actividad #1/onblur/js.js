const telefono = document.getElementById("telefono");

telefono.onblur = function () {

    const numero = telefono.value;

    document.getElementById("resultado").textContent =
        "Número ingresado: " + numero;

};