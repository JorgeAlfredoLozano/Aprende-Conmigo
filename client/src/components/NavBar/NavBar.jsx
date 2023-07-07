import style from "./NavBar.module.css";
import Login from "../Login/Login";
import { Link } from 'react-router-dom';


const NavBar = () =>{

    return(
           
        <div  className={style.container}>
            <Link to='/'>
            <h2 className={style.logo}>👩‍💻</h2>
            </Link>

            {/* <h2  className={style.nav}>
                BARRA NAVEGACION
            </h2> */}

          <Link to="/Preguntas" >
           <img src="https://cdn-icons-png.flaticon.com/128/3524/3524344.png" className={style.pepito}/>
          </Link>
        


            <Login/>
        </div>
          
    )
}

export default NavBar;