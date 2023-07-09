import React from 'react';
import Card from 'react-bootstrap/Card';
import imagen from "../assets/imagenes/Historia.jpg";
import Container from 'react-bootstrap/Container';

function CardCarrousel3() {
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
          <Card.Title>Historia</Card.Title>
          <Card.Text>
          Historia: La historia nos brinda una comprensión profunda del pasado y sus repercusiones en el presente. Nos ayuda a comprender nuestras raíces, a valorar las luchas y logros de sociedades pasadas, y a aprender de los errores y éxitos para construir un futuro mejor informado y consciente de nuestro legado.
          </Card.Text>
       </Card.Body>
      </Card>
    </Container>
  );
}

export default CardCarrousel3;
