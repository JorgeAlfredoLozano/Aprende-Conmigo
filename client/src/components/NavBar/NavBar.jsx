import style from "./NavBar.module.css";
import Login from "../Login/Login";
import { Link } from 'react-router-dom';
import image from '../assets/imagenes/birrete.png'

const NavBar = () =>{
    return(
           
        <div  className={style.container}>
            <Link to='/'>
            <h2 className={style.logo}><img className={style.logo} src={image}/></h2>
            </Link>
          <Link to="/Preguntas" >
           <img src="https://cdn-icons-png.flaticon.com/128/3524/3524344.png" className={style.faq}/>
          </Link>
            <Login/>
        </div>
    )}
export default NavBar;