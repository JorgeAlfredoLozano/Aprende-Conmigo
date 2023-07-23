import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { getAllAnuncios, getAllFav } from '../../Redux/actions';
import style from "./CardsContainer.module.css"

const CardsContainer = ({ filtro, lesson }) => {

  const localStorageContent = localStorage.getItem("cachedUser");
  const  parser  = JSON.parse(localStorageContent);
  const user_id = parser.id;

  const dispatch = useDispatch();
  const datoPublication = useSelector((state) => state.allAnuncios);
  const [filteredCards, setFilteredCards] = useState([]);
  
  const myFavorites = useSelector((state) => state.myFavorites);
  useEffect(() => {
    dispatch(getAllAnuncios());
    dispatch(getAllFav(user_id))
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
      {filteredCards ? (
    filteredCards.map((card) =>
    card.status && (
      <div key={card.id} className={style.card_container}>
       
          <Card
            id={card.id}
            title={card.title}
            value={card.value}
            lesson={card.Lessons[0].lesson_name}
            about_class={card.about_class}
            about_teacher={card.about_teacher}
            grade={card.grade}
          />
       
      </div>
    )
  )
  ) : (
  <p>No se encontraron resultados</p>)}
  </div>
  );
};

export default CardsContainer;
