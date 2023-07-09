import React from 'react';
import Card from 'react-bootstrap/Card';
import imagen from "../assets/imagenes/Matematicas.jpg";
import Container from 'react-bootstrap/Container';

function CardCarrousel() {
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
          <Card.Title>Matematicas</Card.Title>
          <Card.Text>
          Matemáticas: La matemática es una disciplina fundamental para el razonamiento lógico y la resolución de problemas en diversos campos. Su aplicación abarca desde ciencias exactas hasta finanzas y tecnología, permitiendo comprender el mundo y desarrollar habilidades analíticas indispensables.
          </Card.Text>
       </Card.Body>
      </Card>
    </Container>
  );
}

export default CardCarrousel;
