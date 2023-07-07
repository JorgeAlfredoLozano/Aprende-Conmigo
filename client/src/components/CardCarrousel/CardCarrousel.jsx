import React from 'react';
import Card from 'react-bootstrap/Card';
import imagen from "../assets/imagenes/nuevoProfe.jpg";
import Container from 'react-bootstrap/Container';

function CardCarrousel() {
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
       </Card.Body>
      </Card>
    </Container>
  );
}

export default CardCarrousel;
