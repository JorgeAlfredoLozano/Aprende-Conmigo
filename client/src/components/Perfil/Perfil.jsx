import style from './Perfil.module.css';
import React, { useState, useEffect } from "react";
import FormUpdate from "../FormUpdate/FormUpdate";
import FormAnuncio from "../FormAnuncio/FormAnuncio";
import { getUser, getAllPublication } from '../../Redux/actions';
import { connect } from "react-redux";
import SendPhoto from "../SendPhoto/SendPhoto";
import PublicationUser from "../PublicationUser/PublicationUser";
import Favoritos from "../Favoritos/Favoritos";
import Messages from "../Messages/Messages";
import { useParams } from "react-router";
import Purchases from '../Purchase/Purchase';
import Sales from '../Sales/Sales';
import UpdatePubli from '../UpdatePubli/UpdatePubli';
import ReviewPerfil from '../Review/ReviewPerfil';
import PopUp from '../PopUp/PopUp';
import perfilIcon from '../../assets/icon-perfil-blanco.png';
import anunciosIcon from '../../assets/icon-anuncio-blanco.png';
import favoritosIcon from '../../assets/icon-fav-blanco.png';
import historialIcon from '../../assets/icon-historial-blanco.png';
import mensajesIcon from '../../assets/icon-mensajes-blanco.png';

