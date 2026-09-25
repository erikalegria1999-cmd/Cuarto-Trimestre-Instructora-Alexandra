import Card from "./Card";

function Dashboard() {
    return (
        <div className="dashboard">
            <div>
                <Card
                    titulo="Fresas"
                    descripcion="Fresas frescas y dulces"
                    categoria="Frutas"
                    imagen="https://plus.unsplash.com/premium_photo-1724256149016-05c013fe058e?q=80&w=987&auto=format&fit=crop"
                    precio={8000}
                    estado="Disponible"
                />
                <button className="btn" style={{ width: "100%", marginTop: "8px" }}>🛒 Agregar</button>
            </div>

            <div>
                <Card
                    titulo="Naranjas"
                    descripcion="Naranjas ideales para jugo"
                    categoria="Frutas"
                    imagen="https://images.unsplash.com/photo-1603736105517-55d3f7f18f73?q=80&w=1170&auto=format&fit=crop"
                    precio={5000}
                    estado="Disponible"
                />
                <button className="btn" style={{ width: "100%", marginTop: "8px" }}>🛒 Agregar</button>
            </div>

            <div>
                <Card
                    titulo="Mandarinas"
                    descripcion="Mandarinas dulces y jugosas"
                    categoria="Frutas"
                    imagen="https://plus.unsplash.com/premium_photo-1693266290145-44e340b8a920?q=80&w=988&auto=format&fit=crop"
                    precio={6000}
                    estado="Disponible"
                />
                <button className="btn" style={{ width: "100%", marginTop: "8px" }}>🛒 Agregar</button>
            </div>

            <div>
                <Card
                    titulo="Mangos"
                    descripcion="Mangos maduros y deliciosos"
                    categoria="Frutas"
                    imagen="https://images.unsplash.com/photo-1605027990121-cbae9e0642df?q=80&w=1170&auto=format&fit=crop"
                    precio={7000}
                    estado="Disponible"
                />
                <button className="btn" style={{ width: "100%", marginTop: "8px" }}>🛒 Agregar</button>
            </div>

            <div>
                <Card
                    titulo="Piña"
                    descripcion="Piña dulce y fresca"
                    categoria="Frutas"
                    imagen="https://images.unsplash.com/photo-1572859730774-2cb70677d258?q=80&w=1074&auto=format&fit=crop"
                    precio={9000}
                    estado="Disponible"
                />
                <button className="btn" style={{ width: "100%", marginTop: "8px" }}>🛒 Agregar</button>
            </div>

            <div>
                <Card
                    titulo="Sandía"
                    descripcion="Sandía fresca y jugosa"
                    categoria="Frutas"
                    imagen="https://images.unsplash.com/photo-1563114773-84221bd62daa?q=80&w=1170&auto=format&fit=crop"
                    precio={10000}
                    estado="Disponible"
                />
                <button className="btn" style={{ width: "100%", marginTop: "8px" }}>🛒 Agregar</button>
            </div>
        </div>
    );
}

export default Dashboard;