let agregar = () => {
    let contenedor = document.getElementById("contenedor");

    let tabla = document.createElement("table");
    tabla.style.border = "2px solid red";
    


    let crearCelda = (fila, texto) => {
        let celda = document.createElement("td");
        celda.textContent = texto;
        celda.style.border = "1px solid black";
        fila.appendChild(celda); 
    };

    let fila1 = document.createElement("tr");
    crearCelda(fila1, "Fila 1, Col 1");
    crearCelda(fila1, "Fila 1, Col 2");
    crearCelda(fila1, "Fila 1, Col 3");
    crearCelda(fila1, "Fila 1, Col 4");
    crearCelda(fila1, "Fila 1, Col 5");
    tabla.appendChild(fila1);

    let fila2 = document.createElement("tr");
    crearCelda(fila2, "Fila 2, Col 1");
    crearCelda(fila2, "Fila 2, Col 2");
    crearCelda(fila2, "Fila 2, Col 3");
    crearCelda(fila2, "Fila 2, Col 4");
    crearCelda(fila2, "Fila 2, Col 5");
    tabla.appendChild(fila2);

    
    let fila3 = document.createElement("tr");
    crearCelda(fila3, "Fila 3, Col 1");
    crearCelda(fila3, "Fila 3, Col 2");
    crearCelda(fila3, "Fila 3, Col 3");
    crearCelda(fila3, "Fila 3, Col 4");
    crearCelda(fila3, "Fila 3, Col 5");
    tabla.appendChild(fila3);
    

    let fila4 = document.createElement("tr");
    crearCelda(fila4, "Fila 4, Col 1");
    crearCelda(fila4, "Fila 4, Col 2");
    crearCelda(fila4, "Fila 4, Col 3");
    crearCelda(fila4, "Fila 4, Col 4");
    crearCelda(fila4, "Fila 4, Col 5");
    tabla.appendChild(fila4);

    
    let fila5 = document.createElement("tr");
    crearCelda(fila5, "Fila 5, Col 1");
    crearCelda(fila5, "Fila 5, Col 2");
    crearCelda(fila5, "Fila 5, Col 3");
    crearCelda(fila5, "Fila 5, Col 4");
    crearCelda(fila5, "Fila 5, Col 5");
    tabla.appendChild(fila5);

    
    contenedor.appendChild(tabla);
};