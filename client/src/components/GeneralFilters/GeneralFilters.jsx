import Button from 'react-bootstrap/Button';
import publication from "../baseDeDatosGeneral/baseDeDatosPublication";
import { useState } from 'react';
import Card from "../Card/Card"; 


function GeneralFilters() {


  const [publications, setPublications] = useState([]);

  const handleClick = (typeFilter) => {
    console.log('Se hizo clic en el botón:', typeFilter);
    // Filtra las publicaciones según el tipo de filtro
    const filteredPublications = publication.filter(pub => pub.grade === typeFilter );
    setPublications(filteredPublications);
  };


  return (
    <>
      <Button variant="outline-primary"  type="submit" onClick={() => handleClick('primaria')}>Primaria</Button>{' '}
      <Button variant="outline-primary" type="submit" onClick={() => handleClick('secundario')}>Secundaria</Button>{' '}
      <Button variant="outline-primary" type="submit" onClick={() => handleClick('universitario')}>Universidad</Button>{' '}




  
      {/* Mostrar las publicaciones mapeadas */}
      {publications.map(card => (
        <div key={card.id} >
        <Card
          id={card.id}
          title={card.title}
          aboutClass={card.aboutClass}
          aboutTeacher={card.aboutTeacher}
          value={card.value}
          publiImage={card.publiImage}
          grade={card.grade}
          lesson={card.lesson}
        />
      </div>
      ))}
    </>



  );
}

export default GeneralFilters;