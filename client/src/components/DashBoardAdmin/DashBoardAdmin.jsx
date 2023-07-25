import React, { useState, useEffect } from 'react';
import style from '../DashBoardAdmin/DashBoardAdmin.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAnuncios, updateAnuncio , getAllUsers, putUserEmail } from '../../Redux/actions';
import RestrictedAccess from "../RestrictedAccess/RestrictedAccess"

const DashBoardAdmin = () => {
  const [admin, setAdmin] = useState(false);
  const [selectedAnuncio, setSelectedAnuncio] = useState(null);
  const [selectedUsuario, setSelectedUsuario] = useState(null);
  const user = localStorage.getItem('cachedUser');
  const userObject = JSON.parse(user);
  const dispatch = useDispatch();
  const anuncios = useSelector((state) => state.allAnuncios); 
  const usuarios = useSelector((state) => state.allUsers);
  
  
  useEffect(() => {
      if (userObject && userObject.admin === true && userObject.status === true) {
          setAdmin(true);
        } else {
            setAdmin(false);
        }
    }, [userObject]);
    
    useEffect(() => {
        dispatch(getAllAnuncios());
    }, [dispatch]);
    
    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch]);
    

    const handleAnuncioClick = (anuncio) => {
    setSelectedAnuncio(anuncio);
  };
  
const handleUsuarioClick = (usuario) => {
    setSelectedUsuario(usuario);
  };

const handleToggleStatus = () => {
    if (selectedAnuncio) {
      const updatedStatus = !selectedAnuncio.status;
      dispatch(updateAnuncio(selectedAnuncio.id, { status: updatedStatus, title: selectedAnuncio.title, nombre:selectedAnuncio.User.name, email: selectedAnuncio.User.email}));
      setSelectedAnuncio((prevAnuncio) => ({
        ...prevAnuncio,
        status: updatedStatus,
      }));
    }
  };

  const handleUserStatus = () => {
    if (selectedUsuario) {
      const updatedStatus = !selectedUsuario.status;
      console.log(selectedUsuario)
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
          <h4>habilitar / deshabilitar anuncios</h4>
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
          <div>
            <h4>habilitar / deshabilitar Usuarios</h4>
            <hr />
            <ul>
              {usuarios.data && Array.isArray(usuarios.data) ? (
                usuarios.data.map((usuario) => (
                  <li
                    key={usuario.id}
                    onClick={() => handleUsuarioClick(usuario)}
                  >
                    {usuario.name}
                  </li>
                ))
              ) : (
                <p>No hay usuarios disponibles.</p>
              )}
            </ul>
            {selectedUsuario && (
              <div>
                <h2>Información adicional del usuario:</h2>
                <p>Nombre: {selectedUsuario.name}</p>
                <p>Fecha de nacimiento: {selectedUsuario.date}</p>
                {selectedUsuario.status === true ? <p>Estado: activo</p> : <p>Estado: desactivado</p>}
                <button onClick={handleUserStatus}>
                  {selectedUsuario.status === true ? "Desactivar" : "Activar"}
                </button>
                {selectedUsuario.admin === true ? <p>Administrador: activo</p> : <p>Administrador: desactivado</p>}
                <button onClick={handleUserAdmin}>
                  {selectedUsuario.admin === true ? "Desactivar" : "Activar"}
                </button>
              </div>
            )}
          </div>
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

