import { useEffect, useState } from "react"
import { useDispatch,useSelector } from 'react-redux';
import {postNewUserDb} from '../../Redux/actions';
const RegistrationForm = ()=>{
    const dispatch=useDispatch()
    const response = useSelector((state) => state.register)
    const [input, setInput] = useState({
        name:'',
        email:'',
        password:''
    })
    useEffect(() => {
       
      }, [response]);
    const handleInput = (event)=>{
        const { name, value } = event.target;
        setInput((prevState) => ({
            ...prevState,
            [name]: value
          }));
    };
    const handleSubmit=(event)=>{
    event.preventDefault();
    dispatch(postNewUserDb(input));
    setInput({});
    };
    if(response){
    }
    return(
        <div>
            <label >Ingrese su nombre</label>
            <input type="text" name="name" onChange={(event)=>handleInput(event)}/>
            <label >Ingrese su correo</label>
            <input type="email" name="email" onChange={(event)=>handleInput(event)} />
            <label >Ingrese su contraseña</label>
            <input type="password" name="password" onChange={(event)=>handleInput(event)} />
            <button onClick={(event)=>handleSubmit(event)}>Crear cuenta</button>
        </div>
    )
}

export default RegistrationForm;