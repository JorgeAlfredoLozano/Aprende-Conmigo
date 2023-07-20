import style from './DetailAnuncio.module.css';
import { useParams, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAnuncios, getUserById } from "../../Redux/actions";
import Review from '../Review/Review';

const DetailAnuncio = () => {
  const localStorageContent = localStorage.getItem("cachedUser");
  const parser = JSON.parse(localStorageContent);
  const idLog = parser.id;
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllAnuncios());
    dispatch(getUserById(filteredData[0].UserId));
  }, [dispatch]);

  const datoPublication = useSelector((state) => state.allAnuncios);
  const userTeacher = useSelector((state) => state.userID);

  const [showLoginMessage, setShowLoginMessage] = useState(false);

  let filteredData = datoPublication.data;
  filteredData = filteredData.filter(card => card.id === id);

  const handleVolver = () => {
    navigate('/busqueda');
  };

  return (
    <div>
      <div className={style.container}>
        <div className={style.anuncio}>
          <h1 className={style.title}>{filteredData[0].title}</h1>
          <div className={style.claseContainer}>
          <h3>Acerca de la clase</h3>
          <h5 className={style.grade}>Nivel: {filteredData[0].grade}</h5>
          <h5 className={style.aboutWea}>{filteredData[0].about_class}</h5>
          </div>
          <div className={style.teacherContainer}>
          <h3>Sobre {userTeacher.data.name}</h3>
          <h5 className={style.aboutWea}>{filteredData[0].about_teacher}</h5>
          </div>
          
          {/* {idLog ? (
            idLog !== filteredData[0].UserId ? (
              <Link to={`/pago/${id}`}>
                <button>Contratar este profesor</button>
              </Link>
            ) : (
              <p></p>
            )
          ) : (
            <p>Debes Iniciar Sesión para contratar.</p>
          )} */}
          <Review idPub={id} />
        </div>

        {filteredData && userTeacher && (
          <section className={style.about}>
            <div className={style.boxAbout}>
            <div className={style.imgCont} style={{ backgroundImage: `url(${userTeacher.data.assets})` }}>
            </div>
            <h4>{userTeacher.data.name}</h4>
            <h5>{userTeacher.data.gender}</h5>
            
            {idLog ? (
              <Link to={`/perfilPublico/${userTeacher.data.id}`}>
                <button>+ info</button>
              </Link>
            ) : (
              <>
                {showLoginMessage && (
                  <div>
                    <button onClick={() => setShowLoginMessage(false)}>continuar</button>
                  </div>
                )}
                <button onClick={() => setShowLoginMessage(true)}>+ info</button>
              </>
            )}
            <h5 className={style.value}>💲{filteredData[0].value}💸</h5>
            {idLog ? (
            idLog !== filteredData[0].UserId ? (
              <Link to={`/pago/${id}`}>
                <button>Contratar este profesor</button>
              </Link>
            ) : (
              <p></p>
            )
          ) : (
            <p>Debes Iniciar Sesión para contratar.</p>
          )}
          </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default DetailAnuncio;