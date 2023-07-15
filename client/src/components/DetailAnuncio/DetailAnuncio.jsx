 import NavBar from "../NavBar/NavBar";
 import style from './DetailAnuncio.module.css';
 import { useParams, Link } from "react-router-dom";
 import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAnuncios, getUserById } from "../../Redux/actions";
import Footer from '../Footer/Footer';
 
 const DetailAnuncio = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllAnuncios());
        dispatch(getUserById(filteredData[0].UserId))
    }, [dispatch]);

    const datoPublication = useSelector((state) => state.allAnuncios);
    const userTeacher = useSelector((state) => state.userID);

    let filteredData = datoPublication.data;

    filteredData = filteredData.filter(card => card.id === id);

    return (
        <div>
            <NavBar/>
            <div className={style.container}>
            <div className={style.anuncio}>
                <div className={style.infoAnuncio}>
            <h1 className={style.label}>{filteredData[0].title}</h1>
            <h3 className={style.label}>{filteredData[0].grade}</h3>
            <h3 className={style.label}>{filteredData[0].about_class}</h3>
            <h3 className={style.label}>{filteredData[0].about_teacher}</h3>
            <h3 className={style.label}>💲{filteredData[0].value}💸</h3>
                </div>
                <div className={style.botonPago}>
           
            <Link to={`/pago/${filteredData[0].id}`}>
            <button>Contratar este profesor</button>
            </Link>
                </div>
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