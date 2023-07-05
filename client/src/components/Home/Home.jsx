import SearchBar from "../SearchBar/SearchBar";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import style from './Home.module.css'

 const Home = () => {

    return (
        <div>
            <NavBar/>
            <SearchBar/>
            <div className={style.container}>
            <div className={style.carrusel}></div>
            <h1>ola soi la joum</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab ea tempora, suscipit natus corrupti soluta rem consequuntur omnis ad pariatur sed, minus, eos ducimus esse est perspiciatis ipsum! Ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab ea tempora, suscipit natus corrupti soluta rem consequuntur omnis ad pariatur se! Ex.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab ea tempora, suscipit natus corrupti soluta rem consequuntur omnis ad pariatur sed, minus, eos ducimus esse est perspiciatis ipsum! Ex.Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ab ea tempora, suscipit natus corrupti soluta rem consequuntur omnis ad pariatur se! Ex.</p>
            </div>
            <Footer/>
        </div>
    )
 }

 export default Home;