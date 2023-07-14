import style from "./NavBar.module.css";
import Login from "../Login/Login";
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import loguito from '../../assets/isologo.png';
import faqicon from '../../assets/faq-icon.png'
>>>>>>> 58375bbc69c5c49eb9cb295d70c1c324e2f2d397

const NavBar = () =>{
    return(
           
        <div  className={style.container}>
            <Link to='/'>
<<<<<<< HEAD
            <h2 className={style.logo}>👩‍💻</h2>
            </Link>
          <Link to="/Preguntas" >
           <img src="https://cdn-icons-png.flaticon.com/128/3524/3524344.png" className={style.pepito}/>
=======
            <img className={style.logo} src={loguito}/>
            </Link>
          <Link to="/Preguntas" >
           <img src={faqicon} className={style.faq}/>
>>>>>>> 58375bbc69c5c49eb9cb295d70c1c324e2f2d397
          </Link>
            <Login/>
        </div>
    )}
export default NavBar;