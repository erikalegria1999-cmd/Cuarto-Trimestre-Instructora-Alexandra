let telefono = document.getElementById("telefono")
let mensaje = document.getElementById("mensaje")

telefono.onblur =  function validarTelefono() {

mensaje.textContent = telefono.value
}