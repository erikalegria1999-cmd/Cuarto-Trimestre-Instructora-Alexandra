let animales = JSON.parse(localStorage.getItem("animales")) || [];

let guardar = () => {
    let nombre = document.getElementById("nombre").value;
    let especie = document.getElementById("especie").value;
    let edad = document.getElementById("edad").value;
    let habitat = document.getElementById("habitat").value;
    let imagen = document.getElementById("imagen").value;

    let animal = {
        nombre: nombre,
        especie: especie,
        edad: edad,
        habitat: habitat,
        imagen: imagen
    };

    animales.push(animal);
    localStorage.setItem("animales",JSON.stringify(animales)
    );
    document.getElementById("nombre").value = "";
    document.getElementById("especie").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("habitat").value = "";
    document.getElementById("imagen").value = "";
};

let mostrarAnimales = () => {
    let animalesGuardados =
        JSON.parse(localStorage.getItem("animales")) || [];
    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";
    for (let i = 0; i < animalesGuardados.length; i = i + 1) {
        let tarjeta = document.createElement("div");
        let titulo = document.createElement("h2");
        titulo.textContent = animalesGuardados[i].nombre;
        let especie = document.createElement("p");
        especie.textContent ="Especie: " + animalesGuardados[i].especie;
        let edad = document.createElement("p");
        edad.textContent = "Edad: " + animalesGuardados[i].edad;
        let habitat = document.createElement("p");
        habitat.textContent ="Hábitat: " + animalesGuardados[i].habitat;
        let imagen = document.createElement("img");
        imagen.src = animalesGuardados[i].imagen;
        imagen.width = 200;

        tarjeta.appendChild(titulo);
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(especie);
        tarjeta.appendChild(edad);
        tarjeta.appendChild(habitat);
        contenedor.appendChild(tarjeta);
    }
};