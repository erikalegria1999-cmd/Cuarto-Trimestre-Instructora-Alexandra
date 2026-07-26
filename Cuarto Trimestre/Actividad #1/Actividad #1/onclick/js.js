const boton = document.getElementById("btn");

boton.onclick = function () {

    const nombre = document.getElementById("name").value;
    const apellido = document.getElementById("apellido").value;

    console.log("Nombre:", nombre);
    console.log("Apellido:", apellido);

};