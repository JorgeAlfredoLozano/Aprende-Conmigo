import React from 'react'
import NavBar from "../NavBar/NavBar";
import Footer from '../Footer/Footer';
import { useParams, Link, useNavigate } from 'react-router-dom';
import style from "../PublicPerfil/PerfilPublic.module.css"
import { getUserById } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const PerfilPublic = () => {
    
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getUserById(id))
    }, [dispatch]);
    
    
    const dataPublication = useSelector((state) => state.userID);
    
    const handleGoBack = () => {
        navigate(-1);
    };

    console.log(dataPublication)
    return (
        <div>
            <NavBar/>
            <div className={style.container}>
                <div className={style.anuncio}>
                <div className={style.imgCont} style={{
                    backgroundImage: `url(${dataPublication.data.assets})`}}>
                <h1>Nombre: {dataPublication.data.name}</h1>
                <h1>Fecha de nacimiento{dataPublication.data.date}</h1>
                <h1>email: {dataPublication.data.email}</h1>
                <h1>Telefono:{dataPublication.data.phone}</h1>
                <h1>Certificados: {dataPublication.data.certificate}</h1>
                </div>
                </div>
            </div>
            <button onClick={handleGoBack}>Volver</button>
        <Footer/>
    </div>
  )
}

export default PerfilPublic