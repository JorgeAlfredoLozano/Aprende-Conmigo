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
      setLesson(null); // Si es así, seteamos lesson en null para mostrar todos los resultados
    } else if (lessonParam) {
      setLesson(lessonParam);
    }

    // Simulamos una carga asincrónica aquí (puedes reemplazar esto con tus operaciones reales)
    setTimeout(() => {
      setIsLoading(false); // Cambiamos el estado a falso para mostrar el contenido real
    }, 1500); // 2000 ms = 2 segundos (esto es solo un ejemplo, ajusta el tiempo según tus necesidades)
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
          {isLoading ? <LoadingAnimation /> : <CardsContainer filtro={filtro} lesson={lesson} precio={precio} />}
          {/* Mostramos LoadingAnimation mientras isLoading sea true,
              y CardsContainer (contenido real) cuando isLoading sea false */}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;