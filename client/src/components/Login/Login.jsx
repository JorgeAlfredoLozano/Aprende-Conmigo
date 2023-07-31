import React, { useState, useEffect, useRef } from "react";
import style from "./Login.module.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import firebaseConfig from "./firebaseConfig";
import { checkUserData, getUser } from "../../Redux/actions.js";
import { Link, useNavigate } from "react-router-dom";
import { connect } from "react-redux";

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

const Login = ({ userData, getUser }) => {
  const [logged, setLogged] = useState(false);
  const [showLogoutButton, setShowLogoutButton] = useState(false);
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('currentUser'));
  const [admin, setAdmin] = useState(false);

  const user = localStorage.getItem('cachedUser');
  const userObject = JSON.parse(user);
  
  
  useEffect(() => {
    if (userObject && userObject.admin === true && userObject.status === true) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [userObject]);
  
  const navigate = useNavigate();
  const panelRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setShowLogoutButton(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const cachedUser = JSON.parse(localStorage.getItem('cachedUser'));
    if (cachedUser && cachedUser.length > 0) {
      setLogged(true);
    }
  }, []);
  
  useEffect(() => {
    if (currentUser) {
      setLogged(true);
      getUser(currentUser);
    } else {
      setLogged(false);
    }
  }, [currentUser, getUser]);
  
  useEffect(() => {
    
    if (userData) {
      localStorage.setItem('cachedUser', JSON.stringify(userData));
    } 
  }, [userData]);
  // Verificar el estado del usuario antes de permitir el inicio de sesión
  if ( userObject && userObject.status === false ) {
      setLogged(false);
      setShowLogoutButton(false);
      localStorage.removeItem('currentUser');
      localStorage.removeItem('cachedUser');         
      navigate('/');
      window.location.reload();
      navigate('/');
      alert("usuario Bloqueado");
      navigate('/');
      window.location.reload();
    }  
    

  const changeDidLog = () => {
    if (!logged) {
      firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
          checkUserData(user);
          const email = user.email;
          setCurrentUser(email);
            setLogged(true);
            localStorage.setItem('currentUser', email);
            navigate('/');
            setTimeout(()=>{window.location.reload()},2000) 
          }
          )
        .catch((error) => {
          console.error('Error al iniciar sesión:', error);
        });
    } else {
      firebase
        .auth()
        .signOut()
        .then(() => {
          setLogged(false);
          setShowLogoutButton(false);
          localStorage.removeItem('currentUser');
          localStorage.removeItem('cachedUser');         
          navigate('/');
          window.location.reload();     
        })
        .catch((error) => {
          console.error('Error al cerrar sesión:', error);
        });
    }
  };

  const containerStyle = {
    backgroundImage: `url(${userData && userData.assets})`,
  };

  const changeWindow = (event) => {
    event.preventDefault();

    if (event.target.id === 'panel') {
      navigate('/admin');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else if (event.target.id === 'perfil') {
      navigate('/perfil/usuario');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else if (event.target.id === 'favoritos') {
      navigate('/perfil/anunciosfav');
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  return (
    <div className={style.container}>
      {!logged && (
        <p className={style.boton} onClick={changeDidLog}>
          Conéctate
        </p>
      )}
      {logged && (
        <div className={style.container}>
          <div className={style.icon} ref={panelRef} style={containerStyle} onClick={() => setShowLogoutButton(!showLogoutButton)} ></div>
          {showLogoutButton && (
            <div className={style.panel}>
              <div ref={panelRef} className={style.desplegable} onClick={() => setShowLogoutButton(!showLogoutButton)} >
                {admin && <p id='panel' onClick={(event)=> {changeWindow(event)}} className={style.botones}>Panel de Control</p>}
                <p id='perfil' onClick={(event)=> {changeWindow(event)}} className={style.botones}>Mi Perfil</p>
                <p id='favoritos' onClick={(event)=> {changeWindow(event)}} className={style.botones}>Favoritos</p>
                <p onClick={changeDidLog} className={style.botones}>Cerrar Sesión</p>
              </div>
            </div>
          )}
          <p className={style.greet}>{userData && userData.name}</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.allInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (email) => dispatch(getUser(email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
