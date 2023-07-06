import { putUser } from '../../Redux/actions';
import React, { useState } from "react";
import { connect } from "react-redux";
import style from './FormUpdate.module.css'

const FormUpdate = (props) => {

    const [input,setInput]=useState({
        name:'',
        date:'',
        gender:'',
        phone:''   
    });
    console.log(input)

    function handleChange(event){
        setInput({
            ...input,
            [event.target.name]:event.target.value
        });
        console.log(input)
    };

    function handleSubmit(event){
        event.preventDefault();
        // dispatch(putUser(input)) //comentado para acomodarlo en la maqueta
        props.onSubmit()
        alert("Datos Actualizados!!")
        setInput({
            name:'',
            date:'',
            gender:'',
            phone:''
        })
    };

return(
    <div>
       
        <form onSubmit={(event)=>handleSubmit(event)}>
            <div>
                {/* <label > Name: </label> */}
                <input className={style.name} type="text" name='name' value={input.name} onChange={(event)=>handleChange(event)}/>                   
            </div>              
            <div>
                {/* <label > Date: </label> */}
                <input className={style.date} type="date" name='date' value={input.date} onChange={(event)=>handleChange(event)} />   
            </div>
            <div>
                {/* <label > Gender: </label> */}
                <select className={style.gender} name='gender' value={input.gender} onChange={(event)=>handleChange(event)}>
                  <option disabled selected>Select a Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
            </div>
            <div>
                {/* <label > Phone Number: </label> */}
                <input className={style.phone} type="text" name='phone' value={input.phone} onChange={(event)=>handleChange(event)}/>   
            </div>
            <button type='submit'>Actualizar Datos</button>           
            </form>
       
    </div>
)
}

export default  connect(null, { putUser })(FormUpdate);



