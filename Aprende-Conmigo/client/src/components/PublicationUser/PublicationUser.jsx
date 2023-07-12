import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardPublication from '../CardPublication/CardPublication';
import {getAllPublication} from '../../Redux/actions';
import {NavLink} from 'react-router-dom'
const PublicationUser = () => {
  const dispatch = useDispatch();
  const email=localStorage.getItem("currentUser");
  const datoPublication = useSelector((state) => state.allPublication);

  useEffect(() => {
    dispatch(getAllPublication(email));
  }, [dispatch]);

  return (
    
<div>
    {datoPublication.data && datoPublication.data.map((card) => (
      card.status && (
        <div key={card.id}>
          <CardPublication 
            id={card.id}
            title={card.title}
            value={card.value}
            lesson={card.Lessons[0].lesson_name}
          />
          <NavLink to={`/detail/${card.id}`}>Detalles</NavLink>
        </div>
      )
    ))}
  </div>
  )
  };
  

export default PublicationUser;
