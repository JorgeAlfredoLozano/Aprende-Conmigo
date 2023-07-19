import style from "../CardPublication/CardPublication.module.css"
import {useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {getAllSales} from '../../Redux/actions';


const Sales =()=>{
  const localStorageContent = localStorage.getItem("cachedUser")
  const  parser  = JSON.parse(localStorageContent);
    const dispatch = useDispatch();
    const {id}=parser;
    console.log(id)
    useEffect(() => {
      dispatch(getAllSales(id));
  }, [dispatch]);

    const salesPubli = useSelector((state) => state.sales);
    console.log(salesPubli,'1')  /////ELIMINAR CUANDO NO SE USE
    
    return(
        <div>
          {salesPubli[0] &&
           salesPubli.map((pub)=> {
            return (<>
            <img src={`${pub.Publication.User.assets}`} alt="not found" />
            <h4 className={`${style.title}`}>{pub.Publication.title}</h4>
            <h5 className={`${style.lesson}`}>{pub.Publication.Lessons[0].lesson_name}</h5>
            <h6 className={`${style.grade}`}>{pub.Publication.grade}</h6>
            <h6 className={`${style.value}`}>${pub.Publication.value}</h6>
      </>
      )}
      )} 
        </div>
 )
}
export default Sales;