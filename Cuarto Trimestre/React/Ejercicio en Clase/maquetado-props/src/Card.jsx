function Cards (props){
    return(
        <div className="cards">
            <p> {props.nombredisney} </p> 
            <p> {props.producto} </p>
            <p> {props.precio} </p>
        </div> 
    )
}
export default Cards