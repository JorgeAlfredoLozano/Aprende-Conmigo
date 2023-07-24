import React, { useState } from 'react';
import styles from './About.module.css';

const About = () => {
  const participants = [
    {
      name: 'Camila Cufré',
      place: 'Campana, Argentina',
      photo: 'https://media.licdn.com/dms/image/D4D35AQG2rG8vc9As0Q/profile-framedphoto-shrink_800_800/0/1688342498366?e=1690732800&v=beta&t=YQ9qR807QOE2uoyAOs69frxHv6i-xJnlP0DTT4-G9QQ',
      LINKEDIN: 'https://www.linkedin.com/in/camilacufre/',
      icon: 'https://static.vecteezy.com/system/resources/previews/017/339/646/non_2x/linkedin-icon-free-png.png',
      cv: 'Full-Stack Developer | React.js | JavaScript | Node.js | Postgres | CSS | Freelance Illustrator'
    },
    {
      name: 'Ivana Carmona',
      place: 'Chaco, Argentina',
      photo: 'https://media.licdn.com/dms/image/D4D35AQHjSmNJsA-3yw/profile-framedphoto-shrink_800_800/0/1689523582847?e=1690732800&v=beta&t=ergcF_5JUzKkTlcvH_qjvvX6mPTk3g3uEIf65XofrVM',
      LINKEDIN: 'https://www.linkedin.com/in/antonella-carmona-5a166520a/',
      icon: 'https://static.vecteezy.com/system/resources/previews/017/339/646/non_2x/linkedin-icon-free-png.png',
      cv: 'Full-Stack Developer | React.js | JavaScript | Node.js | Postgres | CSS | TypeScript'
    },
    {
      name: 'Bachir Nasser',
      place: 'Caracas, Venezuela',
      photo: 'https://media.licdn.com/dms/image/D4E03AQEs-hFk4THOaA/profile-displayphoto-shrink_200_200/0/1675105858893?e=1695859200&v=beta&t=MLnHhVvQz4_8SqtE-Xm2G1Rd9YZnB0szkUBWMkRprQI',
      LINKEDIN: 'https://www.linkedin.com/in/bachir-nasser-83b1b3263/',
      icon: 'https://static.vecteezy.com/system/resources/previews/017/339/646/non_2x/linkedin-icon-free-png.png',
      cv: 'Full-Stack Developer | React.js | JavaScript | Node.js | Postgres | CSS | C'
    },
    {
      name: 'Jorge Lozano',
      place: 'Azul, Argentina',
      photo: 'https://media.licdn.com/dms/image/D4D03AQHJDDuSfAf8-w/profile-displayphoto-shrink_100_100/0/1687963946330?e=1695859200&v=beta&t=7p_GSUSv6nE8qDNzyOA7FvNowLfqespdWrxiyRXgtHA',
      LINKEDIN: 'https://www.linkedin.com/in/jorgealozano/',
      icon: 'https://static.vecteezy.com/system/resources/previews/017/339/646/non_2x/linkedin-icon-free-png.png',
      cv: 'Full-Stack Developer | Testing/QA en Codo a Codo | React.js | JavaScript | Node.js | Postgres | CSS | Técnico Superio en Seguros'
    },
    {
      name: 'Alí Garay Vega',
      place: 'DF, México',
      photo: 'https://media.licdn.com/dms/image/D4E03AQHODismptpnew/profile-displayphoto-shrink_200_200/0/1688216322442?e=1695859200&v=beta&t=l6dzkMoOKU-frsDMs9cUASzc1PKnj72mjETIdTC2d1A',
      LINKEDIN: 'https://www.linkedin.com/in/ali-garay-vega-179635262/',
      icon: 'https://static.vecteezy.com/system/resources/previews/017/339/646/non_2x/linkedin-icon-free-png.png',
      cv: 'Full-Stack Developer | React.js | JavaScript | Node.js | Postgres | CSS'
    },
    {
      name: 'Marcelo Díaz',
      place: 'Santiago, Chile',
      photo: 'https://media.licdn.com/dms/image/D4D03AQHx8ueXr0hqIQ/profile-displayphoto-shrink_100_100/0/1683830269169?e=1695859200&v=beta&t=s1V3SlnSBCJv9u226TMukKACqgtruA-DnejNI3SrA7M',
      LINKEDIN: 'https://www.linkedin.com/in/marcelo-a-diaz-6a7926223/',
      icon: 'https://static.vecteezy.com/system/resources/previews/017/339/646/non_2x/linkedin-icon-free-png.png',
      cv: 'Analista Universitario de software | Full-Stack Developer | React.js | JavaScript | Node.js | Postgres | CSS'
    },
    {
      name: 'Alejandro García',
      place: 'Cali, Colombia',
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
                <p>
                  <strong>{participant.name}</strong>
                </p>
                <p style={{ fontSize: "14px" }}>
                  <em>{participant.place}</em>
                </p>
                <img src={participant.photo} alt={participant.name} />
                <div className={styles['contact-icons']}>
                  <a href={participant.LINKEDIN} target="_blank" rel="noopener noreferrer">
                    <img src={participant.icon} alt={`Contact ${participant.name}`} />
                  </a>
                </div>
              </>
            ) : (
              <div className={styles['posterior-text']}>
                <p style={{ color: 'white' }}><strong>{participant.name}</strong></p>
                <p style={{ color: 'rgb(226, 226, 103)', fontSize: "15px" }}>{participant.cv}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <br />
      <h2>Nuestra Historia: Trabajando Juntos para el Éxito</h2>
      <div className={styles['paragraph-container']}>
        <p>En "Aprende Conmigo", el camino hacia el éxito no fue trazado por un grupo de desconocidos. Cada uno de nosotros llegó al equipo sin conocerse previamente, pero con un objetivo común: construir un espacio de aprendizaje sólido y consolidado.

          Desde el primer día, nos sumergimos en un arduo trabajo diario, donde la colaboración y el esfuerzo se convirtieron en nuestras mejores herramientas. Unidos por una pasión compartida por el conocimiento y la enseñanza, nos embarcamos en la emocionante misión de desarrollar este sitio, con la firme convicción de que juntos podríamos alcanzar grandes logros.

          Cada uno de los integrantes de este equipo aportó sus habilidades únicas y conocimientos especializados, enriqueciendo así nuestro entorno de aprendizaje. Fuimos capaces de superar desafíos y obstáculos, fortaleciendo nuestra unión a medida que avanzábamos en este camino conjunto.

          Nuestra dedicación y compromiso nos llevaron a entregar lo mejor de nosotros en cada paso del proceso. Cada línea de código, cada diseño, y cada recurso se crearon con una pasión inquebrantable por brindar una experiencia excepcional a quienes nos visitan.

          En medio de este viaje de aprendizaje y crecimiento, queremos expresar nuestra gratitud a cada uno de los integrantes de este equipo. Su perseverancia, creatividad y trabajo en equipo han sido fundamentales para el éxito de "Aprende Conmigo".

          Un agradecimiento especial merece David Alejandro Zuleta Builes, nuestro líder y guía en este proceso de formación. Su sabiduría y apoyo incondicional han sido una fuente inestimable de inspiración para todos nosotros.

          Hoy, miramos con orgullo hacia atrás y celebramos lo que hemos logrado juntos. Pero también miramos hacia adelante, con entusiasmo y determinación, sabiendo que nuestro viaje de aprendizaje y crecimiento apenas ha comenzado.

          Gracias por ser parte de nuestro viaje en "Aprende Conmigo". Estamos emocionados por lo que el futuro nos depara y esperamos compartir este recorrido contigo.

          ¡Gracias Henry!</p>
      </div>
      <br />

    </div>
  );
};

export default About;



