import React, { useState } from 'react';
import whaImage from '../../assets/imagenes/whatsapp-icon-blue.png';
import whaImageH from '../../assets/imagenes/whatsapp-icon-black.png';

const WhatsAppButton = () => {
  const phoneNumber = '+523311023777';
<<<<<<< HEAD
  const message = 'necesito ayuda';
=======
  const message = 'Necesito ayuda';
>>>>>>> 6dd6163df23a82eeb0bd06c26728b08ba47ea769
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <button
        style={{ display: "flex", alignItems: "center" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={hovered ? whaImageH : whaImage}
          alt="WhatsApp"
          style={{ width: '60px', height: '60px', marginRight: "10px", transition:"0.3s linear" }}
        />
        <span style={{ margin: "0%" }}>¿Necesitas más ayuda? ¡Contáctanos por WhatsApp!</span>
      </button>
    </a>
  );
};

export default WhatsAppButton;
