// el innerHTML permite leer o modificar texto 
// de un elemento sin embargo el contenido
// debe estar visible


function leerTexto () {
    let parrafo = document.getElementById("parrafo")
    let text = parrafo.innerHTML
    console.log("el texto es:" + text )
}


let cambiarTitulo =() => {
    let titulo = document.getElementById("titulo");
    titulo.innerHTML = "titulo innerHTML"
}

function  cambiarParrafo(){
    let parrafo = document.getElementById("parrafo")
    StylePropertyMapReadOnly.innerHTML = "parrafo InnerHTML"
}

function mostrarHtml() {
    let contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "<h3> esto es una prieba de codigo HTML</h3>" 
}