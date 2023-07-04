// import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () =>{

    return(
        <div  className={style.container}>
         <footer className={style.nav}>
    <p>© 2023 Mi empresa. Todos los derechos reservados.</p>
    <p>Contacto: info@example.com</p>
  </footer>    
        </div>
    )
}

export default Footer;