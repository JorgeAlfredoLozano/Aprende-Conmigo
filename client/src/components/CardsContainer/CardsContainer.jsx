import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { getAllAnuncios } from '../../Redux/actions';
import { NavLink } from 'react-router-dom';
import style from './CardsContainer.module.css';
import Paginado from '../Paginado/Paginado';

const CardsContainer = ({ filtro, lesson, precio }) => {

  const dispatch = useDispatch();
  const datoPublication = useSelector((state) => state.allAnuncios);
  const [filteredCards, setFilteredCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem('currentPage')) || 1
  );
  const anunciosPerPage = 12; //Numero de anuncios por página
  const indexLastAnuncio = currentPage * anunciosPerPage; //
  const indexOfFirstAnuncio = indexLastAnuncio - anunciosPerPage;

  useEffect(() => {
    dispatch(getAllAnuncios());
  }, [dispatch]);
  let filteredData = datoPublication.data || [];
  useEffect(() => {
  
    if(precio.value === 'ASC'){
      filteredData = filteredData.sort((a, b) => a.value - b.value);
      console.log(filteredData)
    }
    else if(precio.value === 'DESC'){
      filteredData = filteredData.sort((a, b) => b.value - a.value);
      console.log(filteredData)
    }

    if (filtro) {
      filteredData = filteredData.filter((card) =>
        card.grade.toLowerCase().includes(filtro.toLowerCase())
      );
    }

    if (lesson) {
      filteredData = filteredData.filter((card) =>
        card.Lessons.some((lessonItem) =>
          lessonItem.lesson_name.toLowerCase().includes(lesson.toLowerCase())
        )
      );
    }

    setFilteredCards(filteredData);
  }, [filtro, lesson, precio, datoPublication.data,filteredData]);

  /* PAGINADO */
  useEffect(() => {
    const storedCurrentPage = localStorage.getItem('currentPage');
    if (storedCurrentPage) {
      setCurrentPage(parseInt(storedCurrentPage));
      localStorage.removeItem('currentPage');
    }
  }, []);

  /* PAGINA ACTUAL */
  useEffect(() => {
    localStorage.setItem('currentPage', currentPage.toString());
  }, [currentPage]);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* PAGINADO */}
      {filteredCards &&
      <Paginado
        anunciosPerPage={anunciosPerPage}
        allAnuncios={filteredCards.length}
        paginado={paginado}
        currentPage={currentPage}
      />}

      {/* CARDS */}
      <div className={style.cardContainer}>
        {filteredCards.length !== 0 ? (
          filteredCards
            .slice(indexOfFirstAnuncio, indexLastAnuncio) // Mostrar solo las cartas de la página actual
            .map((card) =>
              card.status && (
                <div key={card.id} className={style.card_container}>
                  <NavLink to={`/anuncio/${card.id}`} className={style.details_link}>
                    <Card
                      id={card.id}
                      title={card.title}
                      value={card.value}
                      lesson={card.Lessons[0].lesson_name}
                      about_class={card.about_class}
                      about_teacher={card.about_teacher}
                      grade={card.grade}
                      userId={card.UserId}
                    />
                  </NavLink>
                </div>
              )
            )
        ) : (
          <>
          <p style={{paddingTop:"25%", paddingBottom:"15%", gridColumn:"2", display:"flex", justifyContent:"center"}}>No se encontraron resultados.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default CardsContainer;