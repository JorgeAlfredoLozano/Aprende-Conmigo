import axios from 'axios';

export const userData =(user)=> {
        axios.post('http://localhost:3001/user/login',  user )       
};

export const putUser=(email, input)=>{
  return async function(dispatch){
     const response=await axios.put(`http://localhost:3001/user/update/${email}`, input)
    return dispatch({
      type:'PUT_USER',
      payload: response
    });  
   }
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

export const getUser =()=>{
   
  return async (dispatch) => {
     const {data} = await axios(`http://localhost:3001/user/update/`+ hhh);
        return dispatch({
           type: 'GET_USER',
           payload: data,
        });
  };
};
