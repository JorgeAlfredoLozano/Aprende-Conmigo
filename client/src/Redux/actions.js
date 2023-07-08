import axios from 'axios';

export const userData =(user)=> {
        axios.post('http://localhost:3001/user/login',  user )       
};

export const putUser = (email, input) => {
   return async function (dispatch) {
     try {
       const response = await axios.put(`http://localhost:3001/user/update/${email}`, input); //envio el cambio
       const updatedUser = await axios.get(`http://localhost:3001/user/update/${email}`); //recibo el cambio
       const updatedUserInfo = updatedUser.data;
 
       return dispatch({
         type: 'PUT_USER',
         payload: updatedUserInfo, //aca se actualiza la store cuando llega al reducer
       });
     } catch (error) {
       throw 'Ha ocurrido un error al actualizar los datos'
     }
   };
 };

export const sendPhoto=(email, payload)=>{
   return async function(dispatch){
      const response=await axios.put("http://localhost:3001/user/update/img/"+ email, payload)
     return dispatch({
       type:'SEND_PHOTO',
       payload: response
     });  
    }
 };

export const getUser =(email)=>{   
  return async (dispatch) => {
     const {data} = await axios(`http://localhost:3001/user/update/${email}`);
        return dispatch({
           type: 'GET_USER',
           payload: data,
        });
  };
};
