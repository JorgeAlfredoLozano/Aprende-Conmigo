import NavBar from "../NavBar/NavBar";
import style from './Perfil.module.css';
import React, { useState, useEffect } from "react";
import FormUpdate from "../FormUpdate/FormUpdate";
import { getUser } from '../../Redux/actions';
import { connect } from "react-redux";
import SendPhoto from "../SendPhoto/SendPhoto";

const Perfil = ({ userData, getUser }) => {
  
  useEffect(() => {
    setRenderUser(userData);
  }, [userData]);

  useEffect(() => {
    if (currentUser) {
      getUser(currentUser)
    }
  }, [getUser]);

  const [renderProfile, setRenderProfile] = useState(true);
  const [renderAnuncios, setRenderAnuncios] = useState(false);
  const [renderAnunciosFavoritos, setRenderAnunciosFavoritos] = useState(false);
  const [renderHistorial, setRenderHistorial] = useState(false);
  const [renderForm, setRenderForm] = useState(false);
  const [renderUser, setRenderUser] = useState(userData);
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('currentUser'));

  console.log(renderUser)

  const changeTab = (event) => {
    if (event.target.id === 'profile') {
      setRenderProfile(true);
      setRenderAnuncios(false);
      setRenderAnunciosFavoritos(false);
      setRenderHistorial(false);
    } else if (event.target.id === 'anuncios') {
      setRenderAnuncios(true);
      setRenderProfile(false);
      setRenderAnunciosFavoritos(false);
      setRenderHistorial(false);
    } else if (event.target.id === 'anunciosfav') {
      setRenderAnunciosFavoritos(true);
      setRenderProfile(false);
      setRenderAnuncios(false);
      setRenderHistorial(false);
    } else if (event.target.id === 'historial') {
      setRenderHistorial(true);
      setRenderProfile(false);
      setRenderAnuncios(false);
      setRenderAnunciosFavoritos(false);
    }
  };

  const updateData = () => {
    setRenderForm(true);
  };

  const handleFormSubmit = () => {
    getUser(currentUser);
    setRenderForm(false);
  };

  const handlePhotoSubmit = () => {
    getUser(currentUser);
  };

  const cancelarForm = () => {
    setRenderForm(false)
  }

  const containerStyle = {
    backgroundImage: `url(${renderUser.assets})`
  };

  return (
    <div>
      <NavBar/>
      <div className={style.contenedorPerfil}>
        <div className={style.contenedorTabs}>
          <p id='profile' onClick={changeTab} className={style.tabs}>Mi perfil</p>
          <p id='anuncios' onClick={changeTab} className={style.tabs}>Anuncios</p>
          <p id='anunciosfav' onClick={changeTab} className={style.tabs}>Anuncios Favoritos</p>
          <p id='historial' onClick={changeTab} className={style.tabs}>Historial</p>
        </div>
        <div className={style.contenedorInfo}>
          {renderProfile && (
            <>
              <div className={style.imgCont} style={containerStyle}></div>
              <SendPhoto onSubmit={handlePhotoSubmit}/>
              <p className={style.infoLabel}>Nombre: {renderUser.name}</p>
              <p className={style.infoLabel}>Email: {renderUser.email}</p>
              <p className={style.infoLabel}>Fecha de Nacimiento: {renderUser.date}</p>
              <p className={style.infoLabel}>Género: {renderUser.gender}</p>
              <p className={style.infoLabel}>Teléfono: {renderUser.phone}</p>
              <p className={style.infoLabel}>Certificados: {renderUser.certificate}</p>
              <button className={style.botonForm} onClick={updateData}>Modificar Perfil</button>
              {renderForm && (
                <div>
                  <FormUpdate onSubmit={handleFormSubmit}/>
                  <button onClick={cancelarForm}>Cancelar</button>
                </div>
              )}
            </>
          )}
          {renderAnuncios && (
            <>
              <p className={style.infoLabel}>Anuncios</p>
            </>
          )}
          {renderAnunciosFavoritos && (
            <>
              <p className={style.infoLabel}>Anuncios Favoritos</p>
            </>
          )}
          {renderHistorial && (
            <>
              <p className={style.infoLabel}>Historial</p>
            </>
          )}
        </div>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Perfil);
