import style from "./CardPublication.module.css"

const CardPublication = ({ title, value, lesson, about_class, about_teacher, grade }) => {
 
  //solamente mostrar 2 props(tittle, lesson, about)  about con ... suspensivo
  //dinero en la esquinita como super profe

  return (
    <div className={style.card_publication}>
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
