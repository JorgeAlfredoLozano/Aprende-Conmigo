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
  }, [dispatch]);

  useEffect(() => {
    let filteredData = datoPublication.data;
    
    if (filtro) {
      filteredData = filteredData.filter(card => card.grade.toLowerCase().includes(filtro.toLowerCase()));
    }

    if (lesson) {
      filteredData = filteredData.filter(card => card.Lessons.some(lessonItem => lessonItem.lesson_name.toLowerCase().includes(lesson.toLowerCase())));
    }

    setFilteredCards(filteredData);
  }, [filtro, lesson, datoPublication.data]);

  return (
    <div className={style.cardContainer}>
<<<<<<< HEAD
      {filteredCards &&
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
        )}
    </div>
=======
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
>>>>>>> 58375bbc69c5c49eb9cb295d70c1c324e2f2d397
  );
};

export default CardsContainer;
