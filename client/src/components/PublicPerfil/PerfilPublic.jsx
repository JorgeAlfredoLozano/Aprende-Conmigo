import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import style from "../PublicPerfil/PerfilPublic.module.css"
import { getUserById } from '../../Redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const PerfilPublic = () => {
    
    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getUserById(id))
    }, [dispatch]);
    
    
    const dataPublication = useSelector((state) => state.userID);
    
    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div>
            <div className={style.container}>
                <img className={style.imgCont} src={dataPublication.data.assets}/>
                <h1>{dataPublication.data.name}</h1>
                <h1>Todos los cursos:</h1>
                
                <button onClick={handleGoBack}>Volver</button>
            </div>
    </div>
  )
}

export default PerfilPublic