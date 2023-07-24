import style from './DetailAnuncio.module.css';
import { useParams, Link, useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from 'react-redux';
import { getAllAnuncios, getUserById, sendChat } from "../../Redux/actions";
import Review from '../Review/Review';
import { useEffect, useState } from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const DetailAnuncio = () => {
  
    const localStorageContent = localStorage.getItem("cachedUser"); 
    const  parser  = JSON.parse(localStorageContent);
    const  idLog  = parser.id;
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate(); 
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [renderMessage, setRenderMessage] = useState(false);
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);

    useEffect(() => {
        dispatch(getAllAnuncios());
        dispatch(getUserById(filteredData[0].UserId));
    }, [dispatch]);
    
    const datoPublication = useSelector((state) => state.allAnuncios);  
    const userTeacher = useSelector((state) => state.userID);  
   
    const [showLoginMessage, setShowLoginMessage] = useState(false);

    let filteredData = datoPublication.data;
    
    filteredData = filteredData.filter(card => card.id === id);      
  
    const handleEnviarMensaje = () => {
      if (renderMessage) {
          if (inputValue.trim()) { 
              const send = {
                  idSend: idLog,
                  idReceived: filteredData[0].UserId,
                  message: inputValue,
              };
              dispatch(sendChat(send));
            
             alert('¡Mensaje enviado!')

          } else {
             
              alert('No puedes enviar un mensaje vacío.')
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
      alert(`Debes iniciar sesión para contactar a ${userTeacher && userTeacher.data.name}.`)
    } else if(boton === 'renderMessage'){
      setRenderMessage(true);
    } else if (boton === 'enviar') {
      handleEnviarMensaje();
      setRenderMessage(false);
    } else if (boton === 'cancelar') {
      setRenderMessage(false);
    }
  }

  const handleRenderCheckoutForm = () => {
    setShowCheckoutForm(true);
  };

  const handleCancelPayment = () => {
    setShowCheckoutForm(false)
  }

    return (
        <div>
            <div className={style.container}>
            <div className={style.anuncio}>
          <button onClick={handleGoBack}>Volver</button>
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
            {idLog ? (<><button id='renderMessage' onClick={(event) => handleRenderMessage(event)} className={style.botonMensaje}>Enviar mensaje a {userTeacher && userTeacher.data.name}</button>
            {renderMessage && (
            <div className={style.messageContainer}>
              <textarea className={style.textareaComment} placeholder=' Escribe tu mensaje...' id='message' value={inputValue} onChange={(event) => handleChange(event)}/>
              <div className={style.botones}>
              <button id='enviar' onClick={(event) => handleRenderMessage(event)}>Comentar</button>
              <button id='cancelar' onClick={(event) => handleRenderMessage(event)}>Cancelar</button>
              </div>
            </div>
                    )}</>) : 
                    (<>
                    <button id='notLogged' onClick={(event) => handleRenderMessage(event)} className={style.botonMensaje}>Enviar mensaje a {userTeacher && userTeacher.data.name}</button>
                    </>)}{showCheckoutForm && (
            <div className={style.payment}>
              <CheckoutForm showCheckoutForm={showCheckoutForm} setShowCheckoutForm={setShowCheckoutForm} />
              <button onClick={handleCancelPayment}>Cancelar</button>
            </div>
          )}
            <Review idPub={id}/>

            </div>
            {filteredData && userTeacher && (
            <section className={style.about}>
              <div className={style.boxAbout}>
                    <div className={style.imgCont} style={{
                    backgroundImage: `url(${userTeacher.data.assets})`}}>

                    </div>
                <h3>{userTeacher.data.name}</h3>
                <h5>{userTeacher.data.gender}</h5>
                {idLog ? (
                    <Link to={`/perfilPublico/${userTeacher.data.id}`}>
                        <button>+info</button>
                    </Link> ) : (
                        <> 
                        {showLoginMessage && (
            <div>              
              <button onClick={() => setShowLoginMessage(false)}>continuar</button>
            </div>
          )}<button onClick={() => setShowLoginMessage(true)}>
        +info
        </button>
                        </>
                    )}
                    <h3>💲{filteredData[0].value}💸</h3>
                    {idLog ? 
         (
          idLog !== filteredData[0].UserId ? 
  (<div>
      <button onClick={handleRenderCheckoutForm}>Contratar este profesor</button>
    </div>
    ) : (
      <p></p>
   )
) : (
  <p>Para contratar debes iniciar sesión.</p>
)}
</div>
            </section>)}
            
            </div>
        </div>
    )}

 export default DetailAnuncio;