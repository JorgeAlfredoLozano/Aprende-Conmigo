import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import style from "./SearchPage.module.css";
import GeneralFilters from "../GeneralFilters/GeneralFilters";
import CardsContainer from "../CardsContainer/CardsContainer";


const SearchPage = ({ searchValue }) => {


  



  return (
    <div>
      <NavBar />
      <div className={style.container}>
        <h1>Aqui las Materias, elija el Nivel que busca</h1>
        <GeneralFilters />
        <CardsContainer/>
       
        {/* <div className={style.busqueda}>
          <h2>Resultados de la búsqueda</h2>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
