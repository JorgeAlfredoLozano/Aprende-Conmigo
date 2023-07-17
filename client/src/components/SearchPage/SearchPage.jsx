import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import style from './SearchPage.module.css';
import GeneralFilters from '../GeneralFilters/GeneralFilters';
import CardsContainer from '../CardsContainer/CardsContainer';


const SearchPage = ({ searchValue }) => {
  const [filtro, setFiltro] = useState('');
  const [lesson, setLesson] = useState('')

  return (
    <div className={style.body}>
      <NavBar />
      <div className={style.container}>
        <GeneralFilters className={style.filters} filtro={filtro} setFiltro={setFiltro} lesson={lesson} setLesson={setLesson}/>
        <div className={style.busqueda}>
          <CardsContainer filtro={filtro} lesson={lesson}/>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default SearchPage;
