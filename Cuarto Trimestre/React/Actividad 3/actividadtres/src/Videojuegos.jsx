//cree la funcion listaanimales
function videojuegos () {
let game= [
    {
    ID: 1,
    Nombre: "The Legend of Zelda: Breath of the Wild",
    Plataforma: "Nintendo Switch, Wii U",
    Genero: "Acción-Aventura / Mundo Abierto",
    Añodelanzamiento: 2017
    },
    {
    ID: 2,
    Nombre: "Red Dead Redemption 2",
    Plataforma: "PlayStation 4, Xbox One, PC",
    Genero: "Acción-Aventura / Western",
    Añodelanzamiento: 2018
    },
    {
    ID: 3,
    Nombre: "God of War",
    Plataforma: "PlayStation 4, PC",
    Genero: "Acción-Aventura / Hack and Slash",
    Añodelanzamiento: 2018
    },
    {
    ID: 4,
    Nombre: "Minecraft",
    Plataforma: "Multiplataforma",
    Genero: "Sandbox / Supervivencia",
    Añodelanzamiento: 2011
    },
    {
    ID: 5,
    Nombre: "Elden Ring",
    Plataforma: "PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, PC",
    Genero: "RPG de Acción / Soulsborne",
    Añodelanzamiento: 2022
    },
    {
    ID: 6,
    Nombre: "The Witcher 3: Wild Hunt",
    Plataforma: "PlayStation 4, Xbox One, Nintendo Switch, PC",
    Genero: "RPG de Acción",
    Añodelanzamiento: 2015
    },
    {
    ID: 7,
    Nombre: "Grand Theft Auto V",
    Plataforma: "Multiplataforma",
    Genero: "Acción-Aventura / Mundo Abierto",
    Añodelanzamiento: 2013
    },
    {
    ID: 8,
    Nombre: "Hollow Knight",
    Plataforma: "PlayStation 4, Xbox One, Nintendo Switch, PC",
    Genero: "Metroidvania / Plataformas",
    Añodelanzamiento: 2017
    }
]
    
    return(
        <div>
            <h1>Video juegos 🎮 </h1>
            {game.map(
                (juegos)=>(
                    <>
                    <p>ID: {juegos.id}</p>
                    <p>Nombre: {juegos.nombre}</p>
                    <p>Plataforma: {juegos.Plataforma} </p>
                    <p>Genero: {juegos.Genero}</p>
                    <p>Año de lanzamiento: {juegos.Añodelanzamiento} </p>
                    </>
                    
                )
            )}
        </div>
    )
}
export default videojuegos