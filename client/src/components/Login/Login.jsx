import React, { useState } from "react";
import style from "./Login.module.css";
import firebase from "firebase/compat/app"; //firebase
import "firebase/compat/auth"; //firebase
import firebaseConfig from "./firebaseConfig"; //firebase
import userData from "../../Redux/actions.js";

firebase.initializeApp(firebaseConfig); //firebase

const provider = new firebase.auth.GoogleAuthProvider(); //firebase

const Login = () => {
  const [logged, setLogged] = useState(false);
  const [greetUser, setGreetUser] = useState('');
  const [showLogoutButton, setShowLogoutButton] = useState(false);

  // Dentro de la función changeDidLog
  const changeDidLog = () => {
    if (logged === false) {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          userData(user)
          const username = user.displayName;
          setGreetUser(username);
          setLogged(true);
          setShowLogoutButton(true); // Mostrar el botón de logout al iniciar sesión
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
          setShowLogoutButton(false); // Ocultar el botón de logout al cerrar sesión
        })
        .catch((error) => {
          console.error("Error al cerrar sesión:", error);
        });
    }
  };

  return (
    <div className={style.container}>
      {!logged && (
        <button className={style.boton} onClick={changeDidLog}>
          Login
        </button>
      )}
      {logged && (
        <div>
          {/* <img className={style.logicon} src={image} alt=''  /> */}
          <button className={style.openbox} onClick={() => setShowLogoutButton(!showLogoutButton)}>▼</button>
          {showLogoutButton && (<div className={style.panel}>
            <button onClick={changeDidLog} className={style.logout}>
              Logout
            </button>
            </div>
          )}
          <p className={style.greet}>{greetUser}</p>
        </div>
      )}
    </div>
  );
};

export default Login;