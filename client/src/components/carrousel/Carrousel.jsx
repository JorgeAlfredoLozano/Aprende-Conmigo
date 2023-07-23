import React, { useState, useEffect } from 'react';
import imagen from '../../assets/imagenes/matematicas.jpg';
import imagen2 from '../../assets/imagenes/estudiantes-universitarios.png';
import imagen3 from '../../assets/imagenes/clases.png';
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
      <div className={styles.carouselContainer}>
        <img className={styles.imagenes} src={images[currentImageIndex]} alt="Carousel" />
      </div>
    </div>
  );
}

export default Carrusel;
