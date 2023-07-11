import styles from "./Cards.module.css";

const Card = ({id,title,
  aboutClass,
  aboutTeacher,
  value,
  publiImage,
  grade,
  lesson})=>{

    return(
      <div className={styles.card}>

        <h6>{id}</h6>
        <h6>{title}</h6>
        <h6>{aboutClass}</h6>
        <h6>{aboutTeacher}</h6>
        <h6>{value}</h6>
        <h6>{publiImage}</h6>
        <h6>{grade}</h6>
        <h6>{lesson}</h6>
      </div>
    )
  }
  
  export default Card;