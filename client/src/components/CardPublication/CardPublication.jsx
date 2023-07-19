import style from "./CardPublication.module.css"
import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateAnuncio } from "../../Redux/actions";
import { NavLink } from "react-router-dom";

const CardPublication = ({ title, value, lesson, about_class, about_teacher, grade, status, id }) => {
  const [isMostrar, setIsMostrar] = useState(status);
  const dispatch = useDispatch();
  const email = localStorage.getItem('currentUser');

  useEffect(() => {
    const aux = { status: isMostrar };
    dispatch(updateAnuncio(id, aux));
  }, [isMostrar, id]);

  const click = (event) => {
    event.preventDefault();
    setIsMostrar(!isMostrar);
  }

  return (
    <div className={`${style.card_publication} ${status === false ? style.cardstatusfalse : style.card_publication}`}>
      <div className={style.boxtitulo}>
      <h4 className={`${style.title} ${status === false ? style.titlefalse : style.title}`}>{title}</h4>
      <h5 className={`${style.lesson} ${status === false ? style.lessonfalse : style.lesson}`}>{lesson}</h5>
      <h6 className={`${style.grade} ${status === false ? style.gradefalse : style.grade}`}>{grade.split(',').map((grade) => <p className={style.p}>{grade}</p>)}</h6>
      </div>
      <div  className={style.boxtexto}>
        <div className={style.about1}>
      <h6 className={`${style.about_class} ${status === false ? style.about_classfalse : style.about_class}`}>{about_class}</h6>
        </div>
        <div className={style.about2}>
      <h6 className={`${style.about_teacher} ${status === false ? style.about_teacherfalse : style.about_teacher}`}>{about_teacher}</h6>
        </div>
      </div>
      <div className={style.buttons}>
      <h6 className={`${style.value} ${status === false ? style.valuefalse : style.value}`}>${value}</h6>
      <NavLink to={`/detail/${id}`} className={style.editar}><button>Editar</button></NavLink>
      <button onClick={click}>{isMostrar ? "Mostrar" : "No Mostrar"}</button>
      </div>
    </div>
  );
};

export default CardPublication;
