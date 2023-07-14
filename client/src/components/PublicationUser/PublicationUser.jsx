import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardPublication from '../CardPublication/CardPublication';
import { getAllPublication } from '../../Redux/actions';
import { NavLink } from 'react-router-dom';
import style from "./Publication.module.css"

const PublicationUser = () => {
  const dispatch = useDispatch();
  const email = localStorage.getItem('currentUser');
  const datoPublication = useSelector((state) => state.allPublication);

  useEffect(() => {
    dispatch(getAllPublication(email));
  }, [dispatch]);

  return (
    <div className={style.publication_user_container}>
      {datoPublication.data &&
        datoPublication.data.map((card) =>
          card.status && (
            <div key={card.id} className={style.card_container}>
               <NavLink to={`/detail/${card.id}`} className={style.details_link}>
              <CardPublication
<<<<<<< HEAD
               
=======
>>>>>>> 58375bbc69c5c49eb9cb295d70c1c324e2f2d397
                id={card.id}
                title={card.title}
                value={card.value}
                lesson={card.Lessons[0].lesson_name}
                about_class={card.about_class}
                about_teacher={card.about_teacher}
                grade={card.grade}
<<<<<<< HEAD
                
=======
>>>>>>> 58375bbc69c5c49eb9cb295d70c1c324e2f2d397
              />
              </NavLink>
            </div>
          )
        )}
    </div>
  );
};

export default PublicationUser;
