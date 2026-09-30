//cree la funcion listaanimales
function listaanimales () {
let animales=[
    {
    "nombre": "Jaguar",
    "especie": "Panthera onca",
    "habitat": "Bosques tropicales y selvas de América del Sur y Central"
    },
    {
    "nombre": "Oso polar",
    "especie": "Ursus maritimus",
    "habitat": "Regiones árticas y campos de hielo marino"
    },
    {
    "nombre": "Lobo gris",
    "especie": "Canis lupus",
    "habitat": "Bosques, montañas, tundras y desiertos del hemisferio norte"
    },
    {
    "nombre": "Águila real",
    "especie": "Aquila chrysaetos",
    "habitat": "Zonas montañosas, colinas y acantilados"
    },
    {
    "nombre": "Delfín mular",
    "especie": "Tursiops truncatus",
    "habitat": "Océanos cálidos y templados de todo el mundo"
    },
    {
    "nombre": "Camello bactriano",
    "especie": "Camelus bactrianus",
    "habitat": "Desiertos fríos y estepas de Asia central"
    },
    {
    "nombre": "Pingüino emperador",
    "especie": "Aptenodytes forsteri",
    "habitat": "Hielos marinos y continente de la Antártida"
    },
    {
    "nombre": "Gorila de montaña",
    "especie": "Gorilla beringei beringei",
    "habitat": "Bosques nubosos y de montaña en África central"
    },
    {
    "nombre": "Canguro rojo",
    "especie": "Osphranter rufus",
    "habitat": "Matorrales, praderas y zonas áridas de Australia"
    },
    {
    "nombre": "Rana dardo dorada",
    "especie": "Phyllobates terribilis",
    "habitat": "Selvas húmedas de la costa pacífica colombiana"
    }
]
    return(
        <div className="animales">
            <h1>Animales 🦁 </h1>
            {animales.map(
                (animales)=>(
                    <>
                    <p>Nombre: {animales.nombre}</p>
                    <p>Especie: {animales.especie}</p>
                    <p>Habitad: {animales.habitat} </p>
                    </>
                    
                )
            )}
        </div>
    )
}
export default listaanimales