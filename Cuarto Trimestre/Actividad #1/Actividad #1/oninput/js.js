const descripcion = document.getElementById("descripcion");

descripcion.oninput = function () {

    const texto = descripcion.value;

    document.getElementById("resultado").textContent =
        "Escribiendo: " + texto;

};