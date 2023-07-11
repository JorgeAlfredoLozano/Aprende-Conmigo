import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLesson } from '../../Redux/actions';

const PublicationUser = () => {
  const dispatch = useDispatch();

  const lessons = useSelector((state) => state.publication.lesson);

  useEffect(() => {
    dispatch(getLesson());
  }, [dispatch]);

  return (
    
      <div>
        {lessons ? (
          lessons.map((lesson, index) => (
            <div key={index}>
              <h2>{lesson.lesson_name}</h2>
            </div>
          ))
        ) : (
          <p>No se encontraron lecciones...</p>
        )}
      </div>
    );
  };
  

export default PublicationUser;
