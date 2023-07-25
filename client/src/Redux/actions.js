import axios from 'axios';
//users
export const checkUserData = (user)=> {
  axios.post('http://localhost:3001/user/login', user )       
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
      const response=await axios.put(`http://localhost:3001/user/update/img/${email}`, payload)
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
export const sendAnuncio = (email, input )=>{
   return async function(dispatch){
      const response=await axios.post(`http://localhost:3001/publication/save/${email}`, input)
     return dispatch({
       type:'SEND_ANUNCIO',
       payload: response
     });  
    };
};
export const updateAnuncio = (id, aux )=>{
  return async function(dispatch){
     const response=await axios.put(`http://localhost:3001/publication/save/${id}`, aux)
    return dispatch({
      type:'UPDATE_ANUNCIO',
      payload: response
    });  
   };
};
export const getAllPublication = (email)=>{
  return async function(dispatch){
     const response=await axios.get(`http://localhost:3001/publication/get/${email}`)
    return dispatch({
      type:'GET_ALL_PUBLICATION',
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
//cami
export const getAllAnuncios = (page=0)=>{

  return async function(dispatch){
     const response=await axios.get(`http://localhost:3001/publication/get/anouncements?page=${page}`)
    return dispatch({
      type:'GET_ALL_ANUNCIOS',
      payload: response
    });  
   };
};
export const getUserById = (id) => {
  return async function(dispatch){
    const response=await axios.get(`http://localhost:3001/user/get/${id}`)
   return dispatch({
     type:'GET_USER_BY_ID',
     payload: response
   });  
  };
}
export const getAssetsById = async (id) => {
  try {
    const response = await axios
      .get(`http://localhost:3001/user/get/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
//Messages
export const getAllMessages = (id)=>{ // Trae todos los mensajes del usuario ID
  return async function(dispatch){
     const response=await axios.get(`http://localhost:3001/message/getallmessage/${id}`)
    return dispatch({
      type:'GET_ALL_MESSAGES',
      payload: response.data
    });  
   };
};
export const getNotReadMessages = (idSend,idReceived)=>{ // Trae todos los mensajes del usuario ID
  return async function(dispatch){
     const response=await axios.get(`http://localhost:3001/message/notread/${idSend}/${idReceived}`)
    return dispatch({
      type:'GET_NOT_READ',
      payload: response.data
    });  
   };
};
export const sendChat = ( send )=>{ // Enviar el chat a la bd
  return async function(dispatch){
     const response=await axios.post(`http://localhost:3001/message/sendmessage`, send)
    return dispatch({
      type:'SEND_CHAT',
      payload: response
    });  
   };
};
export const putSeen = ( idSend,idReceived )=>{ // Enviar el chat a la bd
  return async function(dispatch){
     const response=await axios.put(`http://localhost:3001/message/seen/` + idSend + '/' + idReceived)
    return dispatch({
      type:'PUT_SEEN',
      payload: response
    });  
   };
};
//Purchases
export const sendPurchase = (info)=>{ // Trae todos los mensajes del usuario ID
  return async function(dispatch){
     const response=await axios.post(`http://localhost:3001/purchase/`,info)
    return dispatch({
      type:'SEND_PURCHASES',
      payload: response.data
    });  
   };
};
export const getAllPurchases = (id)=>{ // Trae todos los mensajes del usuario ID
  return async function(dispatch){
     const response=await axios.get(`http://localhost:3001/purchase/getuser/${id}`)
    return dispatch({
      type:'GET_ALL_PURCHASES',
      payload: response.data
    });  
   };
};
export const getAllSales = (id)=>{ // Trae todas las ventas de un usuario(profe)
  return async function(dispatch){
     const response=await axios.get(`http://localhost:3001/purchase/getsale/${id}`)
    return dispatch({
      type:'GET_ALL_SALES',
      payload: response.data
    });  
   };
};
//Reviews
export const getReviews = ( idPub )=>{ // traer las reviews de una publi
  return async function(dispatch){
     const response=await axios.get(`http://localhost:3001/review/get/`+ idPub)
    return dispatch({
      type:'GET_REVIEWS',
      payload: response
    });  
   };
};
export const postReview = ( comment, rating, idPub, idUser ) => { // postea una review
  return async function (dispatch) {
    const data = {
      comment,
      rating,
      idPub,
      idUser
    }
    const response = await axios.post(`http://localhost:3001/review`, data)
    return dispatch ({
      type: 'POST_REVIEW',
      payload: response
    })
  }
}

export const getAllUsers = ()=>{
  return async function(dispatch){
     const response= await axios.get(`http://localhost:3001/user/alluser`)
    return dispatch({
      type:'GET_ALL_USERS',
      payload: response
    });  
   };
};

export const putUserEmail = (email, aux )=>{
  return async function(dispatch){
     const response=await axios.put(`http://localhost:3001/user/update/${email}`, aux)
    return dispatch({
      type:'PUT_USER_EMAIL',
      payload: response
    });  
   };
};