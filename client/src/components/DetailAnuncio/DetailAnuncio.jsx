 import NavBar from "../NavBar/NavBar";
 import style from './DetailAnuncio.module.css'
 
 const DetailAnuncio = () => {

    return (
        <div>
            <NavBar/>
            <div className={style.container}>
            <h1>Detalle del anuncio para el usuario</h1>
            </div>
        </div>
    )
 };

 export default DetailAnuncio;