// import styles from "./Cards.module.css";
// import {Link} from "react-router-dom";

//este tipo de component es un down por que es un component presentacional, no tiene una carga como tal mas que solo mostrar algo, osea no maneja logica en si.
//cada componente independientemente de su trabajo, tiene la posibilidad de manejar un estado local propio suyo, que es para trabajar su propio cuerpo.
const CardPublication = ({id,title,value, lesson})=>{
   
    return(
      <div>
        <h6>{id}</h6>
        <h6>{title}</h6>       
        <h6>{value}</h6>
        <h5>{lesson}</h5>
      </div>
    )};
  
  export default CardPublication;