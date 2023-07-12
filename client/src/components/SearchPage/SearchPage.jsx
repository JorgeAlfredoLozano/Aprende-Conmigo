import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import style from './SearchPage.module.css';
import GeneralFilters from '../GeneralFilters/GeneralFilters';
import CardsContainer from '../CardsContainer/CardsContainer';
import SearchBar from '../SearchBar/SearchBar';
import Details from '../Detail/Details';

const SearchPage = ({ searchValue }) => {
  const [filtro, setFiltro] = useState("");
  const currentPath = window.location.pathname;

  let renderedComponent = null;

  if (currentPath === '/busqueda') {
    renderedComponent = <CardsContainer filtro={filtro} />;
  } else if (currentPath.startsWith('/details/')) {
    const id = currentPath.split('/details/')[1];
    renderedComponent = <Details data={cardsData} id={id} />;
  }

  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.search}>
        <h1 className={style.titulo}>Ruta de búsqueda</h1>
        <GeneralFilters filtro={filtro} setFiltro={setFiltro} />
        <div className={style.busqueda}>
          <SearchBar />
          {renderedComponent}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;

