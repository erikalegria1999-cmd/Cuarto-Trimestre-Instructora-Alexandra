
function Siderbar (props) {

    return(
        <div className="siderbar">
            <div className="logo">
                Ejemplo de pagina
            </div>
            <nav className="menu">
                <div>
                    Dashboard
                </div> 
                <div>
                    Menu
                </div>
                <div>
                    pedidos
                </div>
                <div>
                    tabla
                </div>
                <div>
                    cuenta
                </div>
                <div>
                    settings
                </div>
            </nav>
            <div className="perfil">
                {props.nombre}
            </div>
        </div>        
    )
        
}
export default Siderbar
