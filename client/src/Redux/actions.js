import axios from 'axios';

export function userData (user) {
  axios.post('http://localhost:3001/user/login',  user )
    .catch(error => {
      console.error(error);
    });
};

export function putUser(payload) {
  return async function(dispatch) {
    try {
      const response = await axios.put("ruta", payload);

      dispatch({
        type: 'PUT_USER',
        payload: response.data // Accede a los datos de la respuesta
      });
    } catch (error) {
      console.error(error);
    }
  }
}

