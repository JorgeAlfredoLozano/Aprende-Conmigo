import style from "./NavBar.module.css";
import Login from "../Login/Login";
import { Link } from 'react-router-dom';
import loguito from '../../assets/logo-aprende.png';
import faqicon from '../../assets/faq-icon.png';

const NavBar = () =>{
    return(         
        <div className={style.container}>            
            <Link to='/'>
            <img className={style.logo} src={loguito}/>
            </Link>
            <Login/>
          <Link to="/Preguntas" >
           <img src={faqicon} className={style.faq}/>
          </Link>
        <Link to='/perfil/mensajes'>
        </Link>
        </div>
    )}
export default NavBar;