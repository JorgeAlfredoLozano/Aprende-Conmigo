import React, { useState, useEffect } from "react";
import styles from "./Paginado.module.css";

export default function Paginado({ anunciosPerPage, allAnuncios, paginado, currentPage }) {
  if (allAnuncios === 0) {
    return null;
  }
  const [displayPages, setDisplayPages] = useState([]);

  useEffect(() => {
    if (allAnuncios > 0) {
      // Restricción para currentPage
      
      if (currentPage < 1) {
        paginado(1);
      } else if (currentPage > Math.ceil(allAnuncios / anunciosPerPage)) {
        paginado(Math.ceil(allAnuncios / anunciosPerPage));
      }

      // Restricción para displayPages
      const totalPages = Math.ceil(allAnuncios / anunciosPerPage);
      const maxDisplayPages = 3;
      let startPage = Math.max(currentPage - Math.floor(maxDisplayPages / 2), 1);
      let endPage = Math.min(startPage + maxDisplayPages - 1, totalPages);

      if (endPage - startPage < maxDisplayPages - 1) {
        startPage = Math.max(endPage - maxDisplayPages + 1, 1);
      }

      const pages = [];
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      setDisplayPages(pages);
    } 
  }, [currentPage, allAnuncios, anunciosPerPage]);

  const [inputPage, setInputPage] = useState("");
  const [errorInput, setErrorInput] = useState("");

  const handleInputChange = (event) => {
    setInputPage(event.target.value);
    setErrorInput("");
  };

  const handleGoToPage = () => {
    const pageNumber = parseInt(inputPage, 10);
    if (pageNumber >= 1 && pageNumber <= Math.ceil(allAnuncios / anunciosPerPage)) {
      paginado(pageNumber);
      setInputPage("");
    } else {
      setErrorInput("Sólo números dentro del rango");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleGoToPage();
    }
  };

  const handleHomeBtn = () => {
    paginado(1);
  };

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === Math.ceil(allAnuncios / anunciosPerPage);

  return (
    <div className={styles.container} style={{ marginBottom: "15px" }}>
      <ul className={styles.paginado} style={{ display: "flex", alignItems: "center", gap: "1em" }}>
        {/* BOTON HOME DE LA NAV */}
        <li>
          <p className={styles.inicio} onClick={handleHomeBtn}>
            Inicio
          </p>
        </li>

        <li>
          <p
            style={{
              cursor: isFirstPage ? "not-allowed" : "pointer",
              margin: "0%",
              color: isFirstPage ? "#777171" : "inherit",
              pointerEvents: isFirstPage ? "none" : "auto",
            }}
            onClick={() => {
              if (!isFirstPage) {
                paginado(currentPage - 1);
              }
            }}
          >
            {"<"}
          </p>
        </li>

        {displayPages.map((number) => (
          <li
            className={currentPage === number ? `${styles.number} ${styles.active}` : styles.number}
            key={number}
          >
            <p style={{ margin: "0%" }} onClick={() => paginado(number)}>
              {number}
            </p>
          </li>
        ))}

        <li>
          <p
            style={{
              cursor: isLastPage ? "not-allowed" : "pointer",
              margin: "0%",
              color: isLastPage ? "#777171" : "inherit",
              pointerEvents: isLastPage ? "none" : "auto",
            }}
            onClick={() => {
              if (!isLastPage) {
                paginado(currentPage + 1);
              }
            }}
          >
            {">"}
          </p>
        </li>

        <li>
          <p className={styles.inicioFin} style={{color:"#9b9b9b"}}>
            {currentPage} / {Math.ceil(allAnuncios / anunciosPerPage)}
          </p>
        </li>
      </ul>

      <div style={{ display: "flex", gap: "1em" }}>
        <p style={{ cursor: "pointer", margin: "0%" }} onClick={handleGoToPage}>
          Ir a
          </p>
          <input
            type="text" value={inputPage} onChange={handleInputChange} placeholder="" style={{ width: "25px", backgroundColor:"rgba(198, 221, 255, 0.5)" }} onKeyDown={handleKeyDown}
          />
        </li>
        <p style={{ color: "red", marginTop: "5px", height: "8px", marginLeft: "10px" }} disabled={!errorInput}>
          {errorInput && errorInput}
        </p>
    </div>
  );
}
