import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imagen from "../assets/imagenes/nuevoProfe.jpg"
import Container from 'react-bootstrap/Container'

function CardProfesor() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
        <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagen} />
            <Card.Body>
            <Card.Title>matematicas</Card.Title>
            <Card.Text>
                Matematico especializado en produccion bobina con orientacion a bifurcaciones neutras.
            </Card.Text>
                <Button variant="primary">Aplicar aqui</Button>
            </Card.Body>
        </Card>
    </Container>
  );
}


export default CardProfesor;