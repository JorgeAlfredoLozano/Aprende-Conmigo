import Carousel from 'react-bootstrap/Carousel';
import CardProfesor from '../CardProfesor/CardProfesor';

function Carrousel() {
  return (
        
    <Carousel className='bg-primary slide '>
        <Carousel.Item>
            <CardProfesor/>
        </Carousel.Item>
        <Carousel.Item>
            <CardProfesor/>
        </Carousel.Item>
        <Carousel.Item>
            <CardProfesor/>
        </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel; 

