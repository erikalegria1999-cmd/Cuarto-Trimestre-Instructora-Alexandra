
function Estados (){
    // js
    //variables 
    let nombre = "Santiago Alegria"
    let num1 = 3
    let num2 = 2
    
    // Arreglos
    let frutas =["manzana","pera","uva"]
    // Objetos
    let usuario ={
        nombre: "Santiago",
        apellido: "alegria",
        
    }
    //Arreglos-Objetos
        let avatar = [
    {
        nombre: "aang",
        imagen: "https://tse3.mm.bing.net/th/id/OIP.KAKFjRz0soTxpj3QJBKyMQHaDt?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        nombre: "suki",
        imagen: "https://tse1.explicit.bing.net/th/id/OIP.d5l9H7roZAY5h4vvbzt5gAHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        nombre: "katara",
        imagen: "https://tse1.mm.bing.net/th/id/OIP.iqU5bp2Ef69InjORRl4RUwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        nombre: "sokka",
        imagen: "https://tse4.mm.bing.net/th/id/OIP.xRgEhMingVwv7KIOkT4HsQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        nombre: "zuko",
        imagen: "https://tse3.mm.bing.net/th/id/OIP.YdopS_sDyjuPqVlBUhgxNwHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
    }
    ]
    return (
        <div>
            <h1> Bienvenido {nombre} </h1> 
            <p> Suma:  {num1 + num2} </p>
            <p>{frutas[0]}</p>
            <p>{frutas[1]}</p>
            <p>{frutas[2]}</p>
            <p>
                {frutas.map(
                    (index) =>(
                        <p>{index}</p>
                    )
                )}
            </p>
            <table>
                <thead>
                    <td>
                        <th>Nombre Frutas</th>
                    </td>
                </thead>
                <tbody>
                    {
                        frutas.map(
                            (fruta)=>(
                                <tr>
                                    <td>
                                        {fruta}
                                    </td>
                                </tr>
                            )
                        )
                    }
                </tbody>
            </table>
                <div className="tajeta">
                    <p>{usuario.nombre}</p>
                    <p>{usuario.apellido}</p>
                </div>

                <div>
                    {avatar.map((a)=>(
                        <div className="target">
                            <p>Nombre: {a.nombre}</p>
                            <img src={a.imagen}></img>
                        </div>
                    ))}
                </div>

            
                    
        </div>
    )
}

export default Estados