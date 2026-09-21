function consultarUsuario() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Usuario encontrado");
        }, 3000);
    });
}
async function mostrarUsuario() {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "Consultando usuario...";
    const inicio = Date.now();
    const resultado = await consultarUsuario();
    const tiempo = (Date.now() - inicio) / 1000;
    mensaje.textContent = resultado;
    Swal.fire({
        title: "Usuario encontrado",
        text: "La consulta tardó " + tiempo + " segundos.",
        icon: "success"
    });
    console.log("Proceso terminado");
}
document.getElementById("btnConsultar").onclick = mostrarUsuario;