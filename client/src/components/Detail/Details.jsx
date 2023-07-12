import React from 'react';

const Details = ({ data, match }) => {
  const { id } = match.params;

  // Buscar el objeto con el ID correspondiente en el array de datos
  const item = data.find(item => item.id === id);

  // Verificar si se encontró el objeto con el ID
  if (!item) {
    return <div>No se encontró el detalle para el ID proporcionado.</div>;
  }

  const { title, aboutClass, aboutTeacher, value, publiImage, grade, lesson } = item;

  return (
    <div className="details-card">
      <div className="details-header">
        <h1>{title}</h1>
        {/* Agrega los dibujos o elementos visuales relacionados con la educación */}
      </div>
      <div className="details-content">
        <h3>About Class: {aboutClass}</h3>
        <h3>About Teacher: {aboutTeacher}</h3>
        <h3>Value: {value}</h3>
        <h3>Publication Image: {publiImage}</h3>
        <h3>Grade: {grade}</h3>
        <h3>Lesson: {lesson}</h3>
      </div>
    </div>
  );
};

export default Details;
