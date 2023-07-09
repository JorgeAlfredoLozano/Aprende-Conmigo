import Carousel from 'react-bootstrap/Carousel';
import CardCarrousel from '../CardCarrousel/CardCarrousel';
import CardCarrousel2 from '../CardCarrousel/CardCarrousel2';
import CardCarrousel3 from '../CardCarrousel/CardCarrousel3';

function Carrousel() {
  return (
        
    <Carousel className='bg-primary slide '>
        <Carousel.Item>
            <CardCarrousel/>
        </Carousel.Item>
        <Carousel.Item>
            <CardCarrousel2/>
        </Carousel.Item>
        <Carousel.Item>
            <CardCarrousel3/>
        </Carousel.Item>
    </Carousel>
  );
}

export default Carrousel; 

