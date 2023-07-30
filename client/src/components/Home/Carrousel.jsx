import React, { useState, useEffect } from 'react';
import styles from './Carrousel.module.css'; // Importa los estilos de tu archivo CSS
import imagen_matematicas from '../../assets/imagenes/imagen_matematicas.jpg';
import imagen_geografia from '../../assets/imagenes/imagen_geografia.jpg';
import imagen_ingles from '../../assets/imagenes/imagen_ingles.jpg';
import imagen_literatura from '../../assets/imagenes/imagen_literatura.jpg';
import imagen_programacion from '../../assets/imagenes/imagen_programacion.jpg';
import imagen_quimica from '../../assets/imagenes/imagen_quimica.jpg';
import imagen_arte from '../../assets/imagenes/imagen_arte.jpg';
import { useNavigate } from 'react-router';

const Carousel = () => {
  const navigate = useNavigate();

  const subjects = [
    { name: 'Matemáticas', imageUrl: imagen_matematicas },
    { name: 'Geografía', imageUrl: imagen_geografia },
    { name: 'Ingles', imageUrl: imagen_ingles },
    { name: 'Literatura', imageUrl: imagen_literatura },
    { name: 'Programación', imageUrl: imagen_programacion },
    { name: 'Química', imageUrl: imagen_quimica },
    { name: 'Arte', imageUrl: imagen_arte },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying && !isHovered) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % subjects.length);
      }
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isPlaying, isHovered, subjects.length]);

  const handlePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const handleNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % subjects.length);
  };

  const handlePrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + subjects.length) % subjects.length);
  };

  const handleCardClick = (name) => {
    navigate(`/busqueda/${name}`);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={styles['carousel-container']}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h4 className={styles['carousel-title']}>Algunas de las materias que encuentras disponibles en nuestro sitio</h4>
      <div className={styles['carousel-cards']}>
        {[0, 1, 2].map((index) => {
          const subjectIndex = (currentIndex + index) % subjects.length;
          const subject = subjects[subjectIndex];

          return (
            <div key={index} className={styles['card']} onClick={() => handleCardClick(subject.name)}>
              <img src={subject.imageUrl} alt={subject.name} className={styles['card-image']}/>
              <div className={styles['card-text']}>
                <p>{subject.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <button onClick={handlePrevSlide}>&lt;&lt;</button>
      <button onClick={handleNextSlide}>&gt;&gt;</button> */}
    </div>
  );
};

export default Carousel;
