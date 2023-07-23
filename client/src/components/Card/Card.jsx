import style from "./Cards.module.css";
import { addFav, remove_fav, getAllFav } from "../../Redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from 'react-router-dom';




const Card = ({id, title, value, lesson, about_class, about_teacher, grade,isFavo}) => {
  
  const localStorageContent = localStorage.getItem("cachedUser");
  const  parser  = JSON.parse(localStorageContent);
  const user_id = parser.id;

  const dispatch= useDispatch()
  const myFavorites = useSelector((state) => state.myFavorites);
  
  const [isFav, setIsfav] = useState(false);


    //MANEJA LOS FAVORITOS PARA QUE AL INGRESAR NUEVAMENTE ESTE CLICKEADOS LOS FAVORITOS QUE ESTABAN
    useEffect(() => {
      if (!isFavo) {
        setIsfav( myFavorites.some((fav) =>  fav.PublicationId === id ))
      } else {
        setIsfav(true)
      }
      
   }, [myFavorites, id, isFav]);
 
  

    const handleFavorite= (event)=>{
        
        if(id){
        if (isFav === true) {
          setIsfav(false) 
          dispatch(remove_fav(id) )
          
        }
      else if (isFav === false) {
          setIsfav(true) 
          dispatch(addFav(id, user_id))}
         
      }
    }


    
  
    //________________________________________________ 

  return (
    <div className={style.card_publication}>

      <div className={style.favoriteButton} onClick={(event) =>handleFavorite(event)}>
        {isFav ? "❤️" : "🤍"}
      </div>

 <NavLink to={`/anuncio/${id}`} className={style.details_link}>
      <div className={style.assets} style={containerStyle}></div>
      <div className={style.texto}>
        <div className={style.titlecont}>
          <h4 className={style.title}>{title}</h4>
        </div>
        <div className={style.contlesson}>
          <h5 className={style.lesson}>{lesson}</h5>
          <h6 className={style.grade}>{grade.split(",").join(" - ")}</h6>
          <h6 className={style.value}>💲{value}💸</h6>
        </div>
      </div>
 </NavLink>

    </div>
  );
};

 
export default Card;

