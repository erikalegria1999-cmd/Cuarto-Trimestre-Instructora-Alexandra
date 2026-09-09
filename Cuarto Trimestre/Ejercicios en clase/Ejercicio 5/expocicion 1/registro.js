let usuario = JSON.parse(localStorage.getItem("usuarios")) || []

let guardar=() => {
    let nombre = document.getElementById("nombre").value 
    let apellido = document.getElementById("apellido").value
    let correo = document.getElementById("correo").value
    let documento = document.getElementById("documento").value
    let tipo = document.getElementById("tipo").value
    let password = document.getElementById("password").value
    let nuevoUsuario ={
        nombre:nombre,
        apellido:apellido,
        correo:correo,
        documento:documento,
        tipo:tipo,
        password:password}

    usuario.push(nuevoUsuario)
    localStorage.setItem("usuarios", JSON.stringify(usuario))
    alert("usuario guardado:" + nuevoUsuario.nombre)

    document.getElementById("nombre").value =""
    document.getElementById("apellido").value= ""
    document.getElementById("correo").value=""
    document.getElementById("password").value =""
    document.getElementById("documento").value=""
    document.getElementById("tipo").value=""
}