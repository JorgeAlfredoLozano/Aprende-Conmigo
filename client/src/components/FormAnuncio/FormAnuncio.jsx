import NavBar from "../NavBar/NavBar";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {sendAnuncio} from '../../Redux/actions';

const FormAnuncio = () => {
  const email=localStorage.getItem("currentUser")
  
    const [input,setInput]=useState({})
    const dispatch=useDispatch();
    function handleChange(event) {
        const { name, value } = event.target;
        setInput({
          ...state,
          [name]: value,
        });
      }
    function handleSelect(event) {
        const {value} = event.target;
        setInput({
          ...state,
          lesson: value,
        });
      }

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
    dispatch(sendAnuncio(email, (input, grades))) //comentado para acomodarlo en la maqueta
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
                <input  type="text" name='title' onChange={handleChange}/>                   
            </div>              
            <div>
                 <label > Acerca De La Clase: </label> 
                <input  type="text"    />
                <textarea name='about_class' onChange={handleChange}/>   
            </div>
            <div>
                <label > Acerca Del Profesor: </label> 
                <textarea name='about_teacher' onChange={handleChange}/>    
            </div>    
            <div>
                <label > Precio(P/H): </label> 
                <textarea name='value' onChange={handleChange}/>    
            </div> 
            
            <div>{/*BUTTONS*/ }
                 <label > Nivel: </label>           
      <button
        className={selectedBtns.includes("Primaria") ? "seleccionado" : ""}
        onClick={() => seleccionarBoton("Primaria")}> Primaria </button>
      <button
        className={selectedBtns.includes("Secundaria") ? "seleccionado" : ""}
        onClick={() => seleccionarBoton("Secundaria")}> Secundaria </button>
      <button
        className={selectedBtns.includes("Universidad") ? "seleccionado" : ""}
        onClick={() => seleccionarBoton("Universidad")}> Universidad </button>
     
   
             </div>

                <div>
                <label > Materia: </label> 
                <select onChange={handleSelect}>
                {lesson.map((mat)=>(
                    <option value={mat.name}>{mat.name} </option>
                ))}
            </select>    
                </div>
                
            <button type='submit'>Actualizar Datos</button>
            </form>
        </div>
    )
};

export default FormAnuncio;