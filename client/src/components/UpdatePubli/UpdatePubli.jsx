import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {updateAnuncio,getLesson} from '../../Redux/actions';
import { useParams, useNavigate} from 'react-router-dom';
import style from '../FormAnuncio/FormAnuncio.module.css';

const UpdatePubli = (props) => {


  const dispatch=useDispatch();
  const navigate=useNavigate();
 //me traigo el state global allPublication
  const datoPublication = useSelector((state) => state.allPublication); //Estado de todas la publicaciones
  
  const {id}=useParams();

  //me trae el objeto selecionado por id
  const datoId =datoPublication.data.filter((el)=>el.id===id)[0] //Avisos del usuario ID
  console.log("resultado del filtrado del id de publication.data =>", datoId)
  //cuando se monta este comp quiero que de despache esta action
  useEffect(()=>{
    dispatch(getLesson()); //nombre de las materias
  },[dispatch]);

  const [input,setInput]=useState({//se inicializa con los valores obtenidos del objeto filtrado datoId.
    title:datoId.title,
    about_class:datoId.about_class,
    about_teacher:datoId.about_teacher,
    value:datoId.value,
    status:datoId.status
  })
  console.log("jiji ", input)
//______________________________________________________
const [errors, setErrors] = useState({});

  function handleChange(event) { //control de los input
        const { name, value } = event.target;
        setInput((prevState) =>({
            ...prevState,
          [name]: value,
        }))
 
        validateInput(name, value);
  }; 
//____________________________________________
  function validateInput(name, value) {
    let error = null;
  
    // Realiza las validaciones según el campo
    if (name === 'title') {
      if (!value.trim()) error = 'El título es obligatorio.';
      if (value.trim().length > 150) error = 'Máximo 150 caracteres.';
    } 
    else if (name === 'about_class') {
      if (!value.trim()) error = 'La descripción de la clase es obligatoria.';
      if (value.trim().length > 500) error = 'Máximo 500 caracteres.';
    }
     else if (name === 'about_teacher') {
      if (!value.trim()) error = 'La descripción del profesor es obligatoria.';
      if (value.trim().length > 500) error = 'Máximo 500 caracteres.';
    } 
    else if (name === 'value') {
      if (!value.trim()) error = 'El precio es obligatorio.';
    else if (isNaN(value))  error = 'El precio debe ser un número.';
    else if (parseFloat(value) <= 0) error = 'El precio debe ser mayor que cero.';
    
    }
  
    // Actualiza los errores de validación
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  }
  
 //_______________________________________________________
  const handleSubmit=(event)=> { //control de botones del form Actualizar/Eliminar/Volver
        event.preventDefault();
        const boton = event.target.name
        if (boton === 'actualizar') { 
            dispatch(updateAnuncio(id, input)) 
            alert("Aviso actualizada con exito!!")
            navigate('/perfil')
        } else if (boton === 'eliminar') {
            setInput(input.status=false)
            dispatch(updateAnuncio(id, input )) 
            alert("Aviso eliminado con exito!!")
            navigate('/perfil')
        } else if (boton === 'volver') {
            navigate('/perfil')
        };
  }

 //___________________________________________________________      
  return (
        <div className={style.x}>


            <form className={style.container} onSubmit={(event)=>handleSubmit(event)}>

            <div>
                <label className={style.label}> Título: </label>
                <input  type="text" name='title' value={input.title} onChange={(event)=>handleChange(event)}/> 
                {errors.title && <span className={style.error}>{errors.title}</span>}                
            </div>        

            <div>
                 <label className={style.label}> Acerca De La Clase: </label> 
                <textarea className={style.textarea} name='about_class' value={input.about_class} onChange={(event)=>handleChange(event)}/> 
                {errors.about_class && <span className={style.error}>{errors.about_class}</span>}  
            </div>

            <div>
                <label className={style.label}> Acerca Del Profesor: </label> 
                <textarea className={style.textarea} name='about_teacher' value={input.about_teacher} onChange={(event)=>handleChange(event)}/>  
                {errors.about_teacher && <span className={style.error}>{errors.about_teacher}</span>}   
             </div>    

            <div>
                <label className={style.label}> Precio(C/H): </label> 
                <input type='number' name='value' value={input.value} onChange={(event)=>handleChange(event)}/>  
                {errors.value && <span className={style.error}>{errors.value}</span>} 
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