function capturarDatos(event){
    event.preventDefault();

    let correo= document.getElementById("correo").value;
    let mensaje= document.getElementById("mensaje").value;

    if (correo==""|| mensaje ==""){
        alert("debe completar todos los campos");
        return;
    }
document.getElementById("resultado").innerHTML=
"correo: " + correo + "<br> mensaje: " + mensaje;
}