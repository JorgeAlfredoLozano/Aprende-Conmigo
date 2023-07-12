import React from 'react';
import Card from '../Card/Card';
import dataCards from './dataCards';
import styles from './CardsContainer.module.css';

const CardsContainer = ({ filtro }) => {
  const filteredCards = filtro ? dataCards.filter(objeto => objeto.grade === filtro) : dataCards;

  return (
    <div className={styles.cardContainer}>
      {filteredCards.map(card => (
        <div key={card.id} className={styles.lasCards}>
          <Card
            id={card.id}
            title={card.title}
            aboutClass={card.aboutClass}
            aboutTeacher={card.aboutTeacher}
            value={card.value}
            publiImage={card.publiImage}
            grade={card.grade}
            lesson={card.lesson}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;