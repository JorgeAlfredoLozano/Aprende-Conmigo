import React from 'react';

const WhatsAppButton = () => {
const phoneNumber = '3327452048'; 
const message = 'Hola!, Me gustaira recibir ayuda'; 

const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
    <button>
        <span>¿Necesitas mas ayuda?, Contactanos por WhatsApp!</span>
    </button>
    </a>
);
};

export default WhatsAppButton;