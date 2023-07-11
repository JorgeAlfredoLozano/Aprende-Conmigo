import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import style from './SearchPage.module.css';
import GeneralFilters from '../GeneralFilters/GeneralFilters';
import CardsContainer from '../CardsContainer/CardsContainer';
import SearchBar from '../SearchBar/SearchBar';
import Prueba from "../prueba/prueba";

const SearchPage = ({ searchValue }) => {
  const [filtro, setFiltro] = useState('');

  return (
    <div className={style.body}>
      <NavBar />
      <div className={style.search}>
        <SearchBar />
      </div>
        <h1 className={style.titulo}>Ruta de búsqueda</h1>
        <div className={style.container}>
          <GeneralFilters filtro={filtro} setFiltro={setFiltro} />
        </div>
        <div className={style.busqueda}>
          <CardsContainer filtro={filtro} />
      </div>
        <Footer />
    </div>
  );
};

export default SearchPage;
