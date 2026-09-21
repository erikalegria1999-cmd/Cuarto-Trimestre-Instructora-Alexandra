let boton = document.querySelector("#boton")

boton.addEventListener("click",()=>{
    Swal.fire({
        title: "Bienvenido a mi alerta",
        text: "Esta es la alerta de Bienvenido",
        icon: "success",
        confirmButtonText:"Aceptar"
    })
})
let boton2 = document.querySelector("#boton2");
boton2.addEventListener("click", async() => {
    let resultado = await Swal.fire({
        title: "¿Desea eliminar?",
        text: "¿Está seguro de que desea eliminar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        cancelButtonText: "Cancelar"
    });
    console.log(resultado.isConfirmed)
    if (resultado.isConfirmed ==true){
        alert("registro eliminado")
    }
    else{
        alert("registro no eliminado")
    }
// funciones syncronas y sincronicas
// documento en word tabla comparativa
// cuando se usan
});