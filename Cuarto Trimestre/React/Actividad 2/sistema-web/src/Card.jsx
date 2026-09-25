function Card(props) {
    return (
        <div className="card">
            <span className="estado">{props.estado}</span>
            <img src={props.imagen} alt={props.titulo} />
            <div className="card-contenido">
                <h3>{props.titulo}</h3>
                <p className="categoria">{props.categoria}</p>
                <p>{props.descripcion}</p>
                <p className="precio">${props.precio}</p>
            </div>
        </div>
    );
}

export default Card;