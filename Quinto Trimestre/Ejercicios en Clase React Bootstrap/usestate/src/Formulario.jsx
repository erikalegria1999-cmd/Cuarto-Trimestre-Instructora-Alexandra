import { useState } from "react"



export default function Formulario (){

    let [nombre,setNombre] = useState("")
    let [apellido,setApellido] = useState("")
    let [direccion,setDireccion] = useState("")
    let [telefono,setTelefono] = useState("")
    let [password,setPasword] = useState("")
    function verInfo(){
        alert (nombre+" "+apellido+" "+direccion+" "+telefono+""+password)
    }

    return(
        <div>
            <input 
            type="text"
            placeholder=" Escriba el Nombre"
            onChange={((e)=>setNombre(e.target.value))}/>
            <input 
            type="text" 
            placeholder="Escriba Apellido" 
            onChange={((e)=>setApellido(e.target.value))} />
            <input type="text" 
            placeholder="Escriba Direccion" 
            onChange={((e)=>setDireccion(e.target.value))} />
            <input type="text" 
            placeholder="Escriba Telefono"
            onChange={((e)=>setTelefono(e.target.value))} />
            <input type="password"
            placeholder="Escriba contraseña" 
            onChange={((e)=>setPasword(e.target.value))} />
        <p style={{ color: password.length >= 6 ? "green" : "red" }}>
                    {password}
        </p>

            <button onClick={verInfo}>Aceptar</button>
        </div>          
    )
}