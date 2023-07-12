import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {updateAnuncio,getLesson} from '../../Redux/actions';
import { useParams, NavLink, useNavigate} from 'react-router-dom';
import style from '../FormAnuncio/FormAnuncio.module.css';

const UpdatePubli = (props) => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const datoPublication = useSelector((state) => state.allPublication); //Estado de todas la publicaciones
  const {id}=useParams();
  const datoId=datoPublication.data.filter((el)=>el.id===id)[0] //Avisos del usuario ID
  console.log(datoId)
  useEffect(()=>{
    dispatch(getLesson());    
  },[dispatch]);

  const [input,setInput]=useState({ //cargo los input con los datos del estado
    title:datoId.title,
    about_class:datoId.about_class,
    about_teacher:datoId.about_teacher,
    value:datoId.value,
    status:datoId.status
  })
  function handleChange(event) { //control de los input
        const { name, value } = event.target;
        setInput((prevState) =>({
            ...prevState,
          [name]: value,
        }))
  }; 
  const handleSubmit=(event)=> { //control de botones del form Actualizar/Eliminar/Volver
        event.preventDefault();
        const boton = event.target.name
        if (boton === 'actualizar') { 
            dispatch(updateAnuncio(id, input)) 
            alert("Aviso actualizada con exito!!")
            navigate('/pub')
        } else if (boton === 'eliminar') {
            setInput(input.status=false)
            dispatch(updateAnuncio(id, input )) 
            alert("Aviso eliminado con exito!!")
            navigate('/pub')
        } else if (boton === 'volver') {
            navigate('/pub')
        };
  }
    
       
  return (
        <div className={style.x}>
            <form className={style.container} onSubmit={(event)=>handleSubmit(event)}>
            <div>
                <label className={style.label}> Título: </label>
                <input  type="text" name='title' value={input.title} onChange={(event)=>handleChange(event)}/>                 
             </div>              
            <div>
                 <label className={style.label}> Acerca De La Clase: </label> 
                <textarea className={style.textarea} name='about_class' value={input.about_class} onChange={(event)=>handleChange(event)}/>   
             </div>
            <div>
                <label className={style.label}> Acerca Del Profesor: </label> 
                <textarea className={style.textarea} name='about_teacher' value={input.about_teacher} onChange={(event)=>handleChange(event)}/>    
             </div>    
            <div>
                <label className={style.label}> Precio(C/H): </label> 
                <input type='number' name='value' value={input.value} onChange={(event)=>handleChange(event)}/>    
             </div> 

             <div> 
              <label > Nivel: {datoId.grade} </label>
              
            </div>
            <div>
              <label>Materia: {datoId.Lessons[0].lesson_name}</label>
            </div>
            <button className={style.submit} name='actualizar' type='submit' onClick={(event)=>handleSubmit(event)}>Actualizar</button>
            <button className={style.submit} name='eliminar' type='submit' onClick={(event)=>handleSubmit(event)}>Eliminar</button>
            <button className={style.submit} name='volver' type='submit' onClick={(event)=>handleSubmit(event)}>Volver</button>
             </form>
        </div>
    )
};

export default UpdatePubli;