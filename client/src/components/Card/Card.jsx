import style from "./Cards.module.css";
// import {Link} from "react-router-dom";

//este tipo de component es un down por que es un component presentacional, no tiene una carga como tal mas que solo mostrar algo, osea no maneja logica en si.
//cada componente independientemente de su trabajo, tiene la posibilidad de manejar un estado local propio suyo, que es para trabajar su propio cuerpo.
const Card = ({title, value, lesson, about_class, about_teacher, grade}) => {

    return(
      <div className={style.card_publication}>
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
    </div>
    )
  }
  
  export default Card;