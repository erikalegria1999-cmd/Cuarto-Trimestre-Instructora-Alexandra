import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import {Container} from "react-bootstrap"
function Modaleslive() {
        let abrir = () => {
        let modal = document.getElementById('mi-modal')
        if (modal)modal.style.display = 'block'
    }
    let cerrar = () => {
        let modal = document.getElementById('mi-modal')
        if(modal) modal.style.display = 'none'
    
    }
    return (
        <>
            <Button variant="primary" onClick={abrir}>
                Abrir Modal
            </Button>
                <Container 
                id="mi-modal" 
                className='modal show'
                style={{ display: 'none' }}>
                <Modal.Dialog>
                    <Modal.Header closeButton onClick={cerrar}>
                        <Modal.Title>Modal Sencillo</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>¡Este modal se abre y cierra </p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={cerrar}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Container>
        </>
    )
}
export default Modaleslive