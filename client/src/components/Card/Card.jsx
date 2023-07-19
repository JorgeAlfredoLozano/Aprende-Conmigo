import style from "./Cards.module.css";
import { addFav, remove_fav } from "../../Redux/actions";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';




const Card = ({id, title, value, lesson, about_class, about_teacher, grade}) => {

  const localStorageContent = localStorage.getItem("cachedUser");
  const  parser  = JSON.parse(localStorageContent);
  const user_id = parser.id;

  const dispatch= useDispatch()
 //console.log("los aidis ->", "usuario ->", user_id, "publi ->", id)//todo oka
    //_________________________________________________
    const [isFav, setIsfav] = useState(false);

    const handleFavorite= ()=>{  //esta fn maneja los botones click o no click?
      //este id es el id de la card
      
      if (isFav) {
        setIsfav(false) 
        // remove_fav(id)}
      }
     else {
        setIsfav(true) 
        dispatch(addFav(id, user_id))
     }
      };
      // console.log("estado local isFav ->", isFav)

  // useEffect(() => {
  //   if (isFav) {
  //     dispatch(
  //       addFav({ id, user_id})
  //     );
  //   }
  // }, [dispatch, id, user_id]);
   
  
    //________________________________________________ 

    return(
      <div className={style.card_publication}>

      <div className={style.favoriteButton} onClick={handleFavorite}>
        {isFav ? "❤️" : "🤍"}
      </div>

 <NavLink to={`/anuncio/${id}`} className={style.details_link}>
      <h4 className={style.title}>{title}</h4>
      <h5 className={style.lesson}>{lesson}</h5>
      <h6 className={style.grade}>{grade.split(',').join(' - ')}</h6>
      <div className={style.abouts}>
      <h6 className={style.about_class}>{about_class}</h6>
      </div>
      <div className={style.abouts}>
      <h6 className={style.about_teacher}>{about_teacher}</h6>
      </div>
      <div className={style.contvalue}>
      <h6 className={style.value}>💲{value}💸</h6>
      </div>
 </NavLink>

    </div>
    )
  }
  
  export default Card;