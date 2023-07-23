import React, { useState, useEffect } from 'react';
import style from '../DashBoardAdmin/DashBoardAdmin.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAnuncios, updateAnuncio } from '../../Redux/actions';
import RestrictedAccess from "../RestrictedAccess/RestrictedAccess"

const DashBoardAdmin = () => {
  const [admin, setAdmin] = useState(false);
  const [selectedAnuncio, setSelectedAnuncio] = useState(null);
  const user = localStorage.getItem('cachedUser');
  const userObject = JSON.parse(user);
  const dispatch = useDispatch();
  const anuncios = useSelector((state) => state.allAnuncios); 


  
  useEffect(() => {
    dispatch(getAllAnuncios());
  }, [dispatch]);

  useEffect(() => {
    if (userObject && userObject.admin === true) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [userObject]);

  const handleAnuncioClick = (anuncio) => {
    setSelectedAnuncio(anuncio); // Actualizar el estado local con el anuncio seleccionado
  };
  
  const handleToggleStatus = () => {
    // Actualizar el estado del anuncio en la base de datos mediante la acción Redux
    if (selectedAnuncio) {
      const updatedStatus = !selectedAnuncio.status;
      dispatch(updateAnuncio(selectedAnuncio.id, { status: updatedStatus }));
      setSelectedAnuncio((prevAnuncio) => ({
        ...prevAnuncio,
        status: updatedStatus,
      }));
    }
  };

  return (
    <div>
      {admin ? (
        <div className={style.container}>
          <h1>Panel de control</h1>
          <h4>anuncios generales</h4>
          <hr />
          <ul>
            {anuncios.data && Array.isArray(anuncios.data) ? (
              anuncios.data.map((anuncio) => (
                <li
                  key={anuncio.id}
                  onClick={() => handleAnuncioClick(anuncio)}
                >
                  {anuncio.title}
                </li>
              ))
            ) : (
              <p>No hay anuncios disponibles.</p>
            )}
          </ul>
          {selectedAnuncio && (
            <div>
              <h2>Información adicional del anuncio:</h2>
              <p>Título: {selectedAnuncio.title}</p>
              <p>Profesor: {selectedAnuncio.about_teacher}</p>
              {selectedAnuncio.status === true ? <p>Estado: activo</p> : <p>Estado: desactivado</p>}
              <button onClick={handleToggleStatus}>
                {selectedAnuncio.status === true ? "Desactivar" : "Activar"}
              </button>
            </div>
          )}
        </div>
      ) : (<RestrictedAccess/>) }
    </div>
  );
};

export default DashBoardAdmin;



 /*
dispatch 
useEfect cuando se monta el compo
importo la ruta   , [si tiene algun cambio se ejecuta]
useSelector (para ver lo que llega)
*/

