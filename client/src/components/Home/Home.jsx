<<<<<<< HEAD
 import SearchBar from "../SearchBar/SearchBar";
import NavBar from "../NavBar/navBar";
import Footer from "../Footer/Footer";
=======
import SearchBar from "../SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import style from './Home.module.css'
>>>>>>> f4b98593a624d17a2ccdad1dade941f1cbcc50a5

 const Home = () => {

    return (
        <div>
            <NavBar/>
            <SearchBar/>
            <div className={style.container}>
            <div className={style.carrusel}></div>
            <h1>ola soi la joum</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab ea tempora, suscipit natus corrupti soluta rem consequuntur omnis ad pariatur sed, minus, eos ducimus esse est perspiciatis ipsum! Ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab ea tempora, suscipit natus corrupti soluta rem consequuntur omnis ad pariatur se! Ex.</p>
<<<<<<< HEAD
=======
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab ea tempora, suscipit natus corrupti soluta rem consequuntur omnis ad pariatur sed, minus, eos ducimus esse est perspiciatis ipsum! Ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab ea tempora, suscipit natus corrupti soluta rem consequuntur omnis ad pariatur se! Ex.</p>
            </div>
>>>>>>> f4b98593a624d17a2ccdad1dade941f1cbcc50a5
            <Footer/>
        </div>
    )
 }

 export default Home;