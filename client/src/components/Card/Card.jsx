<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Cards.module.css";
=======
import style from "./Cards.module.css";
// import {Link} from "react-router-dom";
>>>>>>> 8a602ecb0563915129144d4343c089bef2b988f4

//este tipo de component es un down por que es un component presentacional, no tiene una carga como tal mas que solo mostrar algo, osea no maneja logica en si.
//cada componente independientemente de su trabajo, tiene la posibilidad de manejar un estado local propio suyo, que es para trabajar su propio cuerpo.
const Card = ({title, value, lesson, about_class, about_teacher, grade}) => {

    return(
      <div className={style.card_publication}>
      <h4 className={style.title}>{title}</h4>
      <h5 className={style.lesson}>{lesson}</h5>
      <h6 className={style.about_class}>{about_class}</h6>
      <h6 className={style.about_teacher}>{about_teacher}</h6>
      <h6 className={style.grade}>{grade}</h6>
      <h6 className={style.value}>💲{value}💸</h6>
    </div>
    )
  }
  
  export default Card;
