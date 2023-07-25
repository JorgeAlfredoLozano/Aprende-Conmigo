import style from "./Purchase.module.css"
import {useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getAllPurchases} from '../../Redux/actions';
import ReviewPerfil from "../Review/ReviewPerfil";

const Purchases =(props)=>{
  const localStorageContent = localStorage.getItem("cachedUser");
  const  parser  = JSON.parse(localStorageContent);
    const dispatch = useDispatch();
    const [isVisible,setIsVisible]=useState(false);
    const {id}=parser;
    useEffect(() => {
      dispatch(getAllPurchases(id));
  }, [dispatch]);
    const boughtPubli = useSelector((state) => state.purchases);

    const handlerClickReview=(data)=>{
      setIsVisible(!isVisible)
      props.receiveReviewId(data)
      props.setRenderReview(!props.renderReview)
    }

    const handleCancel=() => {
      setIsVisible(false)
    }

    return(
        <div className={style.container}>
          {boughtPubli[0] ?
           (boughtPubli.map((pub)=> {
            return (<>
            <div className={style.card_publication}>
              <div className={style.boxfecha}>
              <p className={style.fecha}>{pub.datePurchase}</p>
              </div>
            <div className={style.boxtitulo}>
         <h4 className={`${style.title}`}>{pub.Publication.title}</h4>
      <h5 className={`${style.lesson}`}>{pub.Publication.Lessons[0].lesson_name}</h5>
      </div>
      <h6 className={`${style.value}`}>${pub.Publication.value * pub.hora}</h6>
      <button className={style.boton} onCancel={handleCancel} onClick={()=>handlerClickReview(pub.Publication.id)}>Reseña</button>
      </div>
      </>
      )}
      )) : ( <h4 className={style.none}>Aún no se ha realizado ninguna compra.</h4>)}
      
        </div>
 )
}
export default Purchases;