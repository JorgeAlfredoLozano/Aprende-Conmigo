import React, { useState } from 'react';
import style from './SearchPage.module.css';
import GeneralFilters from '../GeneralFilters/GeneralFilters';
import CardsContainer from '../CardsContainer/CardsContainer';


const SearchPage = () => {
  const [filtro, setFiltro] = useState('');
  const [lesson, setLesson] = useState('');
  const [precio, setPrecio] = useState(''); // Seteo estado para filtro por precio
  return (
    <div className={style.body}>
      <div className={style.container}>
        <div className={style.contenedorBusqueda}>
        <GeneralFilters className={style.filters} 
        filtro={filtro} 
        setFiltro={setFiltro} 
        lesson={lesson} 
        setLesson={setLesson}
        setPrecio={setPrecio}
        />
        </div>
        <div className={style.busqueda}>
          <CardsContainer filtro={filtro} lesson={lesson} precio={precio}/>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
