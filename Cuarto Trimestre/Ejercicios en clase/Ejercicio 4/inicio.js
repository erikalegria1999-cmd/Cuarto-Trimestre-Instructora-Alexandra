let inicio = () => {

    // Obtener los elementos del HTML
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    // Obtener los valores escritos
    let vEmail = email.value
    let vPassword = password.value

    // Obtener el usuario registrado desde localStorage
    let usuario = JSON.parse(localStorage.getItem("usuario"))

    console.log(usuario)

    // Verificar que exista un usuario registrado
    if (usuario == null) {
        alert("No hay ningún usuario registrado")
        return
    }

    // Verificar el email
    if (vEmail == usuario.email) {
        alert("Email correcto")
    }
    else {
        alert("Email incorrecto")
    }

    // Verificar la contraseña
    if (vPassword == usuario.password) {
        alert("Contraseña correcta")
        console.log("Logeado correctamente")

        // Crear usuario logeado
        let usuarioL = {
            email: vEmail,
            password: vPassword
        }

        // Guardar usuario logeado
        localStorage.setItem("usuarioLogeado", JSON.stringify(usuarioL))
    }
    else {
        alert("Contraseña incorrecta")
    }
}