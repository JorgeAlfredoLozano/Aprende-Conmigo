import style from './PopUp.module.css';
// import { useNavigate } from 'react-router';
const PopUp = ({text, setText, renderPopUp, setRenderPopUp}) => {

    const handleClose = () => {
        // const navigate=useNavigate()
        const currentPath = window.location.pathname;
        setRenderPopUp(false);
        setText('');
        if (currentPath === '/perfil/usuario') {
            window.location.reload();
          }
        //   console.log(currentPath.includes('anuncio'))
        //    if(currentPath.includes('anuncio')){
        //     navigate('/perfil/usuario')
        //   }
    }

    return (
        <div className={style.container}>
            <div className={style.containerText}>
                <p style={{color:"white"}}>{text}</p>
            </div>
            <div className={style.containerButton}>
                <button onClick={handleClose}>Volver</button>
            </div>
        </div>
    )
};

export default PopUp;