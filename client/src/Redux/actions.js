import axios from 'axios';

export default function userData (user) {
  axios.post('http://localhost:3001/user/login',  user ) // ak va la ruta donde quieran recibir la wea
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

