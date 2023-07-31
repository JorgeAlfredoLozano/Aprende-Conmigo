
const ABSTRACT_KEY = import.meta.env.VITE_ABSTRACT_KEY

const EmailValidate=(email)=>{
let response=false;
const url = `https://emailvalidation.abstractapi.com/v1/?api_key=${ABSTRACT_KEY}&email=${email}`

const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
        response = JSON.parse(xmlHttp.responseText);
    }
    xmlHttp.open("GET", url, true); // true for asynchronous
    xmlHttp.send(null);
   
    
if(response === false){
    return 'Error de conección intente de nuevo mas tarde'
} else {
    if(response.deliverability==="DELIVERABLE"){
        return true
    }
    else{
        return 'No obtuvimos respuesta de su servidor de correo, revise bien su dirección de email y vuelva a intentarlo.'
    }
}
}
export default EmailValidate;
