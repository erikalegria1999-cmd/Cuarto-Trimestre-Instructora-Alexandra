
import { useState } from "react";

export default function Santiago() {
    const [saludar, setSaludar] = useState("");

    async function consumoApi() {
        let res = await fetch("http://127.0.0.1:3000/erik");
        let data = await res.json();

        console.log(data)
        setSaludar(data.Saludo)
        
    }

    return (
        <div>
            
            <p>{saludar}</p>
            <button className="btn btn-primary" onClick={consumoApi}>
                API
            </button>
        </div>
    );
}
