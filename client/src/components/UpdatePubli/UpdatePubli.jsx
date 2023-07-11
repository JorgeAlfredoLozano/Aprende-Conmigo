import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {sendAnuncio,getLesson} from '../../Redux/actions';
import style from './FormAnuncio.module.css';

const UpdateAnuncio = (props) => {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getLesson());    
  },[dispatch]);

  const [input,setInput]=useState()
  function handleChange(event) {
        const { name, value } = event.target;
        setInput((prevState) =>({
           ...prevState,
          [name]: value,
        }))
    }; 
    const handleSubmit=(event)=>{
        event.preventDefault();
        const aux={
          ...input,
          grade:grades.grade
        }
    dispatch(sendAnuncio(email, aux)) //comentado para acomodarlo en la maqueta
        props.onSubmit()
        alert("Publicacion actualizada con exito!!")
        setInput({})      
    };
       
  return (
        <div className={style.x}>
            <form className={style.container} onSubmit={(event)=>handleSubmit(event)}>
            <div>
                <label className={style.label}> Título: </label>
                <input  type="text" name='title' onChange={(event)=>handleChange(event)}/>                   
            </div>              
            <div>
                 <label className={style.label}> Acerca De La Clase: </label> 
                <textarea className={style.textarea} name='about_class' onChange={(event)=>handleChange(event)}/>   
            </div>
            <div>
                <label className={style.label}> Acerca Del Profesor: </label> 
                <textarea className={style.textarea} name='about_teacher' onChange={(event)=>handleChange(event)}/>    
            </div>    
            <div>
                <label className={style.label}> Precio(P/H): </label> 
                <input type='number' name='value' onChange={(event)=>handleChange(event)}/>    
            </div>                      
            <button className={style.submit} type='submit'>Crear Anuncio</button>
            </form>
        </div>
    )
};

export default (UpdateAnuncio);