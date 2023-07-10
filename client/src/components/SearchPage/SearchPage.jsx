import NavBar from "../NavBar/NavBar";
<<<<<<< HEAD
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
=======
import Footer from "../Footer/Footer";
import style from "./SearchPage.module.css";
import GeneralFilters from "../GeneralFilters/GeneralFilters";

const SearchPage = ({ searchValue }) => {
  return (
    <div>
      <NavBar />
      <div className={style.container}>
        <h1>Aqui las Materias, elija el Nivel que busca</h1>
        <GeneralFilters />
        <div className={style.busqueda}>
          <h2>Resultados de la búsqueda</h2>
>>>>>>> 9742b6adbdecbe6dbe01c09813a7be387fe62144
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
