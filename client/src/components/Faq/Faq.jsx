import React, { useState, useEffect } from "react";
import style from './Faq.module.css';
import dataFq from './dataFq';
import WhatsAppButton from '../WhatsappBtn/WhatsappBtn'

const Faq = () => {
  const [accordion, setActiveAccordion] = useState(-1);
  const [pepito, setPepito] = useState(-1);

  useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Para un scroll suave, añade esta opción
        });
      }, []);

  function toggleAccordion(index) {
    setActiveAccordion((prevAccordion) => (prevAccordion === index ? -1 : index));
  };

  function toggleAccordionDos(preguntaIndex, event) {
    event.stopPropagation()
    // Si haces clic nuevamente en la misma pregunta, la cierra
  setPepito((prevPepito) => (prevPepito === preguntaIndex ? -1 : preguntaIndex));
}

  return (
    <>
      <div className={style.container}>
        <div>       
          <p className={style.texto} style={{ fontSize:"30px",  color:"#3A4D61", fontWeight:"900"}}>Preguntas frecuentes</p>
        </div>
        <div className={style.accordion__faq}>
          { dataFq.map((item, index) =>
              <div key={index} onClick={() => toggleAccordion(index)}>

                <div className={style.accordion__faq_heading} >
                  <p className={accordion === index ? style.active : style.nada}
                  style={{ fontSize:"20px",  color:"#3A4D61", fontWeight:"900"}}>{item.grupo}</p>
                      <div>
                        {accordion === index ?
                          <span className={style.verticle} style={{ fontSize:"15px",  color:"#3A4D61"}}>-</span> 
                          : <span className={style.horizental} style={{ fontSize:"15px",  color:"#3A4D61"}}>+</span>}
                      </div>
                </div>

                
         {/* ------------------------------------------------------------------- */}
                   <div className={style.accordion__faq_heading}>
                  <p className={accordion === index ? style.active : style.inactive} 
                  style={{ fontSize:"16px",  color:"#3A4D61", fontWeight:"900"}}>
                     {item.preguntasRespuestas.map((preguntita, preguntaIndex) => (

                        <div key={preguntaIndex} onClick={(event)=>toggleAccordionDos(preguntaIndex, event)}
                         >
                          <div >
                           <div >{preguntita.pregunta}</div> 
                           
                          </div>
                                <div >
                                  {pepito === preguntaIndex ?
                                    <span className={style.verticle} >-</span> 
                                    : <span className={style.horizental}>+</span>}
                                </div>

                                <div>
                                  <p className={pepito === preguntaIndex ?  style.active : style.inactive }
                                 style={{ fontSize:"14px",  color:"#3A4D61", fontWeight:"900"}}>
                                  {preguntita.respuesta}
                                  </p>
                                </div>

                          </div>))}    
                  </p>
                  </div>
             </div> 
            )
          }
          <WhatsAppButton />
        </div>
      </div>
    </>
  );

};

export default Faq;