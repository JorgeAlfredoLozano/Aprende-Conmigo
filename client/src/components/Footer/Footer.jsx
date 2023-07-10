// import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () =>{

    return(
        <div  className={style.container}>
        <footer className={style.nav}>
             <p >© 2023 Aprende Conmigo. Todos los derechos reservados. &nbsp; &nbsp; &nbsp; Contacto: info@example.com</p>
        </footer>    
        </div>
    )
}

export default Footer;