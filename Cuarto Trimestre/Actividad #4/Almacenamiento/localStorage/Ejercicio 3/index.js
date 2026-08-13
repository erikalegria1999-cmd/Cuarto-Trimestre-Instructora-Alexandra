
let producto =[];
let guardar = () => {
    let name = document.getElementById("name").value    
    let price =document.getElementById("price").value    
    let type = document.getElementById("type").value
    let prod ={
        name:name,
        type:type,
        price:price 
    }    
    producto.push(prod)
    console.log(producto)
    localStorage.setItem("producto",JSON.stringify (producto))
    
}
let ver =() => {
    let datos = JSON.parse( localStorage.getItem("producto"))
    // alert(datos) 
    tabla.textContent= ""   
    let tabla = document.createElement("table")
    let fila = document.createElement("tr")
    for(let i = 0 ; i < datos.length; i=i+1 ){
    let celdaNombre = document.createElement("td")
    celdaNombre.textContent = datos[i].name
    fila.appendChild(celdaNombre)
    let celdaType = document.createElement("td")
    celdaType.textContent = datos[i].type
    fila.appendChild(celdaType)
    let celdaPrice = document.createElement("td")
    celdaPrice.textContent = datos[i].price
    fila.appendChild(celdaPrice) 
    tabla.appendChild(fila) 
}   
    
    let div = document.getElementById("tabla")
    div.appendChild(tabla)

}



