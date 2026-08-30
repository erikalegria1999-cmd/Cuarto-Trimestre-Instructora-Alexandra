// Encontrar un elemento específico
let titulo = document.getElementById("titulo-tienda")
console.log(titulo)
//Encontrar varios elementos
let productos = document.getElementsByClassName("producto")
console.log(productos)
// Encontrar elementos por clase
let precios = document.querySelectorAll(".precio")
console.log(precios)
// Encontrar elementos por etiqueta
let botones = document.getElementsByTagName("button")
console.log(botones);
// Selección más específica utilizando selectores
let productosDestacados =document.querySelectorAll(".producto.destacado")
console.log(productosDestacados)