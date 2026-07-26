const boton = document.getElementById("btn");

boton.onmouseout = function () {

    const asignatura = document.getElementById("asignatura").value;

    document.getElementById("resultado").textContent =
        "Asignatura: " + asignatura;

};