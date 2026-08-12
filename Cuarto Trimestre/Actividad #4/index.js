let mostrar =() => {
    let nombre = document.getElementById("nombre")
    localStorage.setItem("nombre",nombre)
    let apellido = document.getElementById("apellido")
    localStorage.setItem("apellido",apellido)
    let direccion = document.getElementById("direccion")
    localStorage.setItem("direccion",direccion)
    let telefono = document.getElementById("telefono")
    localStorage.setItem("telefono",telefono)
    let contrasena = document.getElementById("contrasena")
    localStorage.setItem("contraseña",contraseña)

}

let ver=() => {
let n = localStorage.getItem("nombre")
let a = localStorage.getItem("apellido")
let d = localStorage.getItem("direccion")
let t = localStorage.getItem("telefono")
let c = localStorage.getItem("contraseña")
alert(n ,a,d,t,c)
}
