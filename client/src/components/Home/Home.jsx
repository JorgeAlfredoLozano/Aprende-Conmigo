import SearchBar from "../SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import style from './Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import Carrousel from "../carrousel/Carrousel";

 const Home = () => {

    return (
        <div>
            <NavBar/>
            <SearchBar/>
            <div className={style.container}></div>
            <h1>Bienvenid@s al lugar donde ampliaremos juntos los conocimientos</h1>
            <Carrousel/>
            <p>La educación en los niveles primario, secundario y universitario desempeña un papel crucial en el desarrollo de las personas y en el progreso de la sociedad. En el nivel primario, se establecen las bases fundamentales para el aprendizaje. En la educación secundaria, se profundiza en diferentes áreas y se prepara a los jóvenes para la vida adulta. En el ámbito universitario, se adquieren conocimientos especializados y se fomenta el pensamiento crítico. Estos niveles educativos brindan herramientas, habilidades y oportunidades para el crecimiento personal y profesional. Invertir en educación es invertir en el potencial de las personas y en el desarrollo sostenible de las comunidades.</p>
        <Footer/>
        </div>
    )
 }

 export default Home;