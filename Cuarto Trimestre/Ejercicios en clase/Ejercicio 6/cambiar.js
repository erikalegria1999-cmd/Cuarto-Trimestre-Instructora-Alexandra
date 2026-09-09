let boton = document.querySelector("#btn")
let contenedor = document.querySelector("#contenedor")

boton.addEventListener("click",()=>{
    
    contenedor.style.background ="green"

    if (contenedor.value=== "activo"){
        contenedor.style.background="green"
        contenedor.value="inactivo"
    }
    else{
        contenedor.style.background ="red"
        contenedor.value = "activo"
    }        
    
})
// toogle
