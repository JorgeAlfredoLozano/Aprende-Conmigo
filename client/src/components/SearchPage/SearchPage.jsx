import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // Importamos useParams para acceder a los parámetros de la URL
import style from './SearchPage.module.css';
import GeneralFilters from '../GeneralFilters/GeneralFilters';
import CardsContainer from '../CardsContainer/CardsContainer';

const SearchPage = () => {
  const [filtro, setFiltro] = useState('');
  const [precio, setPrecio] = useState(''); // Seteo estado para filtro por precio

  // Obtenemos el parámetro "lesson" de la URL
  const { lesson: lessonParam } = useParams();

  // Estado local para mantener el valor de "lesson"
  const [lesson, setLesson] = useState('');

  // Establecemos el estado de "lesson" con el valor recibido por parámetro al cargar la página
  useEffect(() => {
    if (lessonParam) {
      setLesson(lessonParam);
    }
  }, [lessonParam]);

  // Función para actualizar el estado local de "lesson" cuando se cambie desde GeneralFilters
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
            setLesson={updateLesson} // Pasamos la función para actualizar el estado local
            setPrecio={setPrecio}
          />
        </div>
        <div className={style.busqueda}>
          <CardsContainer filtro={filtro} lesson={lesson} precio={precio} />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
