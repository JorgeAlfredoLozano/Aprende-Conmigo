import styles from "./Cards.module.css";
// import {Link} from "react-router-dom";

//este tipo de component es un down por que es un component presentacional, no tiene una carga como tal mas que solo mostrar algo, osea no maneja logica en si.
//cada componente independientemente de su trabajo, tiene la posibilidad de manejar un estado local propio suyo, que es para trabajar su propio cuerpo.
const Card = ({id,
  title,
  aboutClass,
  aboutTeacher,
  value,
  publiImage,
  grade,
  lesson})=>{

    return(
      <div className={styles.card}>

        {/* <Link to={`/detail/${id}`}></Link> <-- si quiero que me lleve al details */}
        <h6>{id}</h6>
        <h6>{title}</h6>       
        <h6>{aboutClass}</h6>
        <h6>{aboutTeacher}</h6>
        <h6>{value}</h6>
        <h6>{publiImage}</h6>
        <h6>{grade}</h6>
        <h6>{lesson}</h6>
         
         {/* _______tiene foto?_______________________________________________________________
         <div className={style.imagen}>  {image? (<img src={image} alt="" width='200px' height='200px' />)  :
           (< img src="https://cdn.pixabay.com/photo/2021/05/06/14/51/gamepad-6233583_960_720.png"
              alt="Not Found"
              width="350px"
              height="200px"  />  )}
        </div>
        ____________________________________________________________________________________ */}
       
      </div>
    )
  }
  
  export default Card;