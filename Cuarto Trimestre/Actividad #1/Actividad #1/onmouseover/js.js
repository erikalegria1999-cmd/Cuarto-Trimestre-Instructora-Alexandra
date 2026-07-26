const boton = document.getElementById("btn");

boton.onmouseover = function () {

    const producto = document.getElementById("producto").value;

    document.getElementById("resultado").textContent =
        "Producto: " + producto;

};