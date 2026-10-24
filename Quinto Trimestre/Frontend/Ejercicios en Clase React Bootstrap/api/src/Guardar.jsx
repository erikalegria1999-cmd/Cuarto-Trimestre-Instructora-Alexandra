import { useState } from "react"

export default function Guardar() {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")

    async function guardarApi() {
        
            let resultado = await fetch("http://127.0.0.1:3000/guardar", {
                method: "POST",
                body: JSON.stringify({
                    nombre: nombre,
                    apellido: apellido
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            let datos = await resultado.json()
            console.log("Respuesta del servidor:", datos)
        } 
    

    return (
        <div>
            <input 
                type="text" 
                placeholder="Escribir Nombre" 
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />
            <input 
                type="text" 
                placeholder="Escribir Apellido" 
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />
            <button onClick={guardarApi}> Aceptar </button>
        </div>
    )
}