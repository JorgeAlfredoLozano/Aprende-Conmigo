import axios from 'axios';

export const userData =(user)=> {
        axios.post('http://localhost:3001/user/login',  user )       
};

let email=localStorage.getItem("currentUser")

export const putUser=(email, user)=>{
  return async function(dispatch){
     const response=await axios.put(`http://localhost:3001/user/update/${email}`, user)
    return dispatch({
      type:'PUT_USER',
      payload: response
    });  
   }
};

export const getUser =()=>{
   
  return async (dispatch) => {
     const {data} = await axios(`http://localhost:3001/user/update/${email}`);
        return dispatch({
           type: 'GET_USER',
           payload: data,
        });
  };
};
