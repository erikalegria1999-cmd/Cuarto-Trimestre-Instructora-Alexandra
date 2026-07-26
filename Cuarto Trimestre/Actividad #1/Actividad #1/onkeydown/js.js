const profesion = document.getElementById("profesion");

profesion.onkeyup = function () {

    const texto = profesion.value;

    document.getElementById("resultado").textContent =
        "Profesión: " + texto;

};