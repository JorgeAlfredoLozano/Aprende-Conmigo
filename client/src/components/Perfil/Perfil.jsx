import NavBar from "../NavBar/NavBar";
import style from './Perfil.module.css';
import React, { useState } from "react";
import FormUpdate from "../FormUpdate/FormUpdate";
import SendPhoto from "../SendPhoto/SendPhoto";
const Perfil = () => {

    const [renderProfile, setRenderProfile] = useState(true)
    const [renderAnuncios, setRenderAnuncios] = useState(false)
    const [renderAnunciosFavoritos, setRenderAnunciosFavoritos] = useState(false)
    const [renderHistorial, setRenderHistorial] = useState(false)
    const [renderForm, setRenderForm] = useState(false)

    const changeTab = (event) => {
        if(event.target.id === 'profile') {
            setRenderProfile(true);
            setRenderAnuncios(false)
            setRenderAnunciosFavoritos(false)
            setRenderHistorial(false)
        } else if (event.target.id === 'anuncios') {
            setRenderAnuncios(true)
            setRenderProfile(false);
            setRenderAnunciosFavoritos(false)
            setRenderHistorial(false)
        } else if (event.target.id === 'anunciosfav') {
            setRenderAnunciosFavoritos(true)
            setRenderProfile(false);
            setRenderAnuncios(false)
            setRenderHistorial(false)
        } else if (event.target.id === 'historial') {
            setRenderHistorial(true)
            setRenderProfile(false);
            setRenderAnuncios(false)
            setRenderAnunciosFavoritos(false)
        }
    }
    const updateData = () => {
        setRenderForm(true)
    }
    const handleFormSubmit = () => {
        setRenderForm(false);
    }
    const containerStyle = {
        backgroundImage: `url(${localStorage.getItem('avatar')})`, /// esto es mientras no trabajemos con las imagenes provenientes de la base de datos
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
                         <SendPhoto/>
                            <p className={style.infoLabel}>Nombre</p>
                            <p className={style.infoLabel}>Apellido</p>
                            <p className={style.infoLabel}>Email</p>
                            <p className={style.infoLabel}>Fecha de Nacimiento</p>
                            <p className={style.infoLabel}>Genero</p>
                            <p className={style.infoLabel}>Teléfono</p>
                            <p className={style.infoLabel}>Genero</p>
                            <p className={style.infoLabel}>Certificados</p>
                            <button className={style.botonForm} onClick={updateData}>Modificar Perfil</button>
                            {renderForm && (
                                <div>
                                    <FormUpdate onSubmit={handleFormSubmit}/>
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
    )
}

export default Perfil;
