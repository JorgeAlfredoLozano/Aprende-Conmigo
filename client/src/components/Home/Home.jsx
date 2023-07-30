import style from './Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import img1 from '../../assets/imagenes/estudiantes-universitarios.png';
import img2 from '../../assets/imagenes/matematicas.jpg';
import img3 from '../../assets/imagenes/clases.png';
import ToSearchPage from './ToSearchPage';
import Steps from './Steps';
import Carrousel from './Carrousel'
import { useNavigate } from 'react-router';
import { useEffect, useRef } from 'react';

const Home = () => {
  const navigate = useNavigate();

  // Referencias para los componentes Steps y Carrousel
  const stepsRef = useRef(null);
  const carrouselRef = useRef(null);

  const containerStyle1 = {
    backgroundImage: `url(${img1})`,
  };

  const containerStyle2 = {
    backgroundImage: `url(${img2})`,
  };

  const containerStyle3 = {
    backgroundImage: `url(${img3})`,
  };

  const handleNavigateSearchPage = () => {
    navigate(`/busqueda/todo`);
  };

  useEffect(() => {

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    };

    // Función de devolución de llamada para el Intersection Observer
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Cuando el componente Steps es visible, se agrega la transición de opacidad
          if (entry.target === stepsRef.current) {
            entry.target.style.opacity = 1;
            entry.target.style.transition = 'opacity 1s linear';
          }
          // Cuando el componente Carrousel es visible, se agrega la transición de opacidad
          else if (entry.target === carrouselRef.current) {
            entry.target.style.opacity = 1;
            entry.target.style.transition = 'opacity 1s linear';
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (stepsRef.current) {
      observer.observe(stepsRef.current);
    }
    if (carrouselRef.current) {
      observer.observe(carrouselRef.current);
    }

    return () => {
      if (stepsRef.current) {
        observer.unobserve(stepsRef.current);
      }
      if (carrouselRef.current) {
        observer.unobserve(carrouselRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className={style.body}>
        <div className={style.imagenes}>
          <div style={containerStyle1} className={style.img1}></div>
          <div style={containerStyle2} className={style.img2}></div>
          <div style={containerStyle3} className={style.img3}></div>
        </div>
        <div className={style.search}>
          <p className={style.texto}>¡Encuentra la clase que buscas entre nuestros profesores online!</p>
          <ToSearchPage />
          <button onClick={handleNavigateSearchPage}>Ver todos los cursos</button>
        </div>
      </div>
      <div ref={stepsRef} style={{ opacity: 0 }}>
        <Steps />
      </div>
      <div ref={carrouselRef} style={{ opacity: 0 }}>
        <Carrousel />
      </div>
    </div>
  );
};

export default Home;