import Card from "../Card/Card";
// import { connect } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import style from "./Favoritos.module.css";



const Favoritos = () => {
   
    const fav = useSelector(state=>state.myFavorites )
    console.log("conponenete FAVORITOS que tiene mi estado global -->", fav)
 //aca si si renderizo todos los favoritos selecionados y los puedo eliminar


    return (
        
        <div className={style.card_publication}>
        <p>pepito</p>
                {/* <h4 className={style.title}>{fav.title}</h4>
                <h5 className={style.lesson}>{fav.lesson}</h5>
                <h6 className={style.grade}>{fav.grade}</h6>
                <div className={style.abouts}>
                <h6 className={style.about_class}>{fav.about_class}</h6>
                </div>
                <div className={style.abouts}>
                <h6 className={style.about_teacher}>{fav.about_teacher}</h6>
                </div>
                <div className={style.contvalue}>
                <h6 className={style.value}>💲{fav.value}💸</h6>
                </div>
   */}
      </div>
      
        
    )
}

export default Favoritos;