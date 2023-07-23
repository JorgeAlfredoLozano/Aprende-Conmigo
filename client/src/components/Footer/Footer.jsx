import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columns}>
      <div className={styles.column}>
          <h3>Integrantes</h3>
          <p><a href="https://www.linkedin.com/in/camilacufre/" target="_blank" rel="noopener noreferrer" className={styles.link}>Camila Cufré</a></p>
          <p><a href="https://www.linkedin.com/in/antonella-carmona-5a166520a/" target="_blank" rel="noopener noreferrer" className={styles.link}>Ivana Carmona</a></p>
          <p><a href="https://www.linkedin.com/in/bachir-nasser-83b1b3263/" target="_blank" rel="noopener noreferrer" className={styles.link}>Bachir Nasser</a></p>
          <p><a href="https://www.linkedin.com/in/jorgealozano/" target="_blank" rel="noopener noreferrer" className={styles.link}>Jorge Lozano</a></p>
          <p><a href="https://www.linkedin.com/in/ali-garay-vega-179635262/" target="_blank" rel="noopener noreferrer" className={styles.link}>Alí Garay Vega</a></p>
          <p><a href="https://www.linkedin.com/in/marcelo-a-diaz-6a7926223/" target="_blank" rel="noopener noreferrer" className={styles.link}>Marcelo Díaz</a></p>
          <p><a href="https://www.linkedin.com/in/alejandro-garcia-6179b9260/" target="_blank" rel="noopener noreferrer" className={styles.link}>Alejandro García</a></p>
        </div>
        <div className={styles.column}>
          <h3>Contacto</h3>
          <p>aprendeconmigohenry@gmail.com</p>
          <p>(+54) 0800-APRENDE</p>
        </div>
        <div className={styles.column}>
          <h3>Acerca de Aprende Conmigo</h3>
          <p>¿Quiens somos?</p>
          <p>Nuestros valores</p>
          <p>Política de Privacidad</p>
        </div>
        <div className={styles.column}>
          <h3>Asistencia</h3>
          <p>¿Necesitas ayuda?</p>
          <p>Preguntas Frecuentes</p>
        </div>
      </div>
      <footer className={styles.nav}>
        <p>© 2023 Aprende Conmigo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Footer;
