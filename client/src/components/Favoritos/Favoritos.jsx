import CardPublication from "../CardPublication/CardPublication";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {  order_card_fav } from "../../Redux/actions"; 
import { useState } from "react";
// import style from "./Favorites.module.css";



const Favoritos = ({myFav}) => {
    
    return (
        <>
        <div  className={style.containerFavorites}>
                {
                   myFav?.map(fav =>{
                        return(
                            <CardPublication
                               key={fav.id}
                               id={fav.id}
                               name={fav.name}
                               status={fav.status}
                               species={fav.species}
                               gender={fav.gender}
                               origin={fav.origin.name}
                               image={fav.image}
                               onClose={fav.onClose}
                           />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Favoritos;