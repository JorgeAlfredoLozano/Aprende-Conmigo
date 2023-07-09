import React from 'react';
import Card from 'react-bootstrap/Card';
import imagen from "../assets/imagenes/Literatura.jpg";
import Container from 'react-bootstrap/Container';

function CardCarrousel2() {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card style={{ width: '600px' }}>
        <div style={{ height: '300px', overflow: 'hidden' }}>
          <Card.Img
            variant="top"
            src={imagen}
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </div>
        <Card.Body>
          <Card.Title>Literatura</Card.Title>
          <Card.Text>
          Literatura: La literatura nos transporta a mundos imaginarios, nos conecta con emociones y nos permite reflexionar sobre la condición humana. A través de historias y estilos literarios, exploramos la diversidad cultural, ampliamos nuestro vocabulario y desarrollamos nuestra capacidad de comunicación y creatividad.
          </Card.Text>
       </Card.Body>
      </Card>
    </Container>
  );
}

export default CardCarrousel2;
