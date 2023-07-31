import { useDispatch,useSelector } from "react-redux";
import {putVerificationUserDb} from '../../Redux/actions';
import { useEffect } from "react";
const Verification = () => {
    const dispatch=useDispatch() 
    const verification=useSelector((state)=>state.verification)
    const urlSearchParams = new URLSearchParams(window.location.search);
    const token = urlSearchParams.get('token');
    const email = urlSearchParams.get('email');
    const data={token:token,email:email}
    useEffect(()=>{
        
      },[verification]);
      useEffect(()=>{
        if(token){dispatch(putVerificationUserDb(data))}
      },[dispatch]);
    return(
        <div>
            {verification && verification.data==="Usuario verificado exitosamente"?
             <h1>verificadooooo</h1>
            :verification && verification.data==="Token inválido o expirado"?
          <h1>hubo un error intente de nuevo mas tarde..</h1>
          :<h1>loading...</h1> }
          <a href="">volver</a>
        </div>
    )
}
export default Verification;