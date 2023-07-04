// import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () =>{

    return(
        <div  className={style.container}>
         
            <h2  className={style.nav}>
                navbar
            </h2>
         
              
           

              {/* <a href="https://vitejs.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
                    <Link to="/home">HOME</Link> 
              </a> */}
        </div>
    )
}

export default NavBar;