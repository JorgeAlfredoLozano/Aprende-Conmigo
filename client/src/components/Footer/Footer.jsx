// import { Link } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () =>{

    return(
        <div  className={style.container}>
         <footer className={style.nav}>
    <p>© 2023 Aprende Conmigo. Todos los derechos reservados.</p>
    <p>Contacto: <a href="https://aprende-one.vercel.app/" style={{ color: "white" }}>aprendeconmigohenry@gmail.com</a></p>


  </footer>    
        </div>
    )
}

export default Footer;