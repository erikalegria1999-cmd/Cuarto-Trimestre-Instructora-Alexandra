//creo la funcion Tablacanciones
function Tablacanciones () {
    let canciones= [
        {
        id:"1",
        titulo:"Maldito duende",
        artista:"Héroes del Silencio",
        album:"Senderos de traición",
        ano: "1990",  
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBUyBkNEhH6pJcZf1oBuR4VisBeI8U4SQtB61hIJ0yWXL_EdEBQly77Ww&s=10"
        },
        {
        id:"2",
        titulo:"La luna me sabe a poco",
        artista:"Marea",
        album:"Besos de perro",
        ano: "2002",  
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf9UuaXZphD4TOCx1LjIi8tZkGxPo2OztTQkSqs9sLBsCI-VqGFBpt5qk&s=10"
        },
        {
        id:"3",
        titulo:"Vestido de cristal",
        artista:"Kraken",
        album:"Kraken II",
        ano: "1989",  
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT113jISphM_-kvvdNTdiw4ZfeA4mRCkF-2UxemufZNit7QdjgP2BRHdQ-c&s=10"
        },
        {
        id:"4",
        titulo:"Jesucristo García",
        artista:"Extremoduro",
        album:"Rock transgresivo",
        ano: "1989",  
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReeTohwpYEWikg3ggJoHOVFsv5vCpqMH2W1yVk3cmGQcgpMDuWef2nFyDJ&s=10"
        },
        {
        id:"5",
        titulo:"Mujer amante",
        artista:"Rata Blanca",
        album:"Magos, espadas y rosas",
        ano: " 1991",  
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSego3cDM2_1N4sOb1F72f80Ez2WP2xFCmNYYsGcql1JbuQqoXoetsaO54&s=10"
        },
        {
        id:"6",
        titulo:"En la ciudad de la furia ",
        artista:"Soda Stereo ",
        album:"Doble Vida ",
        ano: "1988 ",  
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQACkdrPIuIbZBeGCZGNlCB-JmwUx6s5d3ca6ziXnwE513bjZ6XD3cGCFz&s=10"
        },
        {
        id:"7",
        titulo:"Afuera",
        artista:"Caifanes",
        album:"El nervio del volcán",
        ano: "1994",  
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7lRTFkO_4xCgoxLZe02fksZMQPBGRdL0t-54UIo0_I55FN5eQ0gf3EuOY&s=10"
        },
        {
        id:"8",
        titulo:"Gimme Tha Power",
        artista:"Molotov",
        album:"¿Dónde jugarán las niñas?",
        ano: "1997",  
        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmfWk5qGTdV9YeeDEK3Z5PVTcw8-EwdD3ZeWTKD_oEyZW3idwC3b3QYRQ&s=10"
        }
    ]    
    return(
        <div className="canciones">
            <h1>Canciones</h1>
            {canciones.map((cancion)=>(
                <div>
                    <img src= {cancion.imagen}/>
                    <h2>Titulo: {cancion.titulo}</h2>
                    <p>ID:{cancion.id}</p>
                    <h2>Artista: {cancion.artista}</h2>
                    <h2>Album: {cancion.album}</h2>
                    <h2>Año:{cancion.ano}</h2>
                    
                </div>

            ))           
            }
        </div>
    )
}
export default Tablacanciones