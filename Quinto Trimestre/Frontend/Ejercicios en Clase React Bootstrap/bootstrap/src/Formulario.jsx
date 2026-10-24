import {Form} from "react-bootstrap"
import {Button} from "react-bootstrap"
import {Container} from "react-bootstrap"
function Formulario(){
    return(
        <Container fluid>
            <Form>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Ingrese el nombre"></Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Ingrese el Apellido">

                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Dirreccion</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Ingrese el Direccion">

                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control 
                    type="text"
                    placeholder="Ingrese el Numero De Telefono">
                        
                    </Form.Control>
                </Form.Group>
                <Button 
                variant="success">
                    Aceptar</Button>
                <Button 
                variant="danger">
                    Eliminar</Button>
            </Form>
        </Container>
    )
}
export default Formulario