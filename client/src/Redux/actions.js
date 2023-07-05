import axios from 'axios';

export default function userData (user) {
  axios.post('/ruta', { user }) // ak va la ruta donde quieran recibir la wea
    .catch(error => {
      console.error(error);
    });
};
