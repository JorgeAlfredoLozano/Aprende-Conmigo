// import { useState } from "react";
// import { useSelector } from "react-redux";
import Card from "../Card/Card"; 
import dataCards from "./dataCards";
import styles from "./CardsContainer.module.css";


const CardsContainer = () => {
 
  return (
    
    <div  className={styles.cardContainer}>
      
      {dataCards.map((card) => (
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