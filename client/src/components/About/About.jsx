import React, { useState } from 'react';
import styles from './About.module.css';

const About = () => {
  const participants = [
    {
      name: 'Camila Cufré',
      place: 'Argentina',
      photo: 'https://media.licdn.com/dms/image/D4D35AQG2rG8vc9As0Q/profile-framedphoto-shrink_800_800/0/1688342498366?e=1690732800&v=beta&t=YQ9qR807QOE2uoyAOs69frxHv6i-xJnlP0DTT4-G9QQ',
      LINKEDIN: 'https://www.linkedin.com/in/camilacufre/',
      icon: 'https://static.vecteezy.com/system/resources/previews/017/339/646/non_2x/linkedin-icon-free-png.png',
      cv: 'Full-Stack Developer | React.js | JavaScript | Node.js | Postgres | CSS | Freelance Illustrator | Computer Science Student'
    },
    {
      name: 'Ivana Carmona',
      place: 'Argentina',
      photo: 'https://media.licdn.com/dms/image/D4D35AQHjSmNJsA-3yw/profile-framedphoto-shrink_800_800/0/1689523582847?e=1690732800&v=beta&t=ergcF_5JUzKkTlcvH_qjvvX6mPTk3g3uEIf65XofrVM',
      LINKEDIN: 'https://www.linkedin.com/in/antonella-carmona-5a166520a/',
      icon: 'https://static.vecteezy.com/system/resources/previews/017/339/646/non_2x/linkedin-icon-free-png.png',
      cv: 'Full-Stack Developer | React.js | JavaScript | Node.js | Postgres | CSS | TypeScript'
    },
    {
      name: 'Bachir Nasser',
      place: 'Venezuela',
      photo: 'https://media.licdn.com/dms/image/D4E03AQEs-hFk4THOaA/profile-displayphoto-shrink_200_200/0/1675105858893?e=1695859200&v=beta&t=MLnHhVvQz4_8SqtE-Xm2G1Rd9YZnB0szkUBWMkRprQI',
      LINKEDIN: 'https://www.linkedin.com/in/bachir-nasser-83b1b3263/',
      icon: 'https://static.vecteezy.com/system/resources/previews/017/339/646/non_2x/linkedin-icon-free-png.png',
      cv: 'Full-Stack Developer | React.js | JavaScript | Node.js | Postgres | CSS | C'
    },
    {
      name: 'Jorge Lozano',
      place: 'Argentina',
      photo: 'https://media.licdn.com/dms/image/D4D03AQHJDDuSfAf8-w/profile-displayphoto-shrink_100_100/0/1687963946330?e=1695859200&v=beta&t=7p_GSUSv6nE8qDNzyOA7FvNowLfqespdWrxiyRXgtHA',
      LINKEDIN: 'https://www.linkedin.com/in/jorgealozano/',
      icon: 'https://static.vecteezy.com/system/resources/previews/017/339/646/non_2x/linkedin-icon-free-png.png',
      cv: 'Full-Stack Developer | Testing/QA en Codo a Codo | React.js | JavaScript | Node.js | Postgres | CSS | Técnico Superior en Seguros'
    },
    {
      name: 'Alí Garay Vega',
      place: 'México',
      photo: 'https://media.licdn.com/dms/image/D4E03AQHODismptpnew/profile-displayphoto-shrink_200_200/0/1688216322442?e=1695859200&v=beta&t=l6dzkMoOKU-frsDMs9cUASzc1PKnj72mjETIdTC2d1A',
      LINKEDIN: 'https://www.linkedin.com/in/ali-garay-vega-179635262/',
      icon: 'https://static.vecteezy.com/system/resources/previews/017/339/646/non_2x/linkedin-icon-free-png.png',
      cv: 'Full-Stack Developer | React.js | JavaScript | Node.js | Postgres | CSS'
    },
    {
      name: 'Marcelo Díaz',
      place: 'Chile',
      photo: 'https://media.licdn.com/dms/image/D4D03AQHx8ueXr0hqIQ/profile-displayphoto-shrink_100_100/0/1683830269169?e=1695859200&v=beta&t=s1V3SlnSBCJv9u226TMukKACqgtruA-DnejNI3SrA7M',
      LINKEDIN: 'https://www.linkedin.com/in/marcelo-a-diaz-6a7926223/',
      icon: 'https://static.vecteezy.com/system/resources/previews/017/339/646/non_2x/linkedin-icon-free-png.png',
      cv: 'Analista Universitario de software | Full-Stack Developer | React.js | JavaScript | Node.js | Postgres | CSS'
    },
    {
      name: 'Alejandro García',
      place: 'Colombia',
      photo: 'https://media.licdn.com/dms/image/D4E35AQHqINcRU_d7JQ/profile-framedphoto-shrink_200_200/0/1689278730479?e=1690736400&v=beta&t=dH3OuUKV4wk9pgjPb-qu2yTEUXmIT3NaM-5_JZaIz18',
      LINKEDIN: 'https://www.linkedin.com/in/alejandro-garcia-6179b9260/',
      icon: 'https://static.vecteezy.com/system/resources/previews/017/339/646/non_2x/linkedin-icon-free-png.png',
      cv: 'Full-Stack Developer | React.js | JavaScript | Node.js | Postgres | CSS'
    },

  ];

  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (index) => {
    setFlippedCards((prevFlippedCards) => ({
      ...prevFlippedCards,
      [index]: !prevFlippedCards[index],
    }));
  };

  return (
    <div className={styles['about-container']}>
      <br />
      <h2 className={styles.equipo} style={{ marginTop:"35px", fontSize: "60px", fontFamily:"Roboto"}}>Desarrolladores</h2>
      <div className={styles['participants-container']}>
        {participants.map((participant, index) => (
          <div
            key={index}
            className={`${styles['participant-column']} ${flippedCards[index] ? styles['flipped'] : ''
              }`}
            onClick={() => handleCardClick(index)}
          >
            {!flippedCards[index] ? (
              <>
              <div >
                <p style={{height: "40px", width: "100px", display: "flex", flexDirection: "column"}}>
                  <strong>{participant.name}</strong>
                </p>
                <p style={{ fontSize: "14px",  height: "20px"}}>
                  <em>{participant.place}</em>
                </p>
                </div>
                <img src={participant.photo} alt={participant.name} />
                <div className={styles['contact-icons']}>
                  <a href={participant.LINKEDIN} target="_blank" rel="noopener noreferrer">
                    <img src={participant.icon} alt={`Contact ${participant.name}`} />
                  </a>
                </div>
              </>
            ) : (
              <div className={styles['posterior-text']}>
                {/* <p style={{ color: 'rgb(123, 138, 226)'  }}><strong>{participant.name}</strong></p> */}
                <p style={{ color: 'white', fontSize: "15px" }}>{participant.cv}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div />
      <div className={styles.containerhistoria} >
      <h2 className={styles.historia} style={{ marginBottom: "30px", fontSize: "55px" }}>
      <span style={{ color: "white",  fontFamily:"Roboto" }}>Nuestra Historia:</span>
      <span style={{ color: "yellow", textShadow: "1px 1px 3px yellow",  fontFamily:"Roboto" }}> Trabajando Juntos para el Éxito</span>
    </h2>
      <div className={styles['paragraph-container']}>
        <p>En Aprende Conmigo, el camino hacia el éxito fue trazado por un grupo de desconocidos. Cada miembro llegó al equipo sin previo conocimiento entre sí, pero con un objetivo común y firme: construir un espacio de aprendizaje sólido y consolidado.</p>
        <p>Desde el primer día, nos sumergimos en un arduo trabajo diario, donde la colaboración y el esfuerzo se convirtieron en nuestras mejores herramientas. Unidos por nuestra pasión compartida por el conocimiento y la enseñanza, nos embarcamos en la emocionante misión de desarrollar este sitio, con la convicción profunda de que juntos podríamos alcanzar grandes logros.</p>
        <p>Cada miembro de este equipo aportó sus habilidades únicas y conocimientos especializados, enriqueciendo así nuestro entorno de aprendizaje. Superamos desafíos y obstáculos, fortaleciendo nuestra unión a medida que avanzábamos en esta trayectoria conjunta.</p>
        <p>Nuestra dedicación y compromiso nos llevaron a ofrecer lo mejor de nosotros en cada paso del proceso. Cada línea de código, diseño y recurso se crearon con una pasión inquebrantable para brindar una experiencia excepcional a nuestros visitantes.</p>
        <p>En medio de este viaje de aprendizaje y crecimiento, deseamos expresar nuestra gratitud a cada miembro de este equipo. Su perseverancia, creatividad y trabajo en equipo han sido fundamentales para el éxito de "Aprende Conmigo".</p>
        <p>
          <span>Un reconocimiento especial merece </span> 
          <span style={{ color: "yellow" }}>David Alejandro Zuleta Builes</span>
          <span>, nuestro líder y guía en este proceso de formación. Su sabiduría y apoyo incondicional han sido una fuente inestimable de inspiración para todos nosotros.</span>
          </p>
        <p>Hoy, miramos con orgullo hacia atrás y celebramos lo que hemos logrado juntos. Pero también miramos hacia adelante con entusiasmo y determinación, conscientes de que nuestro viaje de aprendizaje y crecimiento apenas ha comenzado.</p>
        <p>Gracias por ser parte de nuestro viaje. Estamos emocionados por lo que el futuro nos depara y esperamos compartir este recorrido contigo.</p>
        <h4 style={{ color: "yellow" }}>¡Gracias, Henry!</h4>
      </div>
      </div>
      <div />

    </div>
  );
};

export default About;



