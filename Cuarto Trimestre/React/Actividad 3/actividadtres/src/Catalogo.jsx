
function Catalogo(){
    let catalogos =[
    {
    ID: 1,
    Título: "Inception",
    Director: "Christopher Nolan",
    Genero: "Ciencia Ficción / Acción",
    Año: 2010,
    Duración: "148 min"
    },
    {
    ID: 2,
    Título: "El Padrino",
    Director: "Francis Ford Coppola",
    Genero: "Drama / Crimen",
    Año: 1972,
    Duración: "175 min"
    },
    {
    ID: 3,
    Título: "Pulp Fiction",
    Director: "Quentin Tarantino",
    Genero: "Crimen / Drama",
    Año: 1994,
    Duración: "154 min"
    },
    {
    ID: 4,
    Título: "Interstellar",
    Director: "Christopher Nolan",
    Genero: "Ciencia Ficción / Aventura",
    Año: 2014,
    Duración: "169 min"
    },
    {
    ID: 5,
    Título: "Parasite",
    Director: "Bong Joon-ho",
    Genero: "Thriller / Drama",
    Año: 2019,
    Duración: "132 min"
    },
    {
    ID: 6,
    Título: "El Señor de los Anillos: El Retorno del Rey",
    Director: "Peter Jackson",
    Genero: "Fantasía / Aventura",
    Año: 2003,
    Duración: "201 min"
    },
    {
    ID: 7,
    Título: "Matrix",
    Director: "Lana Wachowski, Lilly Wachowski",
    Genero: "Ciencia Ficción / Acción",
    Año: 1999,
    Duración: "136 min"
    },
    {
    ID: 8,
    Título: "Whiplash",
    Director: "Damien Chazelle",
    Genero: "Drama / Música",
    Año: 2014,
    Duración: "106 min"
    }
]
    return(
        <div>
            <h1>Catalogo de Peliculas</h1>
            {catalogos.map(
                (catalogos)=>(
                    <>
                    <p>ID: {catalogos.ID}</p>
                    <p>Titulo: {catalogos.Título}</p>
                    <p>Director: {catalogos.Director}</p>
                    <p>Genero: {catalogos.Genero}</p>
                    <p>Año: {catalogos.Año}</p>
                    <p>Duracion: {catalogos.Catalogo}</p>
                    
                    </>
                )
            )}
        </div>
    )
}
export default Catalogo