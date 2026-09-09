// funcion callback
// element.addevenLister("evento",funtion)
// funcion tipo flecha =>element.addevenLister("evento0",()=>{})
// event.preventdefault() manejo de recargas HTML
// 

let boton = document.querySelector("#btn")
let titulo = document.querySelector(".titulo")
boton.addEventListener("click",()=>{
titulo.textContent = "titulo"
})