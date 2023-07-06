import {useState} from "react";
import {putUser} from '../Redux/action'
import {useDispatch} from 'react-redux';


export default function UserUpdate(){
    const dispatch =useDispatch();



    
    const [input,setInput]=useState({
        name:'',
        date:'',
        gender:'',
        phone:''   
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
        alert("Datos Actualizados!!")
        setInput({
            name:'',
            date:'',
            gender:'',
            phone:''                   
        })      
    };


return(
    <div className={style.container}>
       
       

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
            <button type='submit'>Actualizar Datos</button>           
            </form>
       
    </div>
)

}





