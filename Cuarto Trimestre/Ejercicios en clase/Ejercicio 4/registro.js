

let guardar =() => {
    let nombre = document.getElementById("nombre")
    let apellido= document.getElementById("apellido")
    let direccion = document.getElementById("direccion")
    let telefono = document.getElementById("telefono")
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let nuevoUsuario = {
        nombre:nombre.value,
        apellido:apellido.value,
        direccion:direccion.value,
        telefono:telefono.value,
        email:email.value,
        password:password.value
    }

    localStorage.setItem("usuario", JSON.stringify( nuevoUsuario))
    alert("Usuario Guardado Correctamente"+ nuevoUsuario.nombre)



}