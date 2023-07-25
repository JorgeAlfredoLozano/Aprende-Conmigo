import React from 'react';
import whaImage from '../../assets/imagenes/whatsImage.png';

const WhatsAppButton = () => {
const phoneNumber = '+523311023777'; 
const message = 'ayuda'; 

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
    <button>
    <img src={whaImage} alt="WhatsApp" style={{ width: '60px', height: '60px' , marginRight: '10px' }} />
        <span>¿Necesitas mas ayuda?, Contactanos por WhatsApp!</span>
    </button>
    </a>
);
};

export default WhatsAppButton;