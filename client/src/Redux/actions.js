import axios from 'axios';

export function userData (user) {
  axios.post('http://localhost:3001/user/login',  user )
    .catch(error => {
      console.error(error);
    });
};
export function putUser(payload){
  return async function(dispatch){
     const response=await axios.put("ruta", payload)
   return response;
   }
};

