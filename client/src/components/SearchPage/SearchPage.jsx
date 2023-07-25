import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import style from './SearchPage.module.css';
import GeneralFilters from '../GeneralFilters/GeneralFilters';
import CardsContainer from '../CardsContainer/CardsContainer';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'; // Reemplaza la ruta con la ubicación correcta del componente LoadingAnimation

const SearchPage = () => {
  const [filtro, setFiltro] = useState('');
  const [precio, setPrecio] = useState('');
  const { lesson: lessonParam } = useParams();
  const [lesson, setLesson] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    // Verificamos si lessonParam es igual a 'todo'
    if (lessonParam && lessonParam.toLowerCase() === 'todo') {
      setLesson('');
    } else if (lessonParam) {
      setLesson(lessonParam);
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, [lessonParam]);

  const updateLesson = (newLesson) => {
    setLesson(newLesson);
  };

  return (
    <div className={style.body}>
      {isLoading ? <LoadingAnimation /> :
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
          <CardsContainer filtro={filtro} lesson={lesson} precio={precio} />
        </div>
      </div>}
    </div>
  );
};

export default SearchPage;