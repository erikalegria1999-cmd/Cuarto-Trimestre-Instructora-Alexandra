// Experimento 1: 
// Seleccionar un elemento específico
let titulo = document.getElementById("titulo-principal");
console.log(titulo);
// Experimento 2:
// Seleccionar varios elementos que compartan una clase. 
let parrafos = document.getElementsByClassName("parrafo");
console.log(parrafos);
// Experimento 3:
// Seleccionar todos los elementos de una determinada etiqueta. 
let parrafos1 = document.getElementsByTagName("p");
console.log(parrafos1);
// Experimento 4:
// Seleccionar elementos utilizando diferentes tipos de selectores.
// Selector por ID
let titulo1 = document.querySelector("#titulo-principal");
console.log("Selector por ID:");
console.log(titulo1);
// Selector por clase
const imagenes = document.querySelectorAll(".imagen");
console.log("Selector por clase:");
console.log(imagenes);
// Selector por etiqueta
let botones = document.querySelectorAll("button");
console.log("Selector por etiqueta:");
console.log(botones);
// Selector por atributo
let campo = document.querySelector("input[type='text']");
console.log("Selector por atributo:");
console.log(campo);
// Selector descendiente
let textos3 = document.querySelectorAll(".contenedor p");
console.log("Selector descendiente:");
console.log(textos3);
// Experimento 5:
// Seleccionar un elemento que cumpla más de una condición.
let elemento = document.querySelector(".parrafo.destacado");
console.log("Experimento 5")
console.log(elemento);

