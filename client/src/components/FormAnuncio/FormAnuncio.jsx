import NavBar from "../NavBar/NavBar";
import { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import {sendAnuncio,getLesson} from '../../Redux/actions';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';


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
        <div>
            <NavBar/>
            <form onSubmit={(event)=>handleSubmit(event)}>
            <div>
                <label > Título: </label>
                <input  type="text" name='title' onChange={(event)=>handleChange(event)}/>                   
            </div>              
            <div>
                 <label > Acerca De La Clase: </label> 
                <textarea name='about_class' onChange={(event)=>handleChange(event)}/>   
            </div>
            <div>
                <label > Acerca Del Profesor: </label> 
                <textarea name='about_teacher' onChange={(event)=>handleChange(event)}/>    
            </div>    
            <div>
                <label > Precio(P/H): </label> 
                <textarea name='value' onChange={(event)=>handleChange(event)}/>    
            </div> 
            
            <div>{/*BUTTONS*/ }
                 <label > Nivel: </label>           
      <Button variant="outline-primary"
        className={selectedBtns.includes("Primaria") ? "seleccionado" : ""}
        onClick={() => seleccionarBoton("Primaria")}> Primaria </Button>
      <Button variant="outline-primary"
        className={selectedBtns.includes("Secundaria") ? "seleccionado" : ""}
        onClick={() => seleccionarBoton("Secundaria")}> Secundaria </Button>
      <Button variant="outline-primary"
        className={selectedBtns.includes("Universidad") ? "seleccionado" : ""}
        onClick={() => seleccionarBoton("Universidad")}> Universidad </Button>
     
   
             </div>

                <div> {/*SELECT MATERIAS */}
                <label > Materia: </label> 
                
                <Select options={sortOptions} isSearchable={true} onChange={(event)=>handleSelect(event)}></Select>               
                </div>
                
            <button type='submit'>Actualizar Datos</button>
            </form>
        </div>
    )
};

export default (FormAnuncio);