import React, { useState, useEffect } from "react";
import styles from "./Paginado.module.css";

export default function Paginado({ anunciosPerPage, allAnuncios, paginado, currentPage }) {
  const [displayPages, setDisplayPages] = useState([]); //la paginas a mostrarse 

  /* CALCULOS Y MANEJO DEL PAGINADO */
  useEffect(() => {
    const totalPages = Math.ceil(allAnuncios / anunciosPerPage);
    const maxDisplayPages = 5; //cantidad de paginas en la nav
    let startPage = Math.max(currentPage - Math.floor(maxDisplayPages / 2), 1);
    let endPage = Math.min(startPage + maxDisplayPages - 1, totalPages);

    if (endPage - startPage < maxDisplayPages - 1) {
      startPage = Math.max(endPage - maxDisplayPages + 1, 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    setDisplayPages(pages); //mostrar las paginas
  }, [currentPage, allAnuncios, anunciosPerPage]);

  const [inputPage, setInputPage] = useState("");
  const [errorInput, setErrorInput] = useState("");

  /* HANDLER DEL INPUT PARA GO TO PAGE */
  const handleInputChange = (event) => {
    setInputPage(event.target.value);
    setErrorInput("");
  };

  /* HANDLER BOTON GO TO PAGE */
  const handleGoToPage = () => { 
    const pageNumber = parseInt(inputPage, 10);
    if (pageNumber >= 1 && pageNumber <= Math.ceil(allAnuncios / anunciosPerPage)) { //controlo si es valido o tiro el error
      paginado(pageNumber);
      setInputPage("");
    } else {
      setErrorInput("Sólo números dentro del rango");
    }
  };

  /* HANDLER PARA CAPTURAR EL ENTER */  
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleGoToPage();
    }
  };

  /* HANDLER BOTON GO TO HOME EN NAV DE PAGINADO */
  const handleHomeBtn = () => {
    paginado(1);
  }

  return (
    <div className={styles.container} style={{marginBottom: "15px"}}>
      <ul className={styles.paginado} style={{ display: "flex", alignItems: "center", gap: "1em" }}>

        {/* BOTON HOME DE LA NAV */}
        <li><p className={styles.inicio} onClick={handleHomeBtn}>Inicio</p></li>
        
        {/* BOTON ANTERIOR DE LA NAV */}
        <li className={currentPage === 1 ? styles.disabled : ""}>
          <p style={{cursor:"pointer", margin:"0%"}} onClick={() => paginado(currentPage - 1)} disabled={currentPage === 1}>
            {"<"}
          </p>

        {/* BOTON NUMEROS DE LA NAV */}
        </li>
        {displayPages.map((number) => (
          <li
            className={currentPage === number ? `${styles.number} ${styles.active}` : styles.number}
            key={number}
          >
            <p style={{margin:"0%"}} onClick={() => paginado(number)}>{number}</p>
          </li>
        ))}

        {/* BOTON SIGUIENTE DE LA NAV */}
        <li className={currentPage === Math.ceil(allAnuncios / anunciosPerPage) ? styles.disabled : ""}>
          <p style={{cursor:"pointer", margin:"0%"}} onClick={() => paginado(currentPage + 1)} disabled={currentPage === Math.ceil(allAnuncios / anunciosPerPage)}>
            {">"}
          </p>
        </li>

        {/* LABEL ACTUAL/ULTIMA DE LA NAV */}
        <li>
          <p className={styles.inicioFin}>
            {currentPage} / {Math.ceil(allAnuncios / anunciosPerPage)}
          </p>
        </li>

        {/* BOTON IR A UNA PAGINA DE LA NAV */}
      </ul>
        <li style={{display:"flex", gap:"1em"}}>
          <p style={{ cursor: "pointer", margin:"0%" }} onClick={handleGoToPage}>
          Ir a
          </p>
          <input
            type="text" value={inputPage} onChange={handleInputChange} placeholder="" style={{ width: "25px" }} onKeyDown={handleKeyDown}
          />
        </li>
        <p style={{ color: "red", marginTop: "5px", height: "8px", marginLeft: "10px" }} disabled={!errorInput}>
          {errorInput && errorInput}
        </p>
    </div>
  );
}
