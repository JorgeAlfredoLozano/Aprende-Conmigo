import style from "./NavBar.module.css";
import Login from "../Login/Login";
import { Link } from 'react-router-dom';
import loguito from '../../assets/logo-aprende.png';
import faqicon from '../../assets/faq-icon.png';
import Notifications from "./Notifications";

const NavBar = () => {
  return (
    <div className={style.container}>
      <Link to='/'>
        <img className={style.logo} src={loguito} />
      </Link>
      <Login />
      <div className={style.notificationContainer}>
        <Link to='/perfil/mensajes'>
            <Notifications />
        </Link>
      </div>

      <Link to="/Preguntas">
        <img src={faqicon} className={style.faq} />
      </Link>
    </div>
  );
}

export default NavBar;
