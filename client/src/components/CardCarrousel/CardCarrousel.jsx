import React from 'react';
import Card from 'react-bootstrap/Card';
import imagen from "../assets/imagenes/Matematicas.jpg";
import Container from 'react-bootstrap/Container';

function CardCarrousel() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card style={{ width: '1400px' }}>
        <div style={{ height: '450px', overflow: 'hidden' }}>
          <Card.Img
            variant="top"
            src={imagen}
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </div>
      </Card>
    </Container>
  );
}

export default CardCarrousel;
