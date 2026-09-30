//Cree la Funcion Biblioteca
function Biblioteca (){
    //Array 
    let libro = [
        {
        titulo: "Dialogo entre un sacerdote y un moribundo ",
        autor:"Marques de Sade",
        publicacion:"12 de julio de 1782",
        editorial:"Editorial Del Nuevo Extremo",
        numeroPaginas:"112 Paginas",
        imagen:"https://images.openai.com/static-rsc-4/5kkXrBK4WoxAcMgvuHy1nilWP2Yoc6KFDPD6DKuiuwpkVOffi2vlfTElkkSvK2QThBFcxogWq5tSabFhW8o2_Oe7T1VVENQsLUU71sM4S7MsVXFOISRMdhfFUnfl1bp3c5LRW5khNEadXJAg48ljU8OkdUW03H2Q9JccfUaPP0jFd-zEfIMfNZMPgEFkx4qa?purpose=fullsize"
        }
    ]    
    return(
    //utilize el map  para interactuar con el HTML
        <div>
            {libro.map((libro)=>(
                <div className="biblioteca">
                    <h1>Biblioteca</h1>
            <h2>Titulo Del Libro: {libro.titulo}</h2>
            <img src={libro.imagen}/>
            <h2>Autor Del libro: {libro.autor}</h2>
            <h2>Fecha De Publicacion: {libro.publicacion}</h2>
            <h2>Editorial: {libro.editorial}</h2>
            <h2>Numero De paginas: {libro.numeroPaginas}</h2>
                </div>
            ))}
            
        </div>
    )
}
export default Biblioteca