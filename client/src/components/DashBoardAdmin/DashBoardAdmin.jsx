import React, { useState, useEffect } from 'react';
import style from '../DashBoardAdmin/DashBoardAdmin.module.css';
//import { useDispatch, useSelector } from 'react-redux';
//import { getAllAnuncios } from '../../Redux/actions';
import RestrictedAccess from "../RestrictedAccess/RestrictedAccess"


const DashBoardAdmin = () => {
const [admin, setAdmin] = useState(false);
const user = localStorage.getItem('cachedUser');
const userObject = JSON.parse(user);

useEffect(() => {
    if (userObject && userObject.admin === true) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
}, [userObject]);

    return (
        <div>
        {admin ? (
            <div className={style.container}>
            <h1>DashBoardAdmin</h1>
            <h4>anuncios generales</h4>
            <hr />
        </div>
        ) : (<RestrictedAccess/>) }
      </div>  
    );
};

export default DashBoardAdmin;

    // Verificar si anuncios.data es una matriz válida antes de mapear
    // const anuncio =
    //     anuncios.data && Array.isArray(anuncios.data)
    //         ? anuncios.data.map((anu) => anu.title)
    //         : [];
   // {(!admin) ?  <RestrictedAccess/>} 



{/* Verificar si hay títulos de anuncios antes de mostrarlos */}
{/* {anuncio.length > 0 ? (
    <p>Anuncios: {anuncio.join(', ')}</p>
) : (
    <p>No hay anuncios disponibles.</p>
)} */}
/*
dispatch 
useEfect cuando se monta el compo
importo la ruta   , [si tiene algun cambio se ejecuta]
useSelector (para ver lo que llega)
*/

