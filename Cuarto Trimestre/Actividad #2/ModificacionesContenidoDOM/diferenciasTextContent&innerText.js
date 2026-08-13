let innerT=()=>{
    let textoV = document.getElementById("textoV")
    let textoO = document.getElementById("textoO")
    let contenedor = document.getElementById("contenedor")
    alert(textoV.innerText)
    console.log(textoO.innerText)
    alert(contenedor.innerText)
    


}

let textC = () => {
    let textoV = document.getElementById("textoV")
    let textoO = document.getElementById("textoO")
    let contenedor = document.getElementById("contenedor")
    alert(textoV.textContent)
    console.log(textoO.textContent)
    alert(contenedor.textContent)

}
