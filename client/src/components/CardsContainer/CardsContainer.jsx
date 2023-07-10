import { useState } from "react";
import style from "./CardsContainer.module.css";
import { useSelector } from "react-redux";
import Card from "./Card"; // Importa el componente "Card" necesario

const CardsContainer = () => {
 
  
//______________monta-actualiza-desmonta_____________________________________________________________
//ciclos de vidas de este component particular
// useEffect(()=>{
//   dispatch(cards) //--> montaje
  
  // return()=>{
  //   dispatch(clear())  //--> Limpieza | desmonta
  // }
  },[dispatch]); //--> cada vez que se actualiza algo de getAllGames

//useSelector--> estate global

  
  return (
    
    <div  className={styles.cardContainer}>
      
      {dataCards.map((card) => (
        <div key={card.id} className={styles.lasCards}>
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
<<<<<<< HEAD
=======
// /* eslint-disable react/prop-types */
// import Card from "../Card/Card";
// import stylesCardsContainer from "./CardsContainer.module.css";

// const CardsContainer = ({currentCountries}) => {
//   return (
//     <div className={stylesCardsContainer.div}>
//       {currentCountries?.map(country => {
//         return (
//           <Card
//             key={country.id}
//             id={country.id}
//             created={country.created}
//             flag={country.flag}
//             name={country.name}
//             continent={country.continent}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default CardsContainer;


import {useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { useState } from "react";
import style from "./Filtrado.module.css";
import { orderCards, filterCardGenres, getAllGenres, sortRating, filterGames } from "../../redux/actions/actions";
import { useEffect } from "react";


const Filtrado = () =>{
  const dispatch = useDispatch()
  const allGenres = useSelector((state) => state.genres); //---> stado global todos los genres


//__________MONTAJE_______________________________
  useEffect(() => {
    dispatch(getAllGenres()); // Despacha la acción para obtener los géneros
   }, [dispatch]);

  //______FN HANDLERS___________________
  const handlerFilterGenres = (event)=>{
   const seleccionado= event.target.value  // --> value
  dispatch(filterCardGenres(seleccionado))// Envía los géneros seleccionados a la acción

    console.log("parametro que le envio a mi action ------->", seleccionado)
   }

//--------------------------------
  const handlerOrder= (event)=>{
    const valor= event.target.value
    dispatch(orderCards(valor))

    // console.log(valor)
    }
//____________FN RATING_________________
function handleSortRating(evento) { 
  evento.preventDefault();
  dispatch(sortRating(evento.target.value))
  // dispatch(getAllGenres())
}  

//__________FN GAMES API O BDD___________
function handleFilterGames(event) {
  event.preventDefault();
  dispatch(filterGames(event.target.value))
  console.log("que elige el cliente -->", event.target.value)
  // setCurrentPage(1)
}


//______________________________________________________________________________________
  return(
    <div className={style.barra}>
          <select  onChange={handlerOrder} className={style.buttonSelect}> 
                <option >Orden alfabetico</option>   
                <option value={"A"} >A-Z</option>
                <option value={"D"} >Z-A</option>
            </select>
            

            <select onChange={handlerFilterGenres} className={style.buttonSelect} >
            <option>Orden por Genero</option>
                {allGenres && allGenres.map((genre)=>(
                  <option key={genre.id} value={genre.name}>
                    {genre.name} 
                  </option>
                 
                ))}
                <option value={"Todos"}> Todos </option>
               
            </select>


            <select onChange={handleFilterGames} className={style.buttonSelect}>    
                <option value={"ALL"} >Todos</option>
                <option value={"BDD"} >Creados</option>
                <option  value={"API"}>Existentes</option>
            </select>
          


            <select onChange={handleSortRating} className={style.buttonSelect}>    
                <option value={"Orden Rating"} >Orden Rating</option>
                <option  value={"Menor Rating"}>Menor Rating</option>
                <option value={"Mayor Rating"}>Mayor Rating</option>
            </select>
          


       </div>
  )           


}

export default Filtrado;
>>>>>>> 38e680a28f01b3201d08e185bdc78dc172f53258
=======
>>>>>>> 9742b6adbdecbe6dbe01c09813a7be387fe62144
