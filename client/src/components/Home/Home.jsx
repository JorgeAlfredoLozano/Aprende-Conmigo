import SearchBar from "../SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import style from './Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carrousel from "../carrousel/Carrousel";
import Accordion from 'react-bootstrap/Accordion';

 const Home = () => {

    return (
<<<<<<< HEAD
        <div className={style.bgd}>
            <NavBar/>
            <Carrousel/>
            <div className={style.container}></div>
            <div className={style.search}>
            <SearchBar/>
            </div>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
=======
        <div>
            <NavBar/>
            <div className={style.body}>
            <Carrousel/>
            <div className={style.search}>
            <SearchBar/>
            </div>
            <Accordion className={style.acordeon} defaultActiveKey={['0']} alwaysOpen>
>>>>>>> 58375bbc69c5c49eb9cb295d70c1c324e2f2d397
        <Accordion.Item eventKey="0">
        <Accordion.Header>La importancia de la educación</Accordion.Header>
        <Accordion.Body>
        La educación en los niveles primario, secundario y universitario desempeña un papel crucial en el desarrollo de las personas y en el progreso de la sociedad. En el nivel primario, se establecen las bases fundamentales para el aprendizaje. En la educación secundaria, se profundiza en diferentes áreas y se prepara a los jóvenes para la vida adulta. En el ámbito universitario, se adquieren conocimientos especializados y se fomenta el pensamiento crítico. Estos niveles educativos brindan herramientas, habilidades y oportunidades para el crecimiento personal y profesional. Invertir en educación es invertir en el potencial de las personas y en el desarrollo sostenible de las comunidades.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Acerca de nosotros</Accordion.Header>
        <Accordion.Body>
<<<<<<< HEAD
        Hemos creado una página web innovadora para buscar profesores en diferentes niveles educativos: primario, secundario y universitario. Nuestro equipo se ha unido con el objetivo de facilitar el acceso a la educación de calidad, brindando a los estudiantes una plataforma confiable para encontrar profesionales capacitados en diversas materias. Estamos comprometidos en promover el aprendizaje y el desarrollo académico, fomentando la excelencia educativa y el crecimiento de la comunidad estudiantil. Los integrantes de nuestro equipo son: Abril Lopizzo, Ramses Garay, Bachir Nasser, Camila Cufre, Ivana Carmona, Jorge Lozano, Alejandro Garcia y Marcelo Diaz.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
=======
        Hemos creado una página web innovadora para buscar profesores en diferentes niveles educativos: primario, secundario y universitario. Nuestro equipo se ha unido con el objetivo de facilitar el acceso a la educación de calidad, brindando a los estudiantes una plataforma confiable para encontrar profesionales capacitados en diversas materias. Estamos comprometidos en promover el aprendizaje y el desarrollo académico, fomentando la excelencia educativa y el crecimiento de la comunidad estudiantil. Los integrantes de nuestro equipo son: Ramses Garay, Bachir Nasser, Camila Cufre, Ivana Carmona, Jorge Lozano, Alejandro Garcia y Marcelo Diaz.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
            </div>
>>>>>>> 58375bbc69c5c49eb9cb295d70c1c324e2f2d397
        <Footer/>
        </div>
    )
 }

 export default Home;