import React from 'react';
import styles from './Steps.module.css'; 
import imgSearch from '../../assets/imagenes/search.gif';
import imgEscoger from '../../assets/imagenes/pick.gif';
import imgAprende from '../../assets/imagenes/wachin.gif';
import imgPagar from '../../assets/imagenes/cash.gif';

const Steps = () => {

    
  return (
    <div className={styles['steps-container']}>
      <h3 className={styles.title}>Fácil, Rápido y Seguro</h3>
      <h3 className={styles.subtitle}>¡Descubre cómo utilizar Aprende Conmigo para encontrar tu profesor ideal!</h3>
      <div className={styles.columns}>
        <div className={styles.column}>
        <img src={imgSearch} style={{height:"120px", width:"120px"}} alt="search"/>
          <h4 className={styles['column-title']}>Busca</h4>
          <div className={styles['column-text']}>Utiliza nuestros filtros por materia para encontrar la clases que necesitas al precio mas conveniente.</div>
        </div>
        <div className={styles.column}>
        <img src={imgEscoger} style={{height:"120px", width:"120px"}} alt="escoge"/>
          <h4 className={styles['column-title']}>Escoge</h4>
          <div className={styles['column-text']}>Una vez encontrada tu clase ideal, contacta al profesor y descarta tus dudas.</div>
        </div>
        <div className={styles.column}>
        <img src={imgPagar} style={{height:"120px", width:"120px"}} alt="escoge"/>
          <h4 className={styles['column-title']}>Paga</h4>
          <div className={styles['column-text']}>Luego pagas la cantidad de horas coordinadas previamente en el contacto con el profesor.</div>
        </div>
        <div className={styles.column}>
        <img src={imgAprende} style={{height:"120px", width:"120px"}} alt="escoge"/>
          <h4 className={styles['column-title']}>Aprende</h4>
          <div className={styles['column-text']}>Y llegó el momento de aprender, de manera fácil, rápida y segura.</div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
