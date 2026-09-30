
function Restaurante (){
    let menu = [
    {
        ID: 1,
        Nombre: "Hamburguesa Gourmet",
        Categoría: "Platos Principales",
        Precio: "$12.50"
    },
    {
        ID: 2,
        Nombre: "Pizza Margherita",
        Categoría: "Platos Principales",
        Precio: "$10.00"
    },
    {
        ID: 3,
        Nombre: "Ensalada César",
        Categoría: "Entradas",
        Precio: "$7.50"
    },
    {
        ID: 4,
        Nombre: "Sopa de Tomate",
        Categoría: "Entradas",
        Precio: "$5.50"
    },
    {
        ID: 5,
        Nombre: "Tiramisú",
        Categoría: "Postres",
        Precio: "$4.50"
    },
    {
        ID: 6,
        Nombre: "Cheesecake de Frutos Rojos",
        Categoría: "Postres",
        Precio: "$5.00"
    },
    {
        ID: 7,
        Nombre: "Limonada Natural",
        Categoría: "Bebidas",
        Precio: "$3.00"
    },
    {
        ID: 8,
        Nombre: "Cerveza Artesanal",
        Categoría: "Bebidas",
        Precio: "$4.00"
    }
]
    return(
        <div>
            <h1>Menu De Restaurante</h1>
            {menu.map(
                (menu)=>(
                    <tr>
                    <td>ID: {menu.ID}</td>
                    <td>Nombre:  {menu.Nombre}</td>
                    <td>Categoria: {menu.Categoría}</td>
                    <td>Precio: {menu.Precio}</td>
                    </tr>
                    
                )

            )}
        </div>
    )
}

export default Restaurante