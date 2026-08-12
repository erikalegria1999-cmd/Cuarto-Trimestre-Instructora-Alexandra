let tarea = document.getElementById("tarea");
let agregar = document.getElementById("agregar");
let lista = document.getElementById("lista");

agregar.onclick = function () {

    let li = document.createElement("li");

    li.textContent = tarea.value;

    lista.appendChild(li);

    tarea.value = "";
};