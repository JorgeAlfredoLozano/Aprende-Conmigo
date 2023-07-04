// import { Link } from "react-router-dom";
import style from "./NavBar.module.css";
import Login from "../Login/Login";

const NavBar = () =>{

    return(
        <div  className={style.container}>
         
            <h2  className={style.nav}>
                navbar
            </h2>
            <Login/>
        </div>
    )
}

export default NavBar;