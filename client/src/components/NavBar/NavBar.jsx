import style from "./NavBar.module.css";
import Login from "../Login/Login";
import { Link } from 'react-router-dom';

const NavBar = () =>{

    return(
        <div  className={style.container}>
            <Link to='/'>
            <h2 className={style.logo}>logo</h2>
            </Link>
            <h2 className={style.logo}>logo</h2>
            <h2  className={style.nav}>
                navbar
            </h2>
            <Login/>
        </div>
    )
}

export default NavBar;