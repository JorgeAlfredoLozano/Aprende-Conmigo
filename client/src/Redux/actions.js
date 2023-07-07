import axios from 'axios';

export const userData =(user)=> {
        axios.post('http://localhost:3001/user/login',  user )       
};

let hhh=localStorage.getItem("currentUser")
export const putUser=(payload)=>{
  return async function(dispatch){
     const response=await axios.put("http://localhost:3001/user/update/"+ hhh, payload)
    return dispatch({
      type:'PUT_USER',
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
