import style from "./CardPublication.module.css"
import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateAnuncio } from "../../Redux/actions";

const CardPublication = ({ title, value, lesson, about_class, about_teacher, grade, status, id }) => {
  const [isMostrar, setIsMostrar] = useState(status);
  const dispatch = useDispatch();
  const email = localStorage.getItem('currentUser');

  useEffect(() => {
    const aux = { status: isMostrar };
    dispatch(updateAnuncio(id, aux));
  }, [isMostrar , id]);

  const click = (event) => {
    event.preventDefault();
    setIsMostrar(!isMostrar);
  }

  return (
    <div className={style.card_publication}>
      <h4 className={style.title}>{title}</h4>
      <h5 className={style.lesson}>{lesson}</h5>
      <h6 className={style.about_class}>{about_class}</h6>
      <h6 className={style.about_teacher}>{about_teacher}</h6>
      <h6 className={style.grade}>{grade}</h6>
      <h6 className={style.value}>💲{value}💸</h6>
      <button onClick={click}>{isMostrar ? "Mostrar" : "No Mostrar"}</button>
    </div>
  );
};

export default CardPublication;
