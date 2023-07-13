import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import style from './SearchPage.module.css';
import GeneralFilters from '../GeneralFilters/GeneralFilters';
import CardsContainer from '../CardsContainer/CardsContainer';
import SearchBar from '../SearchBar/SearchBar';

const SearchPage = ({ searchValue }) => {
  const [filtro, setFiltro] = useState('');
  const [lesson, setLesson] = useState('')

  console.log(lesson)

  return (
    <div className={style.body}>
      <NavBar />
      <div className={style.search}>
        <SearchBar />
      </div>
      <div className={style.container}>
        <h1 className={style.titulo}>Ruta de búsqueda</h1>
        <GeneralFilters filtro={filtro} setFiltro={setFiltro} lesson={lesson} setLesson={setLesson}/>
        <div className={style.busqueda}>
          <CardsContainer filtro={filtro} lesson={lesson}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
