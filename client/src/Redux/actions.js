import axios from 'axios';

export const userData =(user)=> {
  axios.post('http://localhost:3001/user/login',  user )
    .catch(error => {
      console.error(error);
    });
};

export const putUser=(payload)=>{
  return async function(dispatch){
     const response=await axios.put("ruta", payload)
    return dispatch({
      type:'PUT_USER',
      payload: response
    });
   
   }
};

