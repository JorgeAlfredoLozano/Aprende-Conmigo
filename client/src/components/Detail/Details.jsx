import React from 'react';
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { cleanDetail, getAllPublication } from "../../redux/actions";


const Detail = () => {
  const dispatch = useDispatch();
  const { email } = useParams();
  const publiDetail = useSelector((state) => state.publiDetail);
  const { about_class } = publiDetail; // Obtén about_class del objeto publiDetail

  useEffect(() => {
    dispatch(getAllPublication(email));
    return () => {
      dispatch(cleanDetail());
    };
  }, [dispatch, email]);

  // Verifica si publiDetail tiene datos antes de mostrar el contenido
  if (!publiDetail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-card">
      <div className="details-header">
        <h1>{publiDetail.title}</h1> {/* Utiliza publiDetail.title en lugar de title */}
      </div>
      <div className="details-content">
        <h3>About Class: {about_class}</h3>
        <h3>About Teacher: {about_teacher}</h3>
        <h3>Value: {value}</h3>
        <h3>Grade: {grade}</h3>
        <h3>Lesson: {Lesson}</h3>
      </div>
    </div>
    );
};

export default Detail;