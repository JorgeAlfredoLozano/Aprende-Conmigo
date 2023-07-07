import React, { useState } from 'react';

const SendPhoto = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setError('');

    const reader = new FileReader();

    reader.onload = (event) => {
      setImageUrl(event.target.result);
    };

    reader.onerror = () => {
      setError('Error al leer el archivo.');
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {imageUrl && <img src={imageUrl} alt="Imagen seleccionada" width='150px' height='175px'/>}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default SendPhoto;