let boton = document.querySelector("#btn")
let contenedor = document.querySelector("#contenedor")

boton.addEventListener("click",()=>{
    contenedor.classList.toggle("activo")
    if (contenedor.classList.contains("activo")) {
                boton.innerText = "Desactivar";
            } else {
                boton.innerText = "Activar";
            }
})