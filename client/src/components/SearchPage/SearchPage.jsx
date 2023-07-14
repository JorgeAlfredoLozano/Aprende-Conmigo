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

<<<<<<< HEAD
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
=======
  return (
    <div className={style.body}>
      <NavBar />
      <div className={style.container}>
        <h1 className={style.titulo}>Ruta de búsqueda</h1>
        <SearchBar/>
        <GeneralFilters className={style.filters} filtro={filtro} setFiltro={setFiltro} lesson={lesson} setLesson={setLesson}/>
>>>>>>> 58375bbc69c5c49eb9cb295d70c1c324e2f2d397
        <div className={style.busqueda}>
          <CardsContainer filtro={filtro} lesson={lesson}/>
        </div>
      </div>
<<<<<<< HEAD
      <Footer />
=======
      <Footer/>
>>>>>>> 58375bbc69c5c49eb9cb295d70c1c324e2f2d397
    </div>
  );
};

export default SearchPage;
