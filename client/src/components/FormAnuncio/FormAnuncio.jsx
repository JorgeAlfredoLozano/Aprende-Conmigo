import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {sendAnuncio,getLesson} from '../../Redux/actions';
import Select from 'react-select';
import style from './FormAnuncio.module.css';

const FormAnuncio = (props) => {
  const email=localStorage.getItem("currentUser")
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getLesson());
    
  },[dispatch]);
  const materias=useSelector((state)=>state.lesson);
  const options = materias.map((aux) => ({ value: aux.id, label: aux.lesson_name }))
  const sortOptions=options.sort((a,b)=>a.label.localeCompare(b.label))
  const [input,setInput]=useState()
  function handleChange(event) {
        const { name, value } = event.target;
        setInput((prevState) =>({
           ...prevState,
          [name]: value,
        }))
    }; 
  function handleSelect(e) {  
    setInput((prevState) =>({
      ...prevState,
      lesson_name: e.label,
      }));
    };
  const [selectedBtns, setSelectedBtns] = useState([]);
  const seleccionarBoton = (boton) => {
    if (selectedBtns.includes(boton)) {
      // Si el botón ya está seleccionado, lo elimino array
      const updatedBtns = selectedBtns.filter((btn) => btn !== boton);
      setSelectedBtns(updatedBtns);
    } else {
      // Si el botón no está seleccionado, lo agrego al array
      setSelectedBtns([...selectedBtns, boton]);
    }
  };
  const ordenarBotones = (a, b) => {
    const orden = ['Primaria', 'Secundaria', 'Universidad'];
    return orden.indexOf(a) - orden.indexOf(b);
  };
  const buttons = selectedBtns.sort(ordenarBotones).join(', ');
  const grades={
    grade:buttons
  };
  const handleSubmit=(event)=>{
    event.preventDefault();
    const aux={
      ...input,
      grade:grades.grade
    }
    dispatch(sendAnuncio(email, aux)) //comentado para acomodarlo en la maqueta
        props.onSubmit()
        alert("Publicacion creada con exito!!")
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
            
            <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group"> {/*CHECKBOX GRADE */}
            <label > Nivel: </label>
    <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" 
        onClick={() => seleccionarBoton("Primaria")}/>
    <label className={"btn btn-outline-primary"+ (selectedBtns.includes("Primaria") ? " seleccionado" : "")} 
    for="btncheck1" >Primaria</label>
  
    <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" 
        onClick={() => seleccionarBoton("Secundaria")}/>
    <label className={"btn btn-outline-primary"+ (selectedBtns.includes("Secundaria") ? " seleccionado" : "")}
     for="btncheck2">Secundaria</label>
  
    <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" 
        onClick={() => seleccionarBoton("Universidad")}/>
    <label className={"btn btn-outline-primary"+ (selectedBtns.includes("Universidad") ? " seleccionado" : "")}
     for="btncheck3">Universidad</label>
          </div>

                <div> {/*SELECT MATERIAS */}
                <label className={style.label}> Materia: </label> 
                
                <Select className={style.select} options={sortOptions} isSearchable={true} onChange={(event)=>handleSelect(event)}></Select>               
                </div>                
            <button className={style.submit} type='submit'>Crear Anuncio</button>
            </form>
        </div>
    )
};

export default (FormAnuncio);