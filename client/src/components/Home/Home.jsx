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
            <div className={style.carrusel}></div>
<<<<<<< HEAD
            <h1>El intercambio de conocimientos es un proceso en el que todos podemos participar como maestros y alumnos.</h1>
            <h1>La enseñanza es un camino de ida y vuelta, donde todos tenemos la oportunidad de aprender y enseñar a otros</h1>
=======
            <h1>a bachir no le gusta esta home T-T</h1>
>>>>>>> 62fb2dd8bef4b5ac9825dac2254e7728be6b2e46
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab ea tempora, suscipit natus corrupti soluta rem consequuntur omnis ad pariatur sed, minus, eos ducimus esse est perspiciatis ipsum! Ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab ea tempora, suscipit natus corrupti soluta rem consequuntur omnis ad pariatur se! Ex.</p>
        <Footer/>
        </div>
    )
 }

 export default Home;