const Perfil = ({ userData, getUser, getAllPublication, renderMenu, setRenderMenu }) => {
  const { tab } = useParams();
  useEffect(() => {
    setRenderUser(userData);
  }, [userData]);

  useEffect(() => {
    if (currentUser) {
      getUser(currentUser);
    }
  }, [getUser]);

  const [renderProfile, setRenderProfile] = useState(false);
  const [renderAnuncios, setRenderAnuncios] = useState(false);
  const [renderAnunciosFavoritos, setRenderAnunciosFavoritos] = useState(false);
  const [renderHistorial, setRenderHistorial] = useState(false);
  const [renderForm, setRenderForm] = useState(false);
  const [renderUser, setRenderUser] = useState(userData);
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('currentUser'));
  const [renderFormAnuncio, setRenderFormAnuncio] = useState(false);
  const [submitFormAnuncio, setSubmitFormAnuncio] = useState(false);
  const [renderMensajes, setRenderMensajes] = useState(false);
  const [renderCompras, setRenderCompras] = useState(true);
  const [renderVentas, setRenderVentas] = useState(false);
  const [renderUpdatePubli, setRenderUpdatePubli] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [renderReview, setRenderReview] = useState(false);
  const [reviewId, setReviewId] = useState(null);
  const [renderPopUp, setRenderPopUp] = useState(false); 
  const [text, setText] = useState('');

  useEffect(() => {
    if (tab === 'usuario') {
      setRenderProfile(true);
      setRenderAnuncios(false);
      setRenderAnunciosFavoritos(false);
      setRenderHistorial(false);
      setRenderMensajes(false);
    } else if (tab === 'anuncios') {
      setRenderAnuncios(true);
      setRenderProfile(false);
      setRenderAnunciosFavoritos(false);
      setRenderHistorial(false);
      setRenderMensajes(false);
    } else if (tab === 'anunciosfav') {
      setRenderAnunciosFavoritos(true);
      setRenderProfile(false);
      setRenderAnuncios(false);
      setRenderHistorial(false);
      setRenderMensajes(false);
    } else if (tab === 'historial') {
      setRenderHistorial(true);
      setRenderProfile(false);
      setRenderAnuncios(false);
      setRenderAnunciosFavoritos(false);
      setRenderMensajes(false);
    } else if (tab === 'mensajes') {
      setRenderMensajes(true);
      setRenderProfile(false);
      setRenderAnuncios(false);
      setRenderAnunciosFavoritos(false);
      setRenderHistorial(false);
    }
  }, [tab]);

  const changeTab = (event) => {
    const clickedTab = event.target.id;
    
    if (clickedTab === 'usuario') {
      setRenderProfile(true);
      setRenderAnuncios(false);
      setRenderAnunciosFavoritos(false);
      setRenderHistorial(false);
      setRenderMensajes(false);
      window.history.pushState(null, null, `/perfil/usuario`);
      setRenderMenu(false);
    } else if (clickedTab === 'anuncios') {
      setRenderAnuncios(true);
      setRenderProfile(false);
      setRenderAnunciosFavoritos(false);
      setRenderHistorial(false);
      setRenderMensajes(false);
      window.history.pushState(null, null, `/perfil/anuncios`);
      setRenderMenu(false);
    } else if (clickedTab === 'anunciosfav') {
      setRenderAnunciosFavoritos(true);
      setRenderProfile(false);
      setRenderAnuncios(false);
      setRenderHistorial(false);
      setRenderMensajes(false);
      window.history.pushState(null, null, `/perfil/anunciosfav`);
      setRenderMenu(false);
    } else if (clickedTab === 'historial') {
      setRenderHistorial(true);
      setRenderProfile(false);
      setRenderAnuncios(false);
      setRenderAnunciosFavoritos(false);
      setRenderMensajes(false);
      window.history.pushState(null, null, `/perfil/historial`);
      setRenderMenu(false);
    } else if (clickedTab === 'mensajes') {
      setRenderMensajes(true);
      setRenderProfile(false);
      setRenderAnuncios(false);
      setRenderAnunciosFavoritos(false);
      setRenderHistorial(false);
      window.history.pushState(null, null, `/perfil/mensajes`);
      setRenderMenu(false);
    }
  };

  const changeHistorialTab = (event) => {
    const clickedTab = event.target.id;
    if (clickedTab === 'compras') {
      setRenderCompras(true)
      setRenderVentas(false)
    } else if (clickedTab === 'ventas') {
      setRenderVentas(true);
      setRenderCompras(false);
    }
  }

  const updateData = () => {
    setRenderForm(true);
  };

  const handleFormSubmit = () => {
    getUser(currentUser);
    setRenderForm(false);
    // setTimeout(() => {
    //   window.location.reload();
    // }, "1000");
  };

  const handleFormSubmitAnuncio = () => {
    getUser(currentUser);
    setSubmitFormAnuncio(true);
    setRenderFormAnuncio(false);
    setRenderAnuncios(true);
  };

  const handlePhotoSubmit = () => {
    getUser(currentUser);
    setRenderUser(userData);
    window.location.reload();
  };

  const cancelarForm = () => {
    setRenderForm(false);
  };

  const createAnuncio = () => {
    setRenderFormAnuncio(true);
  };

  const cancelarFormAnuncio = () => {
    setRenderFormAnuncio(false);
  };

  const containerStyle = {
    backgroundImage: `url(${renderUser.assets})`
  };

  useEffect(() => {
    if (submitFormAnuncio) {
      getAllPublication(currentUser);
      setSubmitFormAnuncio(false);
    }
  }, [submitFormAnuncio, getAllPublication, currentUser]);

  const formId = (data) => {
    const id = data;
    if (id) setUpdateId(id)
  }

  const receiveReviewId = (data) => {
    const id = data;
    if (id) setReviewId(id);
  }
  
  return (
    <div className={style.container}>
      <div className={style.contenedorPerfil}>
        {renderMenu && <div className={style.wea}>
          <div className={style.contenedorTabs}>
          <div className={style.boxA}>
          <div className={style.tabsIcon}><p id='usuario' onClick={changeTab} className={renderProfile ? style.active : style.tabs}>Mi perfil</p><img className={style.icon} src={perfilIcon}/></div>
          <hr className={style.hr}/>
          </div>
          <div className={style.boxB}>
          <div className={style.tabsIcon}><p id='anuncios' onClick={changeTab} className={renderAnuncios ? style.active : style.tabs}>Anuncios</p><img className={style.icon} src={anunciosIcon}/></div>
          <div className={style.tabsIcon}><p id='anunciosfav' onClick={changeTab} className={renderAnunciosFavoritos ? style.active : style.tabs}>Favoritos</p><img className={style.icon} src={favoritosIcon}/></div>
          <div className={style.tabsIcon}><p id='historial' onClick={changeTab} className={renderHistorial ? style.active : style.tabs}>Historial</p><img className={style.icon} src={historialIcon}/></div>
          </div>
          <div className={style.boxC}>
          <hr className={style.hr}/>
          <div className={style.tabsIcon}><p id='mensajes' onClick={changeTab} className={renderMensajes ? style.active : style.tabs}>Mensajes</p><img className={style.icon} src={mensajesIcon}/></div>
          </div></div></div>}
        <section className={style.contenedorInfo}>
        {renderPopUp && <PopUp renderPopUp={renderPopUp} setRenderPopUp={setRenderPopUp} text={text} setText={setText}/>}
          {renderProfile && (
            <div className={style.contPerfil}>
            <section className={style.imagen}>
                <div className={style.imgCont} style={containerStyle}></div>
                <SendPhoto className={style.send} onSubmit={(event)=>handlePhotoSubmit} />
              </section>
              <section className={style.datos}>
                <p className={style.infoLabel}>
                  <span style={{color:"rgb(63, 81, 181)", fontFamily:"Poppins-Medium"}}>Nombre: </span> 
                  <span>{renderUser.name}</span>
                  </p>
                <p className={style.infoLabel}>
                  <span style={{color:"rgb(63, 81, 181)", fontFamily:"Poppins-Medium"}}>Email: </span>
                  <span>{renderUser.email}</span>
                  </p>
                <p className={style.infoLabel}>
                  <span style={{color:"rgb(63, 81, 181)", fontFamily:"Poppins-Medium"}}>Fecha de Nacimiento: </span>
                  <span>{renderUser.date}</span>
                  </p>
                <p className={style.infoLabel}>
                  <span style={{color:"rgb(63, 81, 181)", fontFamily:"Poppins-Medium"}}>Género: </span>
                  <span>{
                renderUser.gender === 'male'
                ? 'Hombre' 
                :renderUser.gender === 'female'
                  ? 'Mujer'
                  : 'Otro'  
                }</span>
                </p>
                <p className={style.infoLabel}>
                  <span style={{color:"rgb(63, 81, 181)", fontFamily:"Poppins-Medium"}}>Teléfono: </span>
                  <span>{renderUser.phone}</span>
                  </p>
                <button className={style.botonForm} onClick={updateData}>
                  Modificar Datos
                </button>
              </section>
              
              {renderForm && <FormUpdate isVisible={renderForm} onCancel={cancelarForm} onSubmit={handleFormSubmit} renderPopUp={renderPopUp} setRenderPopUp={setRenderPopUp} text={text} setText={setText}/>}
            </div>
          )}
          {renderAnuncios && (
            <div>
              <div className={style.containerAnuncios}>
                <div className={style.crearAnuncio}>
                  <p className={style.panuncio} onClick={createAnuncio}>Crear Anuncio</p>
                </div>
                <hr className={style.hr}></hr>
                <div className={style.cards}>
                  <PublicationUser formId={formId} renderUpdatePubli={renderUpdatePubli} setRenderUpdatePubli={setRenderUpdatePubli} submitFormAnuncio={submitFormAnuncio} />
                </div>
              </div>
              {renderFormAnuncio && (
                <FormAnuncio isVisible={renderFormAnuncio} onCancel={cancelarFormAnuncio} onSubmit={handleFormSubmitAnuncio} renderPopUp={renderPopUp} setRenderPopUp={setRenderPopUp} text={text} setText={setText}/>
              )}
              {renderUpdatePubli && (
              <UpdatePubli isVisible={renderUpdatePubli} renderUpdatePubli={renderUpdatePubli} setRenderUpdatePubli={setRenderUpdatePubli} updateId={updateId} renderPopUp={renderPopUp} setRenderPopUp={setRenderPopUp} text={text} setText={setText}/>
              )}
            </div>
          )}
          {renderAnunciosFavoritos && <Favoritos />}
          {renderHistorial && 
          (
          <div className={style.contenedorHistorial}>
          <div className={style.contenedorTabsHistorial}>
          <p className={style.tabHistorial} id='compras' onClick={changeHistorialTab}>Compras</p>
          <p className={style.tabHistorial} id='ventas' onClick={changeHistorialTab}>Ventas</p>
          </div>
          <hr className={style.hr}></hr>
          <div className={style.contenedorInfoHistorial}>
            {renderCompras && <Purchases receiveReviewId={receiveReviewId} renderReview={renderReview} setRenderReview={setRenderReview}/>}
            {renderReview && <ReviewPerfil reviewId={reviewId} isVisible={renderReview} renderReview={renderReview} setRenderReview={setRenderReview}/>}
            {renderVentas && <Sales/>}
          </div>
          </div>
          )}
          {renderMensajes && <Messages />}
        </section>
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
    getUser: (email) => dispatch(getUser(email)),
    getAllPublication: (email) => dispatch(getAllPublication(email))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Perfil);
