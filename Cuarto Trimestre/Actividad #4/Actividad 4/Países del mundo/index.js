let registro = JSON.parse(localStorage.getItem("registro")) || [];
let guardar = () => {
    let nombrePais = document.getElementById("nombrePais").value;
    let capital = document.getElementById("capital").value;
    let continente = document.getElementById("continente").value;
    let idioma = document.getElementById("idioma").value;
    let bandera = document.getElementById("bandera").value;
    let reg = {
        nombrePais: nombrePais,
        capital: capital,
        continente: continente,
        idioma: idioma,
        bandera: bandera
    };
    registro.push(reg);
    localStorage.setItem("registro", JSON.stringify(registro));
    document.getElementById("nombrePais").value = "";
    document.getElementById("capital").value = "";
    document.getElementById("continente").value = "";
    document.getElementById("idioma").value = "";
    document.getElementById("bandera").value = "";
};
let verDatos = () => {
    let paises = JSON.parse(localStorage.getItem("registro")) || [];
    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";
    for (let i = 0; i < paises.length; i = i + 1) {
        let tarjeta = document.createElement("div");
        let titulo = document.createElement("h2");
        titulo.textContent = paises[i].nombrePais;
        let capitalPais = document.createElement("p");
        capitalPais.textContent = "Capital: " + paises[i].capital;
        let continentePais = document.createElement("p");
        continentePais.textContent = "Continente: " + paises[i].continente;
        let idiomaPais = document.createElement("p");
        idiomaPais.textContent = "Idioma: " + paises[i].idioma;
        let imagen = document.createElement("img");
        imagen.src = paises[i].bandera;
        imagen.width = 200;
        tarjeta.appendChild(titulo);
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(capitalPais);
        tarjeta.appendChild(continentePais);
        tarjeta.appendChild(idiomaPais);
        contenedor.appendChild(tarjeta);
    }
};