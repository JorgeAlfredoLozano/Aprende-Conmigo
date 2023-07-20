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
        navigate('/busqueda'); // Utiliza navigate en lugar de history.push
    };   
    
    return (
        <div>
            <div className={style.container}>
            <div className={style.anuncio}>
            <h1>{filteredData[0].title}</h1>
            <h3>{filteredData[0].grade}</h3>
            <h3>{filteredData[0].about_class}</h3>
            <h3>{filteredData[0].about_teacher}</h3>
            <h3>💲{filteredData[0].value}💸</h3>
         {idLog ? 
         (
          idLog !== filteredData[0].UserId ? 
  (
    <Link to={`/pago/${id}`}>
      <button>Contratar este profesor</button>
    </Link>
    
    ) : (
      // <p>No puedes comprarte a ti mismo.</p>
      <p></p>
   )
) : (
  <p>Debes Iniciar Sesión para contratar este profesor.</p>
)}
<Review idPub={id}/>

            </div>
            {filteredData && userTeacher && (
            <section className={style.about}>
                    <div className={style.imgCont} style={{
                    backgroundImage: `url(${userTeacher.data.assets})`}}>

                    </div>
                <h1>{userTeacher.data.name}</h1>
                <h3>{userTeacher.data.gender}</h3>
                {idLog ? (
                    <Link to={`/perfilPublico/${userTeacher.data.id}`}>
                        <button>+ info</button>
                    </Link> ) : (
                        <> 
                        {showLoginMessage && (
            <div>              
              <button onClick={() => setShowLoginMessage(false)}>continuar</button>
            </div>
          )}<button onClick={() => setShowLoginMessage(true)}>
        + info
        </button>
                        </>
                    )}
            </section>)}
            </div>
        </div>
    )}

 export default DetailAnuncio;