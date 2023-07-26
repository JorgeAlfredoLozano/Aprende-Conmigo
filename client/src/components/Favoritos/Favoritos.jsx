import Card from "../Card/Card";
import { getAllFav} from "../../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import style from "./Favoritos.module.css";



const Favoritos = () => {
  const dispatch= useDispatch()
  const localStorageContent = localStorage.getItem("cachedUser");
  const  parser  = JSON.parse(localStorageContent);
  const user_id = parser.id;
   
  const myFavorites = useSelector((state) => state.myFavorites);

  useEffect(()=>{
    dispatch(getAllFav(user_id))
  },[dispatch])
  
    return (
        <div className={style.cardContainer}>
         
      {myFavorites.length === 0 ? (
        <p>No tienes favoritos seleccionados.</p>
      ) : (
        <div className={style.card_publication}>
          {myFavorites?.map((fav) => (
            (fav.Publication &&
            <Card
              key={fav.Publication.id}
              id={fav.Publication.id}
              userId={fav.Publication.UserId}
              title={fav.Publication.title}
              about_class={fav.Publication.about_class}
              about_teacher={fav.Publication.about_teacher}
              grade={fav.Publication.grade}
              lesson={fav.Publication.lesson_name}  
              value={fav.Publication.value}
              isFavo={true}
            />
          ) ))}
        </div>
      )}
      
      </div>
    )
}

export default Favoritos;