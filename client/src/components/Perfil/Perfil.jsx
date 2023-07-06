import NavBar from "../NavBar/NavBar";
import style from './Perfil.module.css';
import FormUpdate from '../FormUpdate/FormUpdate';

const Perfil = () => {
    return (
        <div>
            <NavBar/>
            <FormUpdate/>
            <div className={style.contenedorPerfil}>
            <div className={style.contenedorTabs}>
            <p className={style.tabs}>Mi perfil</p>
            <p className={style.tabs}>Anuncios</p>
            <p className={style.tabs}>Anuncios Favoritos</p>
            <p className={style.tabs}>Historial</p>
            </div>
            <div className={style.contenedorInfo}></div>
            </div>
        </div>
    )
}

export default Perfil;