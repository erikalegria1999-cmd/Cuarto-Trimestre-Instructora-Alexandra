import { useState } from "react"


export default function Informacion(){
        const [ info,setInfo] = useState("")
            async function consumoApi() {
                let respuesta = await fetch("http://127.0.0.1:5000/informacion")
                let datos = await respuesta.text()
                console.log(datos)
                setInfo(datos)
            
        } 
    return(
        <div>
            <p> {info}</p>
            <button onClick={consumoApi}>Mostrar informacion</button>
        </div>
        
    )
}