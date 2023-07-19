import React, { useState, useEffect } from 'react';
import style from '../DashBoardAdmin/DashBoardAdmin.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAnuncios } from '../../Redux/actions';
import RestrictedAccess from "../RestrictedAccess/RestrictedAccess"

const DashBoardAdmin = () => {
    const email = localStorage.getItem('currentUser');
    
    console.log("this ", email);
    const dispatch = useDispatch();
        
    const anuncios = useSelector((state) => state.allAnuncios)
    
    useEffect(() => {
        dispatch(getAllAnuncios());
    }, [dispatch]);
    
    
        return (  
            <div>
             {(email !== "aprendeconmigohenry@gmail.com") && <RestrictedAccess/> } 
             <div>
  <h1>DashBoardAdmin</h1>
            <h4>anuncios generales</h4><hr/>
            {anuncios.data && anuncios.data.map((anuncio) => {
                return ( 
                    <div key={anuncio.id}>
                <h3>  anuncio: {anuncio.title}</h3>
                <h3> Nivel: {anuncio.grade}</h3>
                <hr/>
                </div>
                           
                )
            })}
        </div>
             </div>  )      
          
            
        
}


export default DashBoardAdmin;



/*
dispatch 
useEfect cuando se monta el compo
importo la ruta   , [si tiene algun cambio se ejecuta]
useSelector (para ver lo que llega)
*/

