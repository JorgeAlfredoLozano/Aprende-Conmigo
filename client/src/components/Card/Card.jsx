import style from "./Cards.module.css";
import { getAssetsById , remove_fav, addFav} from "../../Redux/actions";
import { useEffect, useState } from "react";
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


const Card = ({id, title, value, lesson, grade, userId , isFavo, assets}) => {
  const [data, setData] = useState();
  const [isFav, setIsfav] = useState(false);

  const dispatch= useDispatch()
  const myFavorites = useSelector((state) => state.myFavorites);

  const localStorageContent = localStorage.getItem("cachedUser");
  const  parser  = JSON.parse(localStorageContent);
  const user_id = parser.id;

  useEffect(() => {
    getAssetsById(userId)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

      //MANEJA LOS FAVORITOS PARA QUE AL INGRESAR NUEVAMENTE ESTE CLICKEADOS LOS FAVORITOS QUE ESTABAN
      useEffect(() => {
        if (!isFavo) {
          setIsfav( myFavorites.some((fav) =>  fav.PublicationId === id ))
        } else {
          setIsfav(true)
        }
        
     }, [myFavorites, id, isFav]);

  const containerStyle = {
    backgroundImage: data ? `url(${data.assets})` : "none",
  }; 

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

  return (
    <div className={style.card_publication}>      
      <div className={style.favoriteButton} onClick={(event) =>handleFavorite(event)}>
        {isFav ? "❤️" : "🤍"}
      </div>
      <NavLink to={`/anuncio/${id}`} className={style.details_link}>
      <div className={style.assets} style={containerStyle}><h4 className={style.title}>{title}</h4></div>
      <div className={style.texto}>
          {/* <h4 className={style.title}>{title}</h4> */}
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