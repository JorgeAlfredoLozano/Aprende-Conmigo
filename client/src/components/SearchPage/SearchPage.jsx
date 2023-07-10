import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import style from "./SearchPage.module.css";
import GeneralFilters from "../GeneralFilters/GeneralFilters";
import Card from "../Card/Card";

const SearchPage = ({ searchValue }) => {
  return (
    <div>
      <NavBar />
      <div className={style.container}>
        <h1>Aqui las Materias, elija el Nivel que busca</h1>
        <GeneralFilters />
        <div className={style.busqueda}>
          {/* <h2>Resultados de la búsqueda</h2> */}
          <Card/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
