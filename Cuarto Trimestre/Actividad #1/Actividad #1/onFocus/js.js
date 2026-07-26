const nombre = document.getElementById("nombre");

nombre.onfocus = function () {

    const valor = nombre.value;

    document.getElementById("resultado").textContent =
        "Valor actual: " + valor;

};