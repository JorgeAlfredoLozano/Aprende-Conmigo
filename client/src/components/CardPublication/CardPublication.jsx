import style from "./CardPublication.module.css"
import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPublication, updateAnuncio } from "../../Redux/actions"; 
const CardPublication = ({ title, value, lesson, status, id, setRenderUpdatePubli, formId }) => {
  const [isMostrar,setIsMostrar]=useState(status)
  const dispatch = useDispatch();
  //const email = localStorage.getItem('currentUser');

  useEffect(() => {
    const aux = { status: isMostrar };
    dispatch(updateAnuncio(id, aux));
    // dispatch(getAllPublication(email)) //analizar
    if(status !== isMostrar)
    setTimeout(()=>{
      window.location.reload()
    },200)
  }, [dispatch, isMostrar, id]);

    const click = (event) => {
    event.preventDefault();
    setIsMostrar(!isMostrar);
 };

  const cardId = () => {
    const data = id;
    formId(data);
  };

  const renderFormUpdate = () => {
  setRenderUpdatePubli(true);
  cardId();
  };

  return (
    <div className={`${style.card_publication} ${status === false ? style.cardstatusfalse : style.card_publication}`}>
      <div className={style.boxtitulo}>
      <h4 className={`${style.title} ${status === false ? style.titlefalse : style.title}`}>{title}</h4>
      <h5 className={`${style.lesson} ${status === false ? style.lessonfalse : style.lesson}`}>{lesson}</h5>
      <h6 className={`${style.value} ${status === false ? style.valuefalse : style.value}`}>${value}</h6>
      <h4 className={`${style.title} ${status === false ? style.titlefalse : style.title}`}>{title}</h4>
      <h5 className={`${style.lesson} ${status === false ? style.lessonfalse : style.lesson}`}>{lesson}</h5>
      <h6 className={`${style.value} ${status === false ? style.valuefalse : style.value}`}>${value}</h6>
      </div>
      <div className={style.buttons}>
      <button onClick={renderFormUpdate} className={style.editar}>Editar</button>
      <button className={style.editar} onClick={click}>{status ? "Mostrar" : "No Mostrar"}</button>
      </div>
    </div>
  );
};

export default CardPublication;
