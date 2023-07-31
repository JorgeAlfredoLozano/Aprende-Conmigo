import { useState } from "react";
import EmailValidate from "./Email";

const Email = () => {
const [email,setEmail] = useState("")

const handleInput=(event)=>{
    setEmail(event.target.value)
}
const handleValidar = () => {
    const response = EmailValidate(email)
    
}

return (
    <div>
        <label >holaaaa</label>
        <input onChange={handleInput}></input>
        <button onClick={handleValidar}>Validar</button>
        {(response === true)}
    </div>
)
}
export default Email;