 import NavBar from "../NavBar/NavBar";
 import style from './DetailAnuncio.module.css';
 import { useParams, Link, useNavigate } from "react-router-dom";
 import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAnuncios, getUserById } from "../../Redux/actions";
import Footer from '../Footer/Footer';
import { isUserLoggedIn } from "./authUtils.js"

 const DetailAnuncio = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate=useNavigate();
    useEffect(() => {
        dispatch(getAllAnuncios());
        dispatch(getUserById(filteredData[0].UserId))
    }, [dispatch]);

    const datoPublication = useSelector((state) => state.allAnuncios);
    const userTeacher = useSelector((state) => state.userID);
    const [showLoginMessage, setShowLoginMessage] = useState(false);
    
    let filteredData = datoPublication.data;

    filteredData = filteredData.filter(card => card.id === id);
    const handleVolver=() => {
        navigate('/busqueda')
    }
    return (
        <div>
            <NavBar/>
            <div className={style.container}>
            <div className={style.anuncio}>
            <h1>{filteredData[0].title}</h1>
            <h3>{filteredData[0].grade}</h3>
            <h3>{filteredData[0].about_class}</h3>
            <h3>{filteredData[0].about_teacher}</h3>
            <h3>💲{filteredData[0].value}💸</h3>
           {isUserLoggedIn() ? (
        <Link to={`/pago/${id}`}>
          <button>Contratar este profesor</button>
        </Link>
      ) : (
        // Mostrar el mensaje y el botón "Volver" si el usuario no está logueado.
        <>
          {showLoginMessage && (
            <div>
              <h5  style={{ color: 'red' }}>Para continuar debes Iniciar Sesión.</h5>
              <button onClick={() => setShowLoginMessage(false)}>Continuar</button>
            </div>
          )}
          <button onClick={() => setShowLoginMessage(true)}>
            Contratar este profesor
          </button>
        </>
      )}
            </div>
            {filteredData && userTeacher && (
            <section className={style.about}>
            <div className={style.imgCont} style={{
            backgroundImage: `url(${userTeacher.data.assets})`
            }}></div>
            <h1>{userTeacher.data.name}</h1>
            <h3>{userTeacher.data.gender}</h3>
            </section>)}
            </div>
            <Footer/>
        </div>
    )}

 export default DetailAnuncio;