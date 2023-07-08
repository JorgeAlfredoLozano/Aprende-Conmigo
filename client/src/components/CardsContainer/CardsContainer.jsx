import { useState } from "react";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";
import Card from "./Card"; // Importa el componente "Card" necesario

const CardsContainer = () => {
  // Array de tarjetas hardcoded
  const cards = 
    {
      id: 10,
      name: "ivana",
      email: "ia.carmona@hotmail.com",
      date: "7/7/2023",
      gender: "femenino",
      phone: 2664643646,
      assets: "no hay",
      certificate: "ok"
    }
    // Agrega más tarjetas si lo deseas
  ;
//______________monta-actualiza-desmonta_____________________________________________________________
//ciclos de vidas de este component particular
useEffect(()=>{
  dispatch(cards) //--> montaje
  
  // return()=>{
  //   dispatch(clear())  //--> Limpieza | desmonta
  // }
  },[dispatch]); //--> cada vez que se actualiza algo de getAllGames


  
  return (
    <div>
      {cards.map((card) => (
        <div key={card.id} className={style.lasCards}>
          <Card
            id={card.id}
            name={card.name}
            email={card.email}
            date={card.date}
            gender={card.gender}
            phone={card.phone}
            assets={card.assets}
            certificate={card.certificate}
          />
        </div>
      ))}
    </div>
  );
};

export default CardsContainer;
