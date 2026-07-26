const boton = document.getElementById("btnMostrar");

boton.ondblclick = function () {

    const actividad = document.getElementById("actividad").value;

    document.getElementById("resultado").textContent =
        "La actividad es: " + actividad;

};