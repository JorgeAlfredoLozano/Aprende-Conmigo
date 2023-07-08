import React, { useState } from 'react';
import axios from 'axios';
import {sendPhoto} from '../../Redux/actions';
import { useDispatch } from 'react-redux';
const apiKey = '9f6c6345c293cd9ea633a1d2e70f1b01';

const SendPhoto = () => {
  
  const dispatch = useDispatch();
  const [uploadedImage, setUploadedImage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
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
          dispatch(sendPhoto(sendImg));
          setUploadedImage(response.data.data.url);
          alert("Foto Actualizada!!");
        })
        .catch((error) => {
          console.error('Hubo un error al subir la imagen:', error);
        });
    }
  };
  return (
    <div>
      <h1>Cargar foto a ImgBB</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Cargar foto</button>
      {uploadedImage && (
        <div>
          <h2>Imagen subida</h2>
          <img src={uploadedImage} alt="Page not found (404)" width="300" height="250" />
        </div>
      )}

     
    </div>
  );
};

export default SendPhoto;