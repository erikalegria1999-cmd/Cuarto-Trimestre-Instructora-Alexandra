//leer o modificar texto dentro de un elemento HTML


function cambiarTitulo() {
    let titulo = document.getElementById("titulo");
    titulo.textContent = "Nuevo titulo Text Content"
}
// function tipo flecha

let cambiarTitulo2 = () => {
    let titulo = document.getElementById("titulo")
    titulo.textContent="Nuevo Titulo Text Content"
}