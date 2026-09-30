//Cree la funcion Listaciudades
function Listaciudades(){
//cree el array para ciudades
        let ciudades = [
        "Bogota","Medellin","Cali","Barranquilla",
        "Cartagena","Bucaramanga","Pereira","Manizales",
        "Popayán",  
    ]
return(
//cree una etiqueta para recorrer el arreglo
//tambien le coloque la clase para CSS
//un h1 para un titulo para verlo
    <div className="ciudades">
        <h1>Ciudades De Colombia</h1>
        {ciudades.map(
            (ciudad) =>(
                <p>{ciudad}</p>
            )
        )}

    </div>
)
}
export default Listaciudades