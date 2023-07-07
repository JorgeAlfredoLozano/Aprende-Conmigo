import NavBar from "../Views/NavBar/NavBar";
// import Footer from '../Footer/Footer';
import style from './SearchPage.module.css'

const SearchPage = () => {
    return (
        <div>
            <NavBar/>
            <div className={style.container}>
            <h2>Resultados de la búsqueda</h2>
            </div>
            {/* <Footer />    */}
        </div>
    )
}

export default SearchPage;