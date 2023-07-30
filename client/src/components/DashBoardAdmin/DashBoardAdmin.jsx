import React, { useState, useEffect } from 'react';
import style from './DashBoardAdmin.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAnuncios, updateAnuncio, getAllUsers, putUserEmail } from '../../Redux/actions';
import RestrictedAccess from '../RestrictedAccess/RestrictedAccess';
import logo from "../../assets/icon-perfil_1.png"

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
    setSelectedAnuncio((prevSelectedAnuncio) => {
      if (prevSelectedAnuncio && prevSelectedAnuncio.id === anuncio.id) {
        return null; 
      }
      return anuncio;
    });
  };

  const handleUsuarioClick = (usuario) => {
    setSelectedUsuario((prevSelectedUsuario) => {
      if (prevSelectedUsuario && prevSelectedUsuario.id === usuario.id) {
        return null; 
      }
      return usuario;
    });
  };

  const handleToggleAnuncioStatus = () => {
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

  const handleToggleUserStatus = () => {
    if (selectedUsuario) {
      const updatedStatus = !selectedUsuario.status;
      dispatch(putUserEmail(selectedUsuario.email, { status: updatedStatus, name: selectedUsuario.name }));
      setSelectedUsuario((prevUsuario) => ({
        ...prevUsuario,
        status: updatedStatus,
      }));
    }
  };

  const handleToggleUserAdmin = () => {
    if (selectedUsuario) {
      const updatedStatus = !selectedUsuario.admin;
      dispatch(putUserEmail(selectedUsuario.email, { admin: updatedStatus }));
      setSelectedUsuario((prevUsuarioAdmin) => ({
        ...prevUsuarioAdmin,
        admin: updatedStatus,
      }));
    }
  };

  const toggleAnunciosOpen = () => {
    setAnunciosOpen((prevAnunciosOpen) => !prevAnunciosOpen);
  };

  return (
    <div>
      {admin ? (
        <div className={style.container}>
          <div className={style.leftSection}>
            <h1>Panel de control</h1>
            <h4>Selecciona un usuario para ver su información</h4>
            <hr />
            <div className={style.usuariosList}>
              <ul className={style.usuarioList}>
                {usuarios.data && Array.isArray(usuarios.data) ? (
                  usuarios.data.map((usuario) => (
                    <li
                      key={usuario.id}
                      onClick={() => handleUsuarioClick(usuario)}
                      className={style.usuarioListItem}
                    >
                      <img src={logo} alt="Logo" className={style.logo} />
                      {usuario.name}
                    </li>
                  ))
                ) : (
                  <p>No hay usuarios disponibles.</p>
                )}
              </ul>
            </div>
            <div className={style.anunciosList}>
              <h4 onClick={toggleAnunciosOpen}>Habilitar / Deshabilitar Anuncios</h4>
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
              {!anunciosOpen && <p>Click en Habilitar/ Deshabilitar para mostrar anuncios</p>}
            </div>
          </div>
          <div className={style.rightSection}>
            {selectedUsuario ? (
              <div className={style.usuarioDetails}>
                <img
                  src={selectedUsuario.assets}
                  alt="Usuario"
                  className={style.usuarioImage}
                />
                <div>
                  <h2>Información del usuario:</h2>
                  <p>Nombre: {selectedUsuario.name}</p>
                  <p>Correo electrónico: {selectedUsuario.email}</p>
                  {selectedUsuario.status === true ? <p>Estado: activo</p> : <p>Estado: desactivado</p>}
                  <div className={style.usuarioActions}>
                    <button onClick={handleToggleUserStatus}>
                      {selectedUsuario.status === true ? 'Desactivar' : 'Activar'}
                    </button>
                    <button onClick={handleToggleUserAdmin}>
                      {selectedUsuario.admin === true ? 'Quitar Admin' : 'Asignar Admin'}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              selectedAnuncio ? (
                <div className={style.anuncioDetails}>
                  <h2>Información del anuncio:</h2>
                  <p>Título: {selectedAnuncio.title}</p>
                  <p>Estado: {selectedAnuncio.status ? 'Habilitado' : 'Deshabilitado'}</p>
                  <button onClick={handleToggleAnuncioStatus}>
                    {selectedAnuncio.status ? 'Deshabilitar Anuncio' : 'Habilitar Anuncio'}
                  </button>
                </div>
              ) : (
                <h2>Control de Usuarios y anuncios</h2>
              )
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

