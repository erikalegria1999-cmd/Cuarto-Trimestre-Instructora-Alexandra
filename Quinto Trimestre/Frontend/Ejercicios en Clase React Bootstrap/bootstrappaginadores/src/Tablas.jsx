import { Table, Pagination, Container } from "react-bootstrap"

function TablaProductos() {
    let productos = [
        { id: "1", nombre: "Leche", cantidad: "1 litro" },
        { id: "2", nombre: "Chocorramo", cantidad: "70g" },
        { id: "3", nombre: "Yogurt Alpina", cantidad: "1000 g" },
        { id: "4", nombre: "Galletas", cantidad: "400g" },
        { id: "5", nombre: "Cafe Sello Rojo", cantidad: "500g" },
        { id: "6", nombre: "Papas Margarita pollo", cantidad: "500 g" },
    ];

    return (
        <Container className="mt-4">
            <h3 className="mb-3 text-center">Tabla De Productos</h3>
            
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map((producto) => (
                        <tr>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.cantidad}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Pagination className="justify-content-center">
                <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last />
            </Pagination>
        
        </Container>
    )
} 

export default TablaProductos