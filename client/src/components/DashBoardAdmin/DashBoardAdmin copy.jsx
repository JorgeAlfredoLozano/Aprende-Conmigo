import React, { useState, useEffect } from 'react';
import style from './DashBoardAdmin.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAnuncios, updateAnuncio, getAllUsers, putUserEmail } from '../../Redux/actions';
import RestrictedAccess from '../RestrictedAccess/RestrictedAccess';

const DashBoardAdmin = () => {
  const [admin, setAdmin] = useState(false);
  const [selectedAnuncio, setSelectedAnuncio] = useState(null);
  const [selectedUsuario, setSelectedUsuario] = useState(null);
  const user = localStorage.getItem('cachedUser');
  const userObject = JSON.parse(user);
  const dispatch = useDispatch();
  const anuncios = useSelector((state) => state.allAnuncios);
  const usuarios = useSelector((state) => state.allUsers);
  const [anunciosOpen, setAnunciosOpen] = useState(false);

  useEffect(() => {
    if (userObject && userObject.admin === true && userObject.status === true) {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  }, [userObject]);

  useEffect(() => {
    dispatch(getAllAnuncios());
    dispatch(getAllUsers());
  }, [dispatch]);

  const handleAnuncioClick = (anuncio) => {
    setSelectedAnuncio(anuncio);
  };

  const toggleAnunciosOpen = () => {
    setAnunciosOpen((prevAnunciosOpen) => !prevAnunciosOpen);
  };

  const handleUsuarioClick = (usuario) => {
    setSelectedUsuario((prevSelectedUsuario) => {
      if (prevSelectedUsuario && prevSelectedUsuario.id === usuario.id) {
        return null; // Collapse the selected user if clicked again
      }
      return usuario;
    });
  };

  const handleToggleStatus = () => {
    if (selectedAnuncio) {
      const updatedStatus = !selectedAnuncio.status;
      dispatch(
        updateAnuncio(selectedAnuncio.id, {
          status: updatedStatus,
          title: selectedAnuncio.title,
          nombre: selectedAnuncio.User.name,
          email: selectedAnuncio.User.email,
        })
      );
      setSelectedAnuncio((prevAnuncio) => ({
        ...prevAnuncio,
        status: updatedStatus,
      }));
    }
  };

  const handleUserStatus = () => {
    if (selectedUsuario) {
      const updatedStatus = !selectedUsuario.status;
      dispatch(putUserEmail(selectedUsuario.email, { status: updatedStatus, name: selectedUsuario.name }));
      setSelectedUsuario((prevUsuario) => ({
        ...prevUsuario,
        status: updatedStatus,
      }));
    }
  };

  const handleUserAdmin = () => {
    if (selectedUsuario) {
      const updatedStatus = !selectedUsuario.admin;
      dispatch(putUserEmail(selectedUsuario.email, { admin: updatedStatus }));
      setSelectedUsuario((prevUsuarioAdmin) => ({
        ...prevUsuarioAdmin,
        admin: updatedStatus,
      }));
    }
  };

  return (
    <div>
      {admin ? (
        <div className={style.container}>
          <h1>Panel de control</h1>
          <div className={style.anunciosList}>
            <h4 onClick={() => setAnunciosOpen(!anunciosOpen)}>Habilitar / Deshabilitar Anuncios</h4>
            <hr />
            {anunciosOpen && (
              <ul className={style.anunciosList}>
                {anuncios.data && Array.isArray(anuncios.data) ? (
                  anuncios.data.map((anuncio) => (
                    <li
                      key={anuncio.id}
                      onClick={() => handleAnuncioClick(anuncio)}
                      className={style.anunciosListItem}
                    >
                      {anuncio.title}
                    </li>
                  ))
                ) : (
                  <p>No hay anuncios disponibles.</p>
                )}
              </ul>
            )}
            {!anunciosOpen && <p>Click para mostrar anuncios</p>}
            {selectedAnuncio && (
              <div className={style.informacionAdicional}>
                {<p>aqui</p>}
              </div>
            )}
          </div>
          <div className={style.usuariosList}>
            <h4>Habilitar / Deshabilitar Usuarios</h4>
            <hr />
            <ul className={style.usuarioList}>
              {usuarios.data && Array.isArray(usuarios.data) ? (
                usuarios.data.map((usuario) => (
                  <li
                    key={usuario.id}
                    onClick={() => handleUsuarioClick(usuario)}
                    className={style.usuarioListItem}
                  >
                    {usuario.name}
                  </li>
                ))
              ) : (
                <p>No hay usuarios disponibles.</p>
              )}
            </ul>
            {selectedUsuario && (
              <div className={style.informacionAdicional}>
                <h2>Información adicional del usuario:</h2>
                <div className={style.usuarioDetails}>
                  <img
                    src={selectedUsuario.image} // You can replace this with the URL of the user's photo
                    alt="Usuario"
                    className={style.usuarioImage}
                  />
                  <div>
                    <p>Nombre: {selectedUsuario.name}</p>
                    <p>Correo electrónico: {selectedUsuario.email}</p>
                    {selectedUsuario.status === true ? <p>Estado: activo</p> : <p>Estado: desactivado</p>}
                    <div className={style.usuarioActions}>
                      <button onClick={handleUserStatus}>
                        {selectedUsuario.status === true ? 'Desactivar' : 'Activar'}
                      </button>
                      <button onClick={handleUserAdmin}>
                        {selectedUsuario.admin === true ? 'Quitar Admin' : 'Asignar Admin'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <RestrictedAccess />
      )}
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

