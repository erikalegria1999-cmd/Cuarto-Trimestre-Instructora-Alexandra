import { useState } from "react"

export default function Registro(){
    const [nombre,setNombre]= useState("")
    const [apellido, setApellido] = useState("")
    const [mensaje,setMensaje] = useState ("")
        async function registroApi() {
            let resultado = await fetch ("http://127.0.0.1:5000/registro", {
                method : "POST",
                body: JSON.stringify({
                    nombre: nombre,
                    apellido: apellido 
                }),
                headers: {"content-type":"application/json"}
            })
            let datos = await resultado.text()
            console.log("resultado del servidor:", datos)
            setMensaje(datos)
        }
    return(
        <div>
            <input type="text"
            placeholder="nombre"
            value={nombre}
            onChange={(e)=> setNombre(e.target.value)} />
            <input type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e)=> setApellido(e.target.value)} />
            <button onClick={registroApi}>Registro</button>
            <p>{mensaje}</p>
        </div>
    )
}