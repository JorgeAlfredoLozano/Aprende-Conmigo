import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';


function App() {
const [user,setUser]=useState({});

  function handleCallbackResponse(response) {
    console.log("Encoded JWR token: " + response.credential)
    var userObject=jwt_decode(response.credential);
    console.log(userObject)
    setUser(userObject);
    document.getElementById("signInDiv").hidden=true;
};

function handleSignOut(event){
  setUser({});
  document.getElementById("signInDiv").hidden=false;
}

useEffect(()=>{
    /*global google*/
    google.accounts.id.initialize({
        client_id:"52480844695-hlq23m4g83o1kfctchmfaqa6jf1k8co8.apps.googleusercontent.com",
        callback:handleCallbackResponse
    });
    google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        {theme:"outline", size:"large"}
    );
    google.accounts.id.prompt();
},[]);
// si no existe el usuario: sign in button
// si existe el usuario: mostrar el boton log out


  return (
    <div >
      <button id="signInDiv"></button>

      {Object.keys(user).length != 0 &&
      <button onClick={(e)=>handleSignOut(e)}>sign Out</button>
      } 
     

      { user && 
      <div>
        <img src={user.picture}/>
        <h3>{user.name}</h3>
      </div>
        }
    </div>
  );
}

export default App;//A
