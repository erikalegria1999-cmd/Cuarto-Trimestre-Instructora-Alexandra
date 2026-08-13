
let guardar = () => {
    let nombre = document.getElementById("nombre").value
    localStorage.setItem("nombre", nombre)
    let apellido = document.getElementById("apellido").value
    localStorage.setItem("apellido", apellido)
    let direccion = document.getElementById("direccion").value
    localStorage.setItem("direccion", direccion)
    let password = document.getElementById("password").value
    localStorage.setItem("password", password)
}

let ver = () => {
    let n = localStorage.getItem("nombre")
    let a = localStorage.getItem("apellido")
    let d = localStorage.getItem("direccion")
    let p = localStorage.getItem("password")

    alert(
    "Nombre: " + n +
    "\nApellido: " + a +
    "\nDirección: " + d +
    "\nContraseña: " + p
)
}
