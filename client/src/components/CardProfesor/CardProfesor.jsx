import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import imagen from "../assets/imagenes/nuevoProfe.jpg";
import Container from 'react-bootstrap/Container';

function CardProfesor() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card style={{ width: '300px' }}>
        <div style={{ height: '300px', overflow: 'hidden' }}>
          <Card.Img
            variant="top"
            src={imagen}
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </div>
        <Card.Body>
          <Card.Title>Matematicas</Card.Title>
          <Card.Text>
            Aquí va la publicidad de las materias que se enseñan
          </Card.Text>
          <Button variant="primary">Aplicar aquí</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CardProfesor;
