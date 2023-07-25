import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.columns}>
      <div className={styles.column}>
          <h3 className={styles.titulo}>Integrantes</h3>
          <p><a href="https://www.linkedin.com/in/camilacufre/" target="_blank" rel="noopener noreferrer" className={styles.link}>Camila Cufré</a></p>
          <p><a href="https://www.linkedin.com/in/antonella-carmona-5a166520a/" target="_blank" rel="noopener noreferrer" className={styles.link}>Ivana Carmona</a></p>
          <p><a href="https://www.linkedin.com/in/bachir-nasser-83b1b3263/" target="_blank" rel="noopener noreferrer" className={styles.link}>Bachir Nasser</a></p>
          <p><a href="https://www.linkedin.com/in/jorgealozano/" target="_blank" rel="noopener noreferrer" className={styles.link}>Jorge Lozano</a></p>
          <p><a href="https://www.linkedin.com/in/ali-garay-vega-179635262/" target="_blank" rel="noopener noreferrer" className={styles.link}>Alí Garay Vega</a></p>
          <p><a href="https://www.linkedin.com/in/marcelo-a-diaz-6a7926223/" target="_blank" rel="noopener noreferrer" className={styles.link}>Marcelo Díaz</a></p>
          <p><a href="https://www.linkedin.com/in/alejandro-garcia-6179b9260/" target="_blank" rel="noopener noreferrer" className={styles.link}>Alejandro García</a></p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.titulo}>Contacto</h3>
          <p><a className={styles.link} href="mailto:aprendeconmigohenry@gmail.com?subject=Contacto%20desde%20mi%20sitio%20web&amp;body=Hola,%0D%0A%0D%0AQuería contactar con ustedes para obtener más información.%0D%0A%0D%0AGracias.%0D%0A%0D%0ASaludos">aprendeconmigohenry@gmail.com</a></p>
          <p>(+54) 0800-APRENDE</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.titulo}>Acerca de</h3>
          <p><a href="/about" target="_blank" rel="noopener noreferrer" className={styles.link}>¿Quienes Somos?</a></p>
          <p>Nuestros valores</p>
          <p>Política de Privacidad</p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.titulo}>Asistencia</h3>
          <p><a className={styles.link} href="mailto:aprendeconmigohenry@gmail.com?subject=Contacto%20desde%20mi%20sitio%20web&amp;body=Hola,%0D%0A%0D%0AQuería contactar con ustedes para obtener más información.%0D%0A%0D%0AGracias.%0D%0A%0D%0ASaludos">¿Necesitas ayuda?</a></p>
          <p><a href="/Preguntas" target="_blank" rel="noopener noreferrer" className={styles.link}>Preguntas Frecuentes</a></p>
        </div>
      </div>
      <footer className={styles.nav}>
        <p>© 2023 Aprende Conmigo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Footer;