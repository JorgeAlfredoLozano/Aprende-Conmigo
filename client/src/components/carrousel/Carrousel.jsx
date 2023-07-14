<<<<<<< HEAD
import Carousel from 'react-bootstrap/Carousel';
import CardCarrousel from '../CardCarrousel/CardCarrousel';
import CardCarrousel2 from '../CardCarrousel/CardCarrousel2';
import CardCarrousel3 from '../CardCarrousel/CardCarrousel3';

function Carrousel() {
  return (
        
    <Carousel className='transparent'>
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

=======
import React, { useState, useEffect } from 'react';
import imagen from '../assets/imagenes/matematicas.jpg';
import imagen2 from '../assets/imagenes/estudiantes-universitarios.png';
import imagen3 from '../assets/imagenes/clases.png';
import styles from './Carrusel.module.css';

function Carrusel() {
  const images = [
    imagen,
    imagen2,
    imagen3,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.carousel}>
      <img className={styles.imagenes} src={images[currentImageIndex]} alt="Carousel" />
    </div>
  );
}

export default Carrusel;
>>>>>>> 58375bbc69c5c49eb9cb295d70c1c324e2f2d397
