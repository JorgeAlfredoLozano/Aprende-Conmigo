import React, { useState, useEffect } from "react";
import style from "./Login.module.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebaseConfig";
import { checkUserData, getUser } from "../../Redux/actions.js";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

const Login = ({userData, getUser}) => {
  const [logged, setLogged] = useState(false);
  const [greetUser, setGreetUser] = useState("null");
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const [renderUser, setRenderUser] = useState(userData);
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('currentUser'));
  const navigate = useNavigate();

  useEffect(() => {
    setRenderUser(userData);
    if (currentUser) {
      setLogged(true);
      
      setGreetUser(renderUser.name);
    } else {
      setLogged(false);
    }
  }, [userData]);

  const changeDidLog = () => {
    if (!logged) {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          checkUserData(user);
          const email = user.email;
          setCurrentUser(email)
          setLogged(true);
          localStorage.setItem("currentUser", email);
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
          navigate("/");
        })
        .catch((error) => {
          console.error("Error al cerrar sesión:", error);
        });
    }
  };

  const containerStyle = {
    backgroundImage: `url(${renderUser.assets})`, /// esto es mientras no trabajemos con las imagenes provenientes de la base de datos
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

const mapStateToProps = (state) => {
    return {
      userData: state.allInfo
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
    getUser: (email) => dispatch(getUser(email))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Login);