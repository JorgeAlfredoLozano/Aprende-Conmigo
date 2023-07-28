import style from './PopUp.module.css';
const PopUp = ({text, setText, renderPopUp, setRenderPopUp}) => {

    const handleClose = () => {
        const currentPath = window.location.pathname;
        setRenderPopUp(false);
        setText('');
        if (currentPath === '/perfil/usuario') {
            window.location.reload();
          }
    }

    return (
        <div className={style.container}>
            <div className={style.containerText}>
                <p style={{color:"rgb(63, 81, 181)"}}>{text}</p>
            </div>
            <div className={style.containerButton}>
                <button onClick={handleClose}>Volver</button>
            </div>
        </div>
    )
};

export default PopUp;