import { useState } from "react"

export default function Nombre() {
    let [nombre, setNombre] = useState("")
    let [mensaje,setMensaje] = useState("")
    function mostrar(e) {
        setNombre(e.target.value)
    }
    function ver (){
        if (nombre !=""){
            alert(nombre)
            setNombre("")            
        }
            else{
                setMensaje("porfavor escriba su nombre")
                
            }
    }      
    return (
        <div>
        <h1>Nombre: {nombre}</h1>
        <input type="text" onChange={mostrar} value={nombre} />
        {/* operador ternario */}
        <p>{mensaje != "" ? mensaje : ""}</p>
        <button onClick={ver}>Aceptar</button>
        </div>
    )
}