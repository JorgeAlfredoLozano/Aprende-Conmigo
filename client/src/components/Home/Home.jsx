import SearchBar from "../SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar";
<<<<<<< HEAD
//import Footer from "../Footer/Footer";
=======
// import Footer from "../Footer/Footer";
>>>>>>> 62fb2dd8bef4b5ac9825dac2254e7728be6b2e46
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
            <h1>a bachir no le gusta esta home T-T</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab ea tempora, suscipit natus corrupti soluta rem consequuntur omnis ad pariatur sed, minus, eos ducimus esse est perspiciatis ipsum! Ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab ea tempora, suscipit natus corrupti soluta rem consequuntur omnis ad pariatur se! Ex.</p>
        <Footer/>
        </div>
    )
 }

 export default Home;