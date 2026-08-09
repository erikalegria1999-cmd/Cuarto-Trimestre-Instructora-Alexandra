let agregar = () => {
    let contenedor = document.getElementById("contenedor")

    contenedor.innerHTML = `
        <table style="border:2px solid red;">
            <tr>
                <td style="border:1px solid black;">Fila 1, Col 1</td>
                <td style="border:1px solid black;">Fila 1, Col 2</td>
                <td style="border:1px solid black;">Fila 1, Col 3</td>
                <td style="border:1px solid black;">Fila 1, Col 4</td>
                <td style="border:1px solid black;">Fila 1, Col 5</td>
            </tr>

            <tr>
                <td style="border:1px solid black;">Fila 2, Col 1</td>
                <td style="border:1px solid black;">Fila 2, Col 2</td>
                <td style="border:1px solid black;">Fila 2, Col 3</td>
                <td style="border:1px solid black;">Fila 2, Col 4</td>
                <td style="border:1px solid black;">Fila 2, Col 5</td>
            </tr>

            <tr>
                <td style="border:1px solid black;">Fila 3, Col 1</td>
                <td style="border:1px solid black;">Fila 3, Col 2</td>
                <td style="border:1px solid black;">Fila 3, Col 3</td>
                <td style="border:1px solid black;">Fila 3, Col 4</td>
                <td style="border:1px solid black;">Fila 3, Col 5</td>
            </tr>

            <tr>
                <td style="border:1px solid black;">Fila 4, Col 1</td>
                <td style="border:1px solid black;">Fila 4, Col 2</td>
                <td style="border:1px solid black;">Fila 4, Col 3</td>
                <td style="border:1px solid black;">Fila 4, Col 4</td>
                <td style="border:1px solid black;">Fila 4, Col 5</td>
            </tr>

            <tr>
                <td style="border:1px solid black;">Fila 5, Col 1</td>
                <td style="border:1px solid black;">Fila 5, Col 2</td>
                <td style="border:1px solid black;">Fila 5, Col 3</td>
                <td style="border:1px solid black;">Fila 5, Col 4</td>
                <td style="border:1px solid black;">Fila 5, Col 5</td>
            </tr>
        </table>
    `;
};