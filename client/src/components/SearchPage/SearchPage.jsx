import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import style from "./SearchPage.module.css";
import GeneralFilters from "../GeneralFilters/GeneralFilters";
import CardsContainer from '../CardsContainer/CardsContainer';
import SearchBar from '../SearchBar/SearchBar';

const SearchPage = ({ searchValue }) => {
  return (
    <div className={style.body}>
      <NavBar />
      <div className={style.search}>
      <SearchBar />
      </div>
      <div className={style.container}>
        <h1 className={style.titulo}>Ruta de búsqueda</h1>
        <GeneralFilters/>
        <div className={style.busqueda}>
          {/* <h2>Resultados de la búsqueda</h2> */}
          <CardsContainer/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
