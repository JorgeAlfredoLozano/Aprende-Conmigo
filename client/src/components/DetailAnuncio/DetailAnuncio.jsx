import style from './DetailAnuncio.module.css';
import { useParams, Link, useNavigate } from "react-router-dom"; // Importa useNavigate
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAnuncios, getUserById } from "../../Redux/actions";
import Review from '../Review/Review'
const DetailAnuncio = () => {
    const localStorageContent = localStorage.getItem("cachedUser"); //usuario principal
    const  parser  = JSON.parse(localStorageContent);
    const  idLog  = parser.id;
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Utiliza useNavigate en lugar de useHistory
    const [showInput, setShowInput] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [messageSent, setMessageSent] = useState(false);

    useEffect(() => {
        dispatch(getAllAnuncios());
        dispatch(getUserById(filteredData[0].UserId));
    }, [dispatch]);
    
    const datoPublication = useSelector((state) => state.allAnuncios);  
    const userTeacher = useSelector((state) => state.userID);  
   
    const [showLoginMessage, setShowLoginMessage] = useState(false);

    let filteredData = datoPublication.data;
    
    filteredData = filteredData.filter(card => card.id === id);    
    const handleVolver = () => {
        navigate('/busqueda');
    };   
    
    const handleEnviarMensaje = () => {
      if (showInput) {
          if (inputValue.trim()) { 
              const send = {
                  idSend: idLog,
                  idReceived: filteredData[0].UserId,
                  message: inputValue,
              };
              dispatch(sendChat(send));
              setMessageSent(true); 
          } else {
              setMessageSent(false); 
          }
      }
      setShowInput(!showInput);
      setInputValue(""); 
  };

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };

    return (
        <div>
            <div className={style.container}>
            <div className={style.anuncio}>
            <h1 className={style.title}>{filteredData[0].title}</h1>
            <div className={style.claseContainer}>
              <h1>Acerca de la clase</h1>
            <h5>Nivel: {filteredData[0].grade}</h5>
            <p className={style.aboutWea}>{filteredData[0].about_class}</p>
            </div>
            <div className={style.teacherContainer}>
              <h1>Sobre {userTeacher.data.name}</h1>
            <p className={style.aboutWea}>{filteredData[0].about_teacher}</p>
            </div>
            
            <Review idPub={id}/>

            </div>
            {filteredData && userTeacher && (
            <section className={style.about}>
              <div className={style.boxAbout}>
                    <div className={style.imgCont} style={{
                    backgroundImage: `url(${userTeacher.data.assets})`}}>

                    </div>
                <h1>{userTeacher.data.name}</h1>
                <h3>{userTeacher.data.gender}</h3>
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
  (
    <Link to={`/pago/${id}`}>
      <button>Contratar este profesor</button>
    </Link>
    
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