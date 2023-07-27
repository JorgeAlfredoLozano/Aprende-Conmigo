import style from './DetailAnuncio.module.css';
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllAnuncios, getUserById, sendChat } from "../../Redux/actions";
import Review from '../Review/Review';
import { useEffect, useState } from 'react';
import Checkout from '../CheckoutForm/CheckoutForm';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation'; // Importamos la animación de carga
import PopUp from '../PopUp/PopUp';

const DetailAnuncio = () => {
  const localStorageContent = localStorage.getItem("cachedUser");
  const parser = JSON.parse(localStorageContent);
  const idLog = parser.id;
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showInput, setShowInput] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [renderMessage, setRenderMessage] = useState(false);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const [userFetched, setUserFetched] = useState(false);
  const [renderPopUp, setRenderPopUp] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    dispatch(getAllAnuncios());
  }, [dispatch]);

  const datoPublication = useSelector((state) => state.allAnuncios);
  const userTeacher = useSelector((state) => state.userID);
  const [showLoginMessage, setShowLoginMessage] = useState(false);

  // Validar si los datos están disponibles antes de mostrar el contenido del componente
  const userDataAvailable = datoPublication.data && datoPublication.data.length > 0;
  const userTeacherDataAvailable = userTeacher && userTeacher.data;

  useEffect(() => {
    // Solo realizar la consulta si los datos no están disponibles
    if (!userDataAvailable && datoPublication.loading) {
      dispatch(getAllAnuncios());
    }
  }, [dispatch, userDataAvailable, datoPublication.loading]);

  // Manejar el caso en que datoPublication o userTeacher no tengan datos
  let filteredData = [];
  if (userDataAvailable) {
    filteredData = datoPublication.data.filter(card => card.id === id);
  }

  useEffect(() => {
    // Solo realizar la consulta si los datos no están disponibles y aún no hemos hecho la solicitud
    if (!userFetched && userDataAvailable && filteredData.length > 0) {
      dispatch(getUserById(filteredData[0].UserId));
      setUserFetched(true); // Marcar que ya hemos hecho la solicitud
    }
  }, [dispatch, userDataAvailable, userFetched, filteredData]);

  const handleEnviarMensaje = () => {
    if (renderMessage) {
      if (inputValue.trim()) {
        const send = {
          idSend: idLog,
          idReceived: filteredData[0].UserId,
          message: inputValue,
        };
        dispatch(sendChat(send));
        alert('¡Mensaje enviado!');
      } else {
        alert('No puedes enviar un mensaje vacío.');
      }
    }
    setRenderMessage(!renderMessage);
    setInputValue(""); 
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleRenderMessage = (event) => {
    event.preventDefault();
    const boton = event.target.id;
    
    if (boton === 'notLogged') {
      alert(`Debes iniciar sesión para contactar a ${userTeacher && userTeacher.data.name}.`);
    } else if(boton === 'renderMessage'){
      setRenderMessage(true);
    } else if (boton === 'enviar') {
      handleEnviarMensaje();
      setRenderMessage(false);
    } else if (boton === 'cancelar') {
      setRenderMessage(false);
    }
  };

  const handleRenderCheckoutForm = (event) => {
    setShowCheckoutForm(true);
  };

  const handleCancelPayment = () => {
    setShowCheckoutForm(false);
  };

  const handleSuccessfulPurchase = () => {
    setText('¡Pago realizado con éxito!');
    setRenderPopUp(true);
  };

  return (
    <div>
      <div className={style.container}>
        {!userDataAvailable && !userTeacherDataAvailable ? (
          <LoadingAnimation />
          ) : (
            <div className={style.anuncio}>
            <button onClick={handleGoBack} style={{zIndex:"6"}}>Volver</button>
            <h1 className={style.title}>{filteredData[0].title}</h1>
            <div className={style.claseContainer}>
              <h1>Acerca de la clase</h1>
              <h5 className={style.grade}>Nivel: {filteredData[0].grade.split(',').join(' - ')}</h5>
              <p className={style.aboutWea}>{filteredData[0].about_class}</p>
            </div>
            <div className={style.teacherContainer}>
              <h1>Sobre {userTeacher && userTeacher.data.name}</h1>
              <p className={style.aboutWea}>{filteredData[0].about_teacher}</p>
            </div>
            {idLog ? (
              <>
                <button id='renderMessage' onClick={(event) => handleRenderMessage(event)} className={style.botonMensaje}>Enviar mensaje a {userTeacher && userTeacher.data.name}</button>
                {renderMessage && (
                  <div className={style.messageContainer}>
                    <textarea className={style.textareaComment} placeholder='Escribe tu mensaje...' id='message' value={inputValue} onChange={(event) => handleChange(event)} />
                    <div className={style.botones}>
                      <button id='enviar' onClick={(event) => handleRenderMessage(event)}>Comentar</button>
                      <button id='cancelar' onClick={(event) => handleRenderMessage(event)}>Cancelar</button>
                    </div>
                  </div>
                )}
              </>
            ) : (
              <>
                <button id='notLogged' onClick={(event) => handleRenderMessage(event)} className={style.botonMensaje}>Enviar mensaje a {userTeacher && userTeacher.data.name}</button>
              </>
            )}
            <div className={style.popup}>
            {renderPopUp && <PopUp text={text} setText={setText} renderPopUp={renderPopUp} setRenderPopUp={setRenderPopUp}/>}
            </div>
            {showCheckoutForm && (
              <div className={style.payment}>
                <Checkout setShowCheckoutForm={setShowCheckoutForm} handleCancelPayment={handleCancelPayment} handleSuccessfulPurchase={handleSuccessfulPurchase}/>
                <button className={style.cancelPayment} onClick={handleCancelPayment}>Cancelar</button>
              </div>
            )}
            <Review idPub={id}/>
          </div>
        )}
        {filteredData && userTeacher && (
          <section className={style.about}>
            <div className={style.boxAbout}>
              <div className={style.imgCont} style={{ backgroundImage: `url(${userTeacher.data.assets})` }}></div>
              <h3>{userTeacher.data.name}</h3>
              {idLog ? (
                <Link to={`/perfilPublico/${userTeacher.data.id}`}>
                  <button>+info</button>
                </Link>
              ) : (
                <>
                  {showLoginMessage && (
                    <div>
                      <button onClick={() => setShowLoginMessage(false)}>continuar</button>
                    </div>
                  )}
                  <button onClick={() => setShowLoginMessage(true)}>
                    +info
                  </button>
                </>
              )}
              <h3>💲{filteredData[0].value}💸</h3>
              {idLog ? (
                idLog !== filteredData[0].UserId ? (
                  <div>
                    <button onClick={(event) => handleRenderCheckoutForm(event)}>Contratar este profesor</button>
                  </div>
                ) : (
                  <p></p>
                )
              ) : (
                <p>Para contratar debes iniciar sesión.</p>
              )}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
export default DetailAnuncio;