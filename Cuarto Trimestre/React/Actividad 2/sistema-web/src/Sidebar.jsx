function Sidebar(props) {
    return (
        <div className="sidebar">
            <div className="logo">
                <h1>Fru <strong>Market</strong></h1>
                <p>Frutas frescas para ti 🍓</p>
            </div>

            <nav className="menu">
                <a href="#inicio">🏠 Inicio</a>
                <a href="#frutas">🍎 Frutas</a>
                <a href="#carrito">🛒 Carrito</a>
                <a href="#pedidos">📋 Pedidos</a>
                <a href="#cuenta">👤 Cuenta</a>
                <a href="#configuracion">⚙️ Configuración</a>
            </nav>

            <div className="perfil">
                <span>👤</span>
                <p>
                    <strong>{props.nombre}</strong>
                </p>
            </div>
        </div>
    );
}

export default Sidebar;