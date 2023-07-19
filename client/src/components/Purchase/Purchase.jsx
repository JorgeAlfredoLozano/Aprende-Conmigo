import style from "./Purchase.module.css"
import {useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getAllPurchases} from '../../Redux/actions';

const Purchases =()=>{
  const [renderCompras, setRenderCompras] = useState(false);
  const [renderVentas, setRenderVentas] = useState(false);
  const localStorageContent = localStorage.getItem("cachedUser");
  const  parser  = JSON.parse(localStorageContent);
    const dispatch = useDispatch();
    const {id}=parser;
    useEffect(() => {
      dispatch(getAllPurchases(id));
  }, [dispatch]);

    const boughtPubli = useSelector((state) => state.purchases);
    console.log(boughtPubli,'1')
    
    return(
        <div className={style.container}>
          <div className={style.compras}>
            <h3>Compras</h3>
          {boughtPubli[0] ?
           (boughtPubli.map((pub)=> {
            const containerStyle = {
              backgroundImage: `url(${pub.Publication.User.assets})`
            };
            return (<>
            <div className={style.card_publication}>
            <div className={style.assets} style={containerStyle}></div>
         <h4 className={`${style.title}`}>{pub.Publication.title}</h4>
      <h5 className={`${style.lesson}`}>{pub.Publication.Lessons[0].lesson_name}</h5>
      <h6 className={`${style.grade}`}>{pub.Publication.grade.split(",").join(" - ")}</h6>
      <h6 className={`${style.value}`}>${pub.Publication.value}</h6>
      </div>
      </>
      )}
      )) : ( <h4>Aún no se ha realizado ninguna compra.</h4>)}</div>
      <div className={style.ventas}>
      <h3>Ventas</h3>
      <h4>Aún no se ha realizado ninguna venta.</h4>
      </div>
        </div>
 )
}
export default Purchases;