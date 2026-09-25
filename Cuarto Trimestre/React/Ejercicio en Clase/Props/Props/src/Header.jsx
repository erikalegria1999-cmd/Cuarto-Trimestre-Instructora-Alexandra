import Dashboard from "./Dashboard"
function Header(props){

    return(
        <div>
            <Dashboard nombres= {props.nombre}></Dashboard>
            <h1>Este es el Header componente Hijo</h1>
            <h1>Este Es el componente De: {props.nombre} contaseña {props.password}</h1>
            
        </div>
    )
}

export default Header