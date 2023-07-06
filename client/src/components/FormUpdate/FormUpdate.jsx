

import {useState,useEffect} from "react";

import {Link,useHistory} from 'react-router-dom';

import {postDogs,getAllTemperaments} from '../Redux/action'

import {useDispatch, useSelector} from 'react-redux';
import SendPhoto from '../SendPhoto/SendPhoto';



export default function UserUpdate(){
    const dispatch =useDispatch();
    const history=useHistory();
    const temperaments=useSelector((state)=>state.allTemperaments)
    const [errors,setErrors]=useState({});
    
    const [input,setInput]=useState({
        name:'',
        date:'',
        gender:'',
        phone:'',
        image:'',
        temperament:[]
       
    });
     
    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]:e.target.value
        });
        console.log(input)
    };

    function handleSubmit(e){
        e.preventDefault();
        dispatch(putUser(input))
        alert("User Creado!!")
        setInput({
            name:'',
            height:'',
            weight:'',
            life_span:'',
            image:'',
            temperament:[]          
        })      
    };


return(
    <div className={style.container}>
        <img src="" alt="not found..." width='600px' height='500px'/> {/* RAMSEEEEES*/}
        <div >

        <form onSubmit={(e)=> handleSubmit(e)}>
            <div>
                <label > Name: </label>
                <input type="text" value={input.name} name='name' onChange={(e)=>handleChange(e)}/>                   
            </div>              
            <div>
                <label > Date: </label>
                <input type="date" value={input.date} name='date' onChange={(e)=>handleChange(e)} />   
            </div>
            <div>
                <label > Gender: </label>
                <select name='gender' onChange={(e)=> handleChange(e)}>
                  <option disabled selected>Select a Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
            </div>
            <div>
                <label > Phone Number: </label>
                <input type="text" value={aux.phone} name='phone' onChange={(e)=> handleChange(e)} />   
            </div>
            <div>
                <label> Image: </label>
                <input type="number" value={input.assets} name='assets' onChange={(e)=>handleChange(e)}/>
                
            </div> 
            <div>
                <label >Imagen: </label>
                <input type="text" value={input.certificate} name='certificate' onChange={(e)=>handleChange(e)}/>
            </div>
                
            
            <button type='submit'>Crear Dog</button>

            </form>
        </div>
    </div>
)

}





