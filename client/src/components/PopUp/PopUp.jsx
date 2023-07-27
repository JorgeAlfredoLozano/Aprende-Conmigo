import style from './PopUp.module.css';

const PopUp = ({text, setText, renderPopUp, setRenderPopUp}) => {

    const handleClose = () => {
        setRenderPopUp(false);
        setText('');
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