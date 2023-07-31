import React, { useEffect, useState } from "react";
import style from "./NavBar.module.css";
import Login from "../Login/Login";
import { Link, useNavigate } from "react-router-dom";
import loguito from "../../assets/imagenes/isologo-light.png";
import faqicon from "../../assets/faq-icon.png";
import Notifications from "./Notifications";
import menuIcon from "../../assets/imagenes/menu.png";
import menuIconHover from "../../assets/imagenes/menu-hover.png";

const NavBar = ({renderMenu, setRenderMenu}) => {
  const email = localStorage.getItem("currentUser");
  const navigate = useNavigate();
  const [renderProfileIcon, setRenderProfileIcon] = useState(false);

  useEffect(() => {
    if (
      window.location.pathname === "/perfil/usuario" ||
      window.location.pathname === "/perfil/anuncios" ||
      window.location.pathname === "/perfil/anunciofav" ||
      window.location.pathname === "/perfil/historial" ||
      window.location.pathname === "/perfil/mensajes"
    ) {
      setRenderProfileIcon(true);
    } else {
      setRenderProfileIcon(false);
    }
  }, [window.location.pathname]);

  const goToHome = () => {
    navigate("/");
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isMenuIconHovered, setIsMenuIconHovered] = useState(false);

  const handleMenu = () => {
    setRenderMenu(!renderMenu);
  }

  return (
    <div className={style.container}>
      <img className={style.logo} onClick={goToHome} src={loguito} alt="Logo" />
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
      {renderProfileIcon && (
        <img
          src={isMenuIconHovered ? menuIconHover : menuIcon}
          className={isMenuIconHovered ? style.menuHover : style.menu}
          alt="menu"
          onMouseEnter={() => setIsMenuIconHovered(true)}
          onMouseLeave={() => setIsMenuIconHovered(false)}
          onClick={handleMenu}
          style={{height:"20px", width:"auto"}}
        />
      )}
    </div>
  );
};

export default NavBar;