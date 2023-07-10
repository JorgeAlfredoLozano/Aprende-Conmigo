import styles from "./Cards.module.css";
// import {Link} from "react-router-dom";

//este tipo de component es un down por que es un component presentacional, no tiene una carga como tal mas que solo mostrar algo, osea no maneja logica en si.
//cada componente independientemente de su trabajo, tiene la posibilidad de manejar un estado local propio suyo, que es para trabajar su propio cuerpo.
const Card = ({id, name, certificate, email})=>{

    return(
      <div className={styles.card}>

        {/* <Link to={`/detail/${id}`}></Link> <-- si quiero que me lleve al details */}
        <h3>{id}</h3>
        <h2>{name}</h2>
        <h2>{email}</h2>
        <h2>{certificate}</h2>

         
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