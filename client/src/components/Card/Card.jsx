import style from "./Cards.module.css";

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