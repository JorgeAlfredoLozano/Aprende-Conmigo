import style from "./NavBar.module.css";
import Login from "../Login/Login";
import { Link } from 'react-router-dom';
import loguito from '../../assets/isologo.png';
import faqicon from '../../assets/faq-icon.png'

const NavBar = () =>{
    return(
           
        <div  className={style.container}>
            <Link to='/'>
            <img className={style.logo} src={loguito}/>
            </Link>
          <Link to="/Preguntas" >
           <img src={faqicon} className={style.faq}/>
          </Link>
            <Login/>
        </div>
    )}
export default NavBar;