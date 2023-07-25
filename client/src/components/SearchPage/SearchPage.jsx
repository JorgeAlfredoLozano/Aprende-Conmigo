import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './SearchPage.module.css';
import GeneralFilters from '../GeneralFilters/GeneralFilters';
import CardsContainer from '../CardsContainer/CardsContainer';
<<<<<<< HEAD
=======
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'; // Reemplaza la ruta con la ubicación correcta del componente LoadingAnimation
>>>>>>> aafe7807b8685c3b4013083c344c2714acef8042

const SearchPage = () => {
  const [filtro, setFiltro] = useState('');
  const [precio, setPrecio] = useState('');
  const { lesson: lessonParam } = useParams();
  const [lesson, setLesson] = useState('');
<<<<<<< HEAD
=======
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga
>>>>>>> aafe7807b8685c3b4013083c344c2714acef8042

  useEffect(() => {
    // Verificamos si lessonParam es igual a 'todo'
    if (lessonParam && lessonParam.toLowerCase() === 'todo') {
<<<<<<< HEAD
      setLesson(null); // Si es así, seteamos lesson en null para mostrar todos los resultados
    } else if (lessonParam) {
      setLesson(lessonParam);
    }
=======
      setLesson('');
    } else if (lessonParam) {
      setLesson(lessonParam);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
>>>>>>> aafe7807b8685c3b4013083c344c2714acef8042
  }, [lessonParam]);

  const updateLesson = (newLesson) => {
    setLesson(newLesson);
  };

  return (
    <div className={style.body}>
      <div className={style.container}>
        <div className={style.contenedorBusqueda}>
          <GeneralFilters
            className={style.filters}
            filtro={filtro}
            setFiltro={setFiltro}
            lesson={lesson}
            setLesson={updateLesson}
            setPrecio={setPrecio}
          />
        </div>
        <div className={style.busqueda}>
<<<<<<< HEAD
          <CardsContainer filtro={filtro} lesson={lesson} precio={precio} />
=======
          {isLoading ? <LoadingAnimation /> : <CardsContainer filtro={filtro} lesson={lesson} precio={precio} />}
          {/* Mostramos LoadingAnimation mientras isLoading sea true,
              y CardsContainer (contenido real) cuando isLoading sea false */}
>>>>>>> aafe7807b8685c3b4013083c344c2714acef8042
        </div>
      </div>
    </div>
  );
};

export default SearchPage;