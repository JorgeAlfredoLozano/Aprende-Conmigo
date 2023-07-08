import NavBar from "../Views/NavBar/NavBar";
// import Footer from '../Footer/Footer';
import style from './SearchPage.module.css'
import CardsContainer from "../CardsContainer/CardsContainer"

const SearchPage = () => {
    return (
        <div>
           
            
            <NavBar/>
            <h2>Resultados de la búsqueda</h2>
            <CardsContainer/>
            
            {/* <Footer />    */}
        </div>
    )
}

export default SearchPage;