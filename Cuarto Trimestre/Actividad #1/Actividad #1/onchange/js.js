const programa = document.getElementById("programa");

programa.onchange = function () {

    const seleccion = programa.value;

    document.getElementById("resultado").textContent =
        "Programa seleccionado: " + seleccion;

};