//este tipo de component es un down por que es un component presentacional, no tiene una carga como tal mas que solo mostrar algo, osea no maneja logica en si.
//cada componente independientemente de su trabajo, tiene la posibilidad de manejar un estado local propio suyo, que es para trabajar su propio cuerpo.
import { useState } from "react";
import { add_fav, remove_fav } from "../../Redux/actions";
import style from "./CardPublication.module.css"

const CardPublication = ({ id, title, value, lesson, about_class, about_teacher, grade }) => {
  //solamente mostrar 2 props(tittle, lesson, about)  about con ... suspensivo
  //dinero en la esquinita como super profe
  const [isFav, setIsfav] = useState(false);
  const email = localStorage.getItem('currentUser');
  //_________________________________________________
  const handleFavorite= ()=>{  //esta fn maneja los botones
    if (isFav) {   //si es true
       setIsfav(false) //se pone en false
       remove_fav(id)}  //este id se elimina con la fn de la action
    
    else {            //si es false
       setIsfav(true) //se pone en true
       add_fav({id, title, value, lesson, about_class, about_teacher, grade, email})
    }   //a la fn de la action le paso los parametros
 }
  //________________________________________________ 

  return (
    <div className={style.card_publication}>
       
        <button onClick={handleFavorite} className={style.botonFav}>❤️</button>
        <button onClick={handleFavorite} className={style.botonFav}>🤍</button>
         
      <h4 className={style.title}>{title}</h4>
      <h5 className={style.lesson}>{lesson}</h5>
      <h6 className={style.about_class}>{about_class}</h6>
      <h6 className={style.about_teacher}>{about_teacher}</h6>
      <h6 className={style.grade}>{grade}</h6>
      <h6 className={style.value}>💲{value}💸</h6>
    </div>
  );
};

export default CardPublication;
