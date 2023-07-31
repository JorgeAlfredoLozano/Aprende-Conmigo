import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { sendPhoto } from '../../Redux/actions';
import { useDispatch } from 'react-redux';
import style from './SendPhoto.module.css';

const VITE_IMGBB_KEY = import.meta.env.VITE_IMGBB_KEY

const SendPhoto = (props) => {
  const email = localStorage.getItem('currentUser');
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      await axios
        .post('https://api.imgbb.com/1/upload', formData, {
          params: {
            key: VITE_IMGBB_KEY,
          },
        })
        .then((response) => {
          const sendImg = {
            assets: response.data.data.url,
          };
          dispatch(sendPhoto(email, sendImg));
          props.onSubmit();
          alert('¡Imagen actualizada!');
        })
        .catch((error) => {
          console.error('Hubo un error al subir la imagen:', error);
        });
    }
  };

  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (selectedFile) {
      handleUpload();
    }
  }, [selectedFile]);

  return (
    <div className={style.contenedor}>
      <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }}/>
      <p className={style.boton} onClick={() => fileInputRef.current.click()}>Cambiar avatar</p>
    </div>
  );
};

export default SendPhoto;
