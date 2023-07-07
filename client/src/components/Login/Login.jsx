import React, { useState, useEffect } from "react";
import style from "./Login.module.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebaseConfig";
import { userData } from "../../Redux/actions.js";
import { Link, useNavigate } from "react-router-dom";

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

const Login = () => {
  const [logged, setLogged] = useState(false);
  const [greetUser, setGreetUser] = useState("");
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    const userName = localStorage.getItem("userName");

    if (currentUser && userName) {
      setLogged(true);
      setGreetUser(userName);
    } else {
      setLogged(false);
    }
  }, []);

  const changeDidLog = () => {
    if (!logged) {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          userData(user);
          const username = user.displayName;
          const email = user.email;
          const avatar = user.photoURL;
          console.log(user);
          setGreetUser(username);
          setLogged(true);
          localStorage.setItem("currentUser", email);
          localStorage.setItem("userName", username);
          localStorage.setItem("avatar", avatar);
        })
        .catch((error) => {
          console.error("Error al iniciar sesión:", error);
        });
    } else {
      firebase
        .auth()
        .signOut()
        .then(() => {
          setLogged(false);
          setShowLogoutButton(false);
          localStorage.removeItem("currentUser");
          localStorage.removeItem("userName");
          localStorage.removeItem("avatar");
          navigate("/");
        })
        .catch((error) => {
          console.error("Error al cerrar sesión:", error);
        });
    }
  };

  const containerStyle = {
    backgroundImage: `url(${localStorage.getItem('avatar')})`, /// esto es mientras no trabajemos con las imagenes provenientes de la base de datos
  };

  return (
    <div className={style.container}>
      {!logged && (
        <button className={style.boton} onClick={changeDidLog}>
          Iniciar Sesión
        </button>
      )}
      {logged && (
        <div>
          <div className={style.icon} style={containerStyle} onClick={() => setShowLogoutButton(!showLogoutButton)} ></div>
          {showLogoutButton && (
            <div className={style.panel}>
              <div className={style.desplegable}>
                <Link to="/perfil">
                  <p className={style.botones}>Mi Perfil</p>
                </Link>
                <p className={style.botones}>Favoritos</p>
                <p onClick={changeDidLog} className={style.botones}>Cerrar Sesión</p>
              </div>
            </div>
          )}
          <p className={style.greet}>{greetUser}</p>
        </div>
      )}
    </div>
  );
};

export default Login;