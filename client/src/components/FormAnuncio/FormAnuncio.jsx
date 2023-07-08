import NavBar from "../NavBar/NavBar";
import { useState } from "react";
import { useDispatch } from "react-redux";


const FormAnuncio = () => {
    const [input,setInput]=useState()

    function handleChange(event) {
        const { name, value } = event.target;
        setInput({
          ...state,
          [name]: value,
        });
      }

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
            
            <div>
                 <label > Nivel: </label> 
                <button name='grade' onChange={handleChange}> </button> 
                  
            </div>
                  
            <button type='submit'>Actualizar Datos</button>
            </form>
        </div>
    )
}

export default FormAnuncio;