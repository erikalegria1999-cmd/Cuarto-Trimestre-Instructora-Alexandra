// metodos
// setItem  =   podemos crear, alamacenar (clave, valor)
// getitem =  trae el objeto



let guardar = () => { 
    let name= document.getElementById("nombre").value
    localStorage.setItem("nombre",name)
}

let ver=() => {
let n = localStorage.getItem("nombre")
alert(n)
}


