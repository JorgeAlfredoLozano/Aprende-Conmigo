import style from './Home.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from "react-router-dom";
import img1 from '../../assets/imagenes/estudiantes-universitarios.png';
import img2 from '../../assets/imagenes/matematicas.jpg';
import img3 from '../../assets/imagenes/clases.png';
import ToSearchPage from './ToSearchPage';

 const Home = () => {

  const containerStyle1 = {
    backgroundImage: `url(${img1})`
  };

  const containerStyle2 = {
    backgroundImage: `url(${img2})`
  };

  const containerStyle3 = {
    backgroundImage: `url(${img3})`
  }

    return (
        <div>
            <div className={style.body}>
            <div className={style.imagenes}>
              <div style={containerStyle1} className={style.img1}></div>
              <div style={containerStyle2} className={style.img2}></div>
              <div style={containerStyle3} className={style.img3}></div>
            </div>
            <div className={style.search}>
              <p className={style.texto} style={{ fontSize:"50px", textAlign:"center", color:"black", fontFamily:"Roboto", fontWeight:"900"}}>¡Encuentra la clase que buscas entre nuestros profesores online!</p>
             {/* <NavLink to='/busqueda'><button style={{marginBottom:"500px"}}>Cursos</button></NavLink> */}
             <ToSearchPage/>
            </div>
            </div>
        {/* <Footer/> */}
        </div>
    )
 }

 export default Home;