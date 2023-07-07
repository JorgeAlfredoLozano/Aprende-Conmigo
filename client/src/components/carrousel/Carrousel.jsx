import Carousel from 'react-bootstrap/Carousel';
import CardCarrousel from '../CardCarrousel/CardCarrousel';

function Carrousel() {
  return (
        
    <Carousel className='bg-primary slide '>
        <Carousel.Item>
            <CardCarrousel/>
        </Carousel.Item>
        <Carousel.Item>
            <CardCarrousel/>
        </Carousel.Item>
        <Carousel.Item>
            <CardCarrousel/>
        </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel; 

