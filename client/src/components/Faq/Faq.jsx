import React, { useState, useEffect } from "react";
import style from './Faq.module.css';
import dataFq from './dataFq';
import WhatsAppButton from '../WhatsappBtn/WhatsappBtn';
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

const Faq = () => {
  const [accordion, setActiveAccordion] = useState(-1);
  const [pepito, setPepito] = useState(-1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Para un scroll suave, añade esta opción
        });

        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
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
    {isLoading ? <LoadingAnimation /> :
      <div className={style.container}>
        
        <div>       
          <p className={style.texto} style={{ fontSize:"30px",  color:"rgb(35, 128, 211)", fontFamily:"Poppins-Bold", width:"100%", textAlign:"center"}}>Preguntas frecuentes</p>
        </div>
        <div className={style.accordion__faq}>
          { dataFq.map((item, index) =>
              <div key={index} onClick={() => toggleAccordion(index)}>

                <div className={style.accordion__faq_heading} >
                  <p className={accordion === index ? style.active : style.nada}
                  style={{ fontSize:"30px",  color:"rgb(35, 128, 211)", fontFamily:"Poppins-Medium", margin:"0%"}}>{item.grupo}</p>
                      <div>
                        {accordion === index ?
                          <span className={style.verticle} style={{ fontSize:"25px",  color:"rgb(35, 128, 211)"}}>-</span> 
                          : <span className={style.horizental} style={{ fontSize:"25px",  color:"rgb(35, 128, 211)"}}>+</span>}
                      </div>
                </div>

                  <div className={style.accordion__faq_heading}>
                  <p className={accordion === index ? style.active : style.inactive} 
                  style={{ fontSize:"20px",  color:"rgb(35, 128, 211)"}}>
                     {item.preguntasRespuestas.map((preguntita, preguntaIndex) => (

                        <div style={{display:"flex", flexDirection:"column", gap:"1em"}} key={preguntaIndex} onClick={(event)=>toggleAccordionDos(preguntaIndex, event)}
                         >
                          <div className={style.linea} style={{display:"flex", flexDirection:"row", marginTop:"25px"}}>
                          <div >
                           <div style={{color:"rgba(35, 128, 211, 0.650)", fontFamily:"Poppins-Medium"}}>{preguntita.pregunta}</div> 
                           
                          </div>
                                <div >
                                  {pepito === preguntaIndex ?
                                    <span className={style.verticle} ></span> 
                                    : <span className={style.horizental}></span>}
                                </div>
                                </div>
                                <div>
                                  <p className={pepito === preguntaIndex ?  style.active : style.inactive }
                                 style={{ fontSize:"14px",  color:"#3A4D61", backgroundColor:"white", borderRadius:"1em", padding:"15px", marginBottom:"15px"}}>
                                  {preguntita.respuesta}
                                  </p>
                                </div>

                          </div>))}    
                  </p>
                  </div>
             </div> 
            )
          }
          <section className={style.botonW}>
          <WhatsAppButton /></section>
        </div>
      </div>}
    </>
  );

};

export default Faq;