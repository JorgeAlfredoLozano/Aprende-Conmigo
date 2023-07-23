import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { getAllAnuncios } from '../../Redux/actions';
import { NavLink } from 'react-router-dom';
import style from "./CardsContainer.module.css"

const CardsContainer = ({ filtro, lesson }) => {
  const dispatch = useDispatch();
  const datoPublication = useSelector((state) => state.allAnuncios);
  const [filteredCards, setFilteredCards] = useState([]);

  useEffect(() => {
    dispatch(getAllAnuncios());
    dispatch(getAllFav(user_id))
  }, [dispatch]);

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
  console.log(precio);
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
    <div className={style.cardContainer}>
      {filteredCards ? (
    filteredCards.map((card) =>
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
          />
        </NavLink>
      </div>
    )
  )
  ) : (
  <p>No se encontraron resultados</p>)}
  </div>
  );
};

export default CardsContainer;