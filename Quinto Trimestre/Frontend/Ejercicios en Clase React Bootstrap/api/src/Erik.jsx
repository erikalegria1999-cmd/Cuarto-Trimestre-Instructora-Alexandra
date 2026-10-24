import { useState } from "react"

export default function Erik (){
    const [mensaje,setMensaje] = useState("")
    async function consumoApi(){
        let respuesta = await fetch("http://127.0.0.1:3000/Santiago")
        let datos = await respuesta.json()
        console.log(datos)
        setMensaje(datos.Mensaje)
        
    }
    return(
        <div>
            <p>{mensaje}</p>
            <button onClick={consumoApi}>Llamar API</button>
        </div>
    )
}