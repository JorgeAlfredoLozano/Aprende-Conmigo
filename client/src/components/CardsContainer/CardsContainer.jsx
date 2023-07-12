// import { useState } from "react";
// import { useSelector } from "react-redux";
import Card from "../Card/Card"; 
// import dataCards from "./dataCards";
import publication from "../baseDeDatosGeneral/baseDeDatosPublication"
import styles from "./CardsContainer.module.css";
import {getUser} from "../../Redux/actions";


const CardsContainer = () => {
 
  
//______________monta-actualiza-desmonta_____________________________________________________________
// useEffect(()=>{
//   dispatch(getUser()) //--> montaje
  
//   // return()=>{
//   //   dispatch(clear())  //--> Limpieza | desmonta
//   // }
//   },[dispatch]); //--> cada vez que se actualiza algo de getAllGames


//useSelector--> estate global

  
  return (
    
    <div  className={styles.cardContainer}>
      
      {publication.map((card) => (
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

