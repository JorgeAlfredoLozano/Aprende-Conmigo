import NavBar from "../NavBar/NavBar";
import UserUpdate from '../FormUpdate/FormUpdate';
import style from './Perfil.module.css'

const Perfil = () => {
    return (
        <div>
            <NavBar/>
            <div className={style.contenedorPerfil}>
            <div className={style.contenedorTabs}>
            
            </div>
            </div>
            <UserUpdate/>
        </div>
    )
}

export default Perfil;