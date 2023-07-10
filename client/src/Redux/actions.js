import axios from 'axios';
//users
export const checkUserData = (user)=> {
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
export const sendPhoto = (email, payload)=>{
   return async function(dispatch){
      const response=await axios.put("http://localhost:3001/user/update/img/"+ email, payload)
     return dispatch({
       type:'SEND_PHOTO',
       payload: response
     });  
    }
};
export const getUser = (email)=>{
   
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/user/update/${email}`);
      const userData = data; // Obtener los datos del usuario desde la respuesta
      return dispatch({
        type: 'GET_USER',
        payload: userData,
      });
    } catch (error) {
      throw 'Ha ocurrido un error al obtener los datos del usuario';
    }
  };
};
//publications
export const sendAnuncio = (email, aux )=>{
   return async function(dispatch){
      const response=await axios.post("http://localhost:3001/publication/save/"+ email, aux)
     return dispatch({
       type:'SEND_ANUNCIO',
       payload: response
     });  
    };
};
//lessons
export const getLesson = ()=>{
   
  return async (dispatch) => {
     const {data} = await axios.get(`http://localhost:3001/lesson/all`);
        return dispatch({
           type: 'GET_LESSON',
           payload: data,
        });
  };
};

