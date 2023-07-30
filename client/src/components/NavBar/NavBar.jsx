import React from "react";
import style from "./NavBar.module.css";
import Login from "../Login/Login";
import { Link } from "react-router-dom";
import loguito from "../../assets/imagenes/isologo-light.png";
import faqicon from "../../assets/faq-icon.png";
import Notifications from "./Notifications";

const NavBar = () => {
  const email = localStorage.getItem("currentUser");

  return (
    <div className={style.container}>
      <Link to="/">
        <img className={style.logo} src={loguito} alt="Logo" />
      </Link>
      <Login />
      {email ? (
        <div className={style.notificationContainer}>
          <Link to="/perfil/mensajes">
            <Notifications />
          </Link>
        </div>
      ) : null}
      <Link to="/Preguntas">
        <img src={faqicon} className={style.faq} alt="FAQ" />
      </Link>
    </div>
  );
};

export default NavBar;

