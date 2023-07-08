import React, { useState } from 'react';
import axios from 'axios';
import {sendPhoto} from '../../Redux/actions';
import { useDispatch } from 'react-redux';
const apiKey = '9f6c6345c293cd9ea633a1d2e70f1b01';

const SendPhoto = (props) => {
  const email=localStorage.getItem("currentUser")
  
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      axios
        .post('https://api.imgbb.com/1/upload', formData, {
          params: {
            key: apiKey
          }
        })
        .then((response) => {
          const sendImg={
            assets:response.data.data.url
          }
          dispatch(sendPhoto(email, sendImg));
          props.onSubmit()
          alert("Foto Actualizada!!");
        })
        .catch((error) => {
          console.error('Hubo un error al subir la imagen:', error);
        });
    }
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Cargar foto</button>     
    </div>
  );
};

export default SendPhoto;