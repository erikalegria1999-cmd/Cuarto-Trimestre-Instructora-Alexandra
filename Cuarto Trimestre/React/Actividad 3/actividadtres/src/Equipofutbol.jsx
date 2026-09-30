
function equipoFutbol (){
    let jugadores= [
    {
    Numero: 10,
    Nombre: "Lionel",
    Apellido: "Messi",
    Posición: "Delantero / Extremo",
    Edad: 39
    },
    {
    Numero: 7,
    Nombre: "Cristiano",
    Apellido: "Ronaldo",
    Posición: "Delantero Centro",
    Edad: 41
    },
    {
    Numero: 7,
    Nombre: "Vinícius",
    Apellido: "Júnior",
    Posición: "Extremo Izquierdo",
    Edad: 26
    },
    {
    Numero: 9,
    Nombre: "Erling",
    Apellido: "Haaland",
    Posición: "Delantero Centro",
    Edad: 26
    },
    {
    Numero: 10,
    Nombre: "Kylian",
    Apellido: "Mbappé",
    Posición: "Delantero / Extremo",
    Edad: 27
    },
    {
    Numero: 17,
    Nombre: "Kevin",
    Apellido: "De Bruyne",
    Posición: "Centrocampista",
    Edad: 35
    },
    {
    Numero: 4,
    Nombre: "Virgil",
    Apellido: "van Dijk",
    Posición: "Defensa Central",
    Edad: 35
    },
    {
    Numero: 1,
    Nombre: "Thibaut",
    Apellido: "Courtois",
    Posición: "Portero",
    Edad: 34
    }
]
    return(
        <div>
            <h1>Jugadores De futbol ⚽ </h1>
            {jugadores.map(
                (jugador)=>(
                    <>
                    <p>Numero: {jugador.Numero}</p>
                    <p>Nombre: {jugador.Nombre} </p>
                    <p>Apellido: {jugador.Apellido} </p>
                    <p>Posicion: {jugador.Posición} </p>
                    <p>Edad: {jugador.Edad}</p>
                    </>
                )
            )}
        </div>
    )
}

export default equipoFutbol