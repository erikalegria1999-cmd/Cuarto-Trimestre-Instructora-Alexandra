let departamentos =
    JSON.parse(localStorage.getItem("departamentos")) || [];
let guardar = () => {
    let nombre = document.getElementById("nombre").value;
    let responsable = document.getElementById("responsable").value;
    let empleados = document.getElementById("empleados").value;
    let ubicacion = document.getElementById("ubicacion").value;
    let imagen = document.getElementById("imagen").value;
    let departamento = {
        nombre: nombre,
        responsable: responsable,
        empleados: empleados,
        ubicacion: ubicacion,
        imagen: imagen
        };
    departamentos.push(departamento);
    localStorage.setItem(
        "departamentos",
        JSON.stringify(departamentos)
    );
};
let verDepartamentos = () => {
    let departamentosGuardados =
        JSON.parse(localStorage.getItem("departamentos")) || [];
    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";
    let tabla = document.createElement("table");
    let encabezado = document.createElement("thead");
    let filaEncabezado = document.createElement("tr");
    let thImagen = document.createElement("th");
    thImagen.textContent = "Imagen";
    let thNombre = document.createElement("th");
    thNombre.textContent = "Departamento";
    let thResponsable = document.createElement("th");
    thResponsable.textContent = "Responsable";
    let thEmpleados = document.createElement("th");
    thEmpleados.textContent = "Empleados";
    let thUbicacion = document.createElement("th");
    thUbicacion.textContent = "Ubicación";
    filaEncabezado.appendChild(thImagen);
    filaEncabezado.appendChild(thNombre);
    filaEncabezado.appendChild(thResponsable);
    filaEncabezado.appendChild(thEmpleados);
    filaEncabezado.appendChild(thUbicacion);
    encabezado.appendChild(filaEncabezado);
    tabla.appendChild(encabezado);
    let cuerpo = document.createElement("tbody");
    for (let i = 0;i < departamentosGuardados.length;i = i + 1 ) {
        let fila = document.createElement("tr");
        let celdaImagen = document.createElement("td");
        let imagen = document.createElement("img");
        imagen.src = departamentosGuardados[i].imagen;
        imagen.width = 100;
        celdaImagen.appendChild(imagen);
        let celdaNombre = document.createElement("td");
        celdaNombre.textContent =
            departamentosGuardados[i].nombre;
        let celdaResponsable = document.createElement("td");
        celdaResponsable.textContent = departamentosGuardados[i].responsable;
        let celdaEmpleados = document.createElement("td");
        celdaEmpleados.textContent = departamentosGuardados[i].empleados;
        let celdaUbicacion = document.createElement("td");
        celdaUbicacion.textContent =departamentosGuardados[i].ubicacion;
        fila.appendChild(celdaImagen);
        fila.appendChild(celdaNombre);
        fila.appendChild(celdaResponsable);
        fila.appendChild(celdaEmpleados);
        fila.appendChild(celdaUbicacion);    
        cuerpo.appendChild(fila);
    }
    tabla.appendChild(cuerpo);
    contenedor.appendChild(tabla);
};