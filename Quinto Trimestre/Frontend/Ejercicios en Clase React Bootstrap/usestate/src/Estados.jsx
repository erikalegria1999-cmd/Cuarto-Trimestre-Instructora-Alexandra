import { useState } from "react"

export default function Estados() {
    let [conteo, setConteo] = useState(0)
// funcion por fuera del boton 
    function Aumentar(){
        setConteo(conteo+1)
    }
    function Restar(){
        setConteo(conteo-1)
    }
    return (
        <div>
        <h1>Conteo: {conteo}</h1>
        <button onClick={Aumentar}>
            Incrementar
        </button>
        {/* se puede hacer la funcion desde el boton */}
        <button onClick={()=>{setConteo(conteo-1)}}>Disminuir</button>
        <button onClick={Restar}>DisminuirClasica</button>
        </div>
    )
}