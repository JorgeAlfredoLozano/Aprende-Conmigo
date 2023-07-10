import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Prueba.module.css";

const Prueba = () => {
  const publication = [
    {
      id: "a1",
      title: "Se enseña matemáticas",
      aboutClass: "clases Online",
      aboutTeacher: "Experto en matemáticas computacionales",
      value: 500,
      publiImage: "no posee",
      grade: "secundario",
      lesson: "matemáticas"
    },
    {
      id: "a2",
      title: "Se enseña literatura",
      aboutClass: "clases Online por la tarde",
      aboutTeacher: "Experto en literatura con más de 10 meses",
      value: 1500,
      publiImage: "no posee",
      grade: "universitario",
      lesson: "literatura"
    },
    {
      id: "a3",
      title: "Historia de la vida",
      aboutClass: "clases Online",
      aboutTeacher: "explicación de historia universal",
      value: 600,
      publiImage: "posee",
      grade: "universitario",
      lesson: "historia"
    },
    {
      id: "a4",
      title: "química a la orden",
      aboutClass: "clases Online por la noche",
      aboutTeacher: "Experto en química especializada",
      value: 2500,
      publiImage: "no posee",
      grade: "universitario",
      lesson: "química"
    },
    {
      id: "a5",
      title: "geografía marina",
      aboutClass: "clases Online",
      aboutTeacher: "geografía del mundo oceánico",
      value: 800,
      publiImage: "no posee",
      grade: "primaria",
      lesson: "geografía"
    }
  ];

  const [filtro, setFiltro] = useState(""); // Estado para almacenar el filtro seleccionado

  const objetosFiltrados = publication.filter(objeto => objeto.grade === filtro);

  const handleClick = filtroSeleccionado => {
    setFiltro(filtroSeleccionado);
  };

  const handleReset = () => {
    setFiltro("");
  };

  return (
    <div>
      <div className={styles.container}>
        <button className={styles.button} onClick={() => handleClick("primaria")}>
          Primaria
        </button>
        <button className={styles.button} onClick={() => handleClick("secundario")}>
          Secundaria
        </button>
        <button className={styles.button} onClick={() => handleClick("universitario")}>
          Universidad
        </button>
        <button className={styles.button} onClick={handleReset}>
          Reset
        </button>
      </div>
      <div className={styles.cardsContainer}>
        {objetosFiltrados.map(objeto => (
          <Card
            key={objeto.id}
            id={objeto.id}
            title={objeto.title}
            aboutClass={objeto.aboutClass}
            aboutTeacher={objeto.aboutTeacher}
            value={objeto.value}
            publiImage={objeto.publiImage}
            grade={objeto.grade}
            lesson={objeto.lesson}
          />
        ))}
      </div>
    </div>
  );
};

export default Prueba;