import './App.css'
import { Button }  from 'react-bootstrap'
import Formulario from "./Formulario"
import Modales from './Modales'
import Modaleslive from './Modaleslive'
import Contenedores from './Contenedores'


// bottones bootstrap
function App() {
  
  return (
    <div>
        <h1>Colores De los botones</h1>
        <Button variant="primary">Principal</Button>
        <Button variant="secondary">Secundario</Button>
        <Button variant="success">Éxito</Button>
        <Button variant="danger">Eliminar</Button>
        <Button variant="warning">Advertencia</Button>
        <Button variant="info">Información</Button>
        <Button variant="light">Claro</Button>
        <Button variant="dark">Oscuro</Button>
        <h2>Formularios</h2>
        <Formulario></Formulario>
        <h2>Modales estatico</h2>
        <Modales></Modales>
        <h2>Modelo Dinamico</h2>
        <Modaleslive></Modaleslive>
        <h2>CONTENEDOR</h2>
        <Contenedores></Contenedores>

    </div>
  )
}

export default App
