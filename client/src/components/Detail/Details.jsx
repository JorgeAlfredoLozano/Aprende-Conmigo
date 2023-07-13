import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAllPublication } from '../../Redux/actions';
import CardPublication from '../CardPublication/CardPublication';
import style from '../Detail/Publication.module.css';

const CardPublicationContainer = ({ card }) => {
  // Aquí puedes agregar los elementos adicionales que necesitas mostrar en la tarjeta
  return (
    <div>
      <CardPublication
        id={card.id}
        title={card.title}
        value={card.value}
        lesson={card.Lessons[0]?.lesson_name}
        about_class={card.about_class}
        about_teacher={card.about_teacher}
        grade={card.grade}
      />
      {/* Agrega aquí los elementos adicionales */}
      {/* Por ejemplo, puedes mostrar una descripción */}
      <p>{card.description}</p>
    </div>
  );
};

const Details = () => {
  const dispatch = useDispatch();
  const email = localStorage.getItem('currentUser');
  const datoPublication = useSelector((state) => state.allPublication);

  useEffect(() => {
    dispatch(getAllPublication(email));
  }, [dispatch, email]);

  const data = Array.isArray(datoPublication.data) ? datoPublication.data : [];

  return (
    <div className={style.publication_user_container}>
      {data.map((card) =>
        card.status && (
          <div key={card.id} className={style.card_container}>
            <NavLink to={`/detail/${card.id}`} className={style.details_link}>
              <CardPublicationContainer card={card} />
            </NavLink>
          </div>
        )
      )}
    </div>
  );
};

export default Details;
