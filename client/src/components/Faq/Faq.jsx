// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
import React, { useState } from "react";


const faqData = [
    {
      question: '¿Cuál es la política de devoluciones?',
      answer: 'Nuestra política de devoluciones permite devoluciones dentro de los 30 días posteriores a la compra. Por favor, asegúrate de tener el recibo de compra.'
    },
    {
      question: '¿Cómo puedo cambiar mi contraseña?',
      answer: 'Para cambiar tu contraseña, inicia sesión en tu cuenta y ve a la sección de configuración. Allí encontrarás la opción para cambiar tu contraseña.'
    },
    {
      question: '¿Dónde puedo encontrar información de contacto?',
      answer: 'Puedes encontrar nuestra información de contacto en la página de contacto de nuestro sitio web. También puedes llamarnos al número +123456789.'
    }
    // Agrega más preguntas y respuestas según sea necesario
  ];



const Faq = () => {
  
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     // dispatch(faqData()); // Despacha al montarse
    // }, [dispatch]);

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleAnswer = (index) => {
      if (expandedIndex === index) {
        setExpandedIndex(null);
      } else {
        setExpandedIndex(index);
      }
    };

  return (
         <div>
            <h1>Preguntas frecuentes</h1>
            {faqData.map((faq, index) => (
            <div key={index}>
                <h3 onClick={() => toggleAnswer(index)}>  {faq.question}  </h3>
                {expandedIndex === index && <p>{faq.answer}</p>}
            </div>
            ))}
        </div>
        )

}
export default Faq;
