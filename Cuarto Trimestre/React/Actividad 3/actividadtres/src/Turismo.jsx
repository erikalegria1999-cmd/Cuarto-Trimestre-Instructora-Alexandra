function Turismo(){
    let sitiosTuristicos =[
    {
        id: 1,
        destino: "Torre del Reloj",
        ubicacion: "Centro Histórico",
        precio: 20000
    },
    {
        id: 2,
        destino: "Puente del Humilladero",
        ubicacion: "Centro Histórico",
        precio: 15000
    },
    {
        id: 3,
        destino: "Morro de Tulcán",
        ubicacion: "Popayán",
        precio: 25000
    },
    {
        id: 4,
        destino: "Pueblito Patojo",
        ubicacion: "Popayán",
        precio: 20000
    },
    {
        id: 5,
        destino: "Parque Caldas",
        ubicacion: "Centro Histórico",
        precio: 10000
    },
    {
        id: 6,
        destino: "Catedral Nuestra Señora de la Asunción",
        ubicacion: "Centro Histórico",
        precio: 15000
    },
    {
        id: 7,
        destino: "Museo Nacional Guillermo Valencia",
        ubicacion: "Popayán",
        precio: 30000
    },
    {
        id: 8,
        destino: "Museo de Historia Natural",
        ubicacion: "Popayán",
        precio: 25000
    }
]
    return(
        <div className="turismo">
            <h1>Informativo De Turismo</h1>
            <p>Bienvenido a nuestra guía turística.
                Aquí encontrarás información sobre los principales destinos,
                recomendaciones y detalles para planificar tu viaje <strong>Organizada por:</strong>
                Agencia de Turismo Sena
            </p>
            <h2>Lista de Destinos Turisticos</h2>
            {sitiosTuristicos.map(
                (sitiosTuristicos)=>(
                    <table>                
                    <tr>
                        <th>ID {sitiosTuristicos.id}</th>
                        <th>Destino {sitiosTuristicos.destino}</th>
                        <th>Ciudad {sitiosTuristicos.ubicacion}</th>
                        <th>Precio Estimado {sitiosTuristicos.precio}</th>
                    </tr>                
                    </table>
                )
            )}
        </div>
    ) 
}
export default Turismo