import React from 'react';
import styles from './Steps.module.css'; 
import imgSearch from '../../assets/imagenes/search.png';
import imgEscoger from '../../assets/imagenes/escoger.png';
import imgAprende from '../../assets/imagenes/aprende.png';
import imgPagar from '../../assets/imagenes/pagar.png';

const Steps = () => {

    
  return (
    <div className={styles['steps-container']}>
      <div className={styles.title}>Fácil, Rápido y Seguro</div>
      <div className={styles.subtitle}>Descubre como utilizar Aprende Conmigo web para encontrar tu profesor ideal.</div>
      <div className={styles.columns}>
        <div className={styles.column}>
        <img src={imgSearch} style={{marginTop:"40px", height:"50%", width:"50%"}} alt="search" />
          <div className={styles['column-title']}>Busca</div>
          <div className={styles['column-text']}>Utiliza nuestros filtros por materia para encontrar la clases que necesitas al precio mas conveniente.</div>
        </div>
        <div className={styles.column}>
        <img src={imgEscoger} style={{height:"60%", width:"60%"}} alt="escoge" />
          <div className={styles['column-title']}>Escoge</div>
          <div className={styles['column-text']}>Una vez encontrada tu clase ideal, contacta al profesor y descarta tus dudas.</div>
        </div>
        <div className={styles.column}>
        <img src={imgPagar} style={{height:"60%", width:"60%"}} alt="escoge" />
          <div className={styles['column-title']}>Paga</div>
          <div className={styles['column-text']}>Luego pagas la cantidad de horas coordinadas previamente en el contacto con el profesor.</div>
        </div>
        <div className={styles.column}>
        <img src={imgAprende} style={{height:"60%", width:"60%"}} alt="escoge" />
          <div className={styles['column-title']}>Aprende</div>
          <div className={styles['column-text']}>Y llegó el momento de aprender, de manera fácil, rápida y segura.</div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
