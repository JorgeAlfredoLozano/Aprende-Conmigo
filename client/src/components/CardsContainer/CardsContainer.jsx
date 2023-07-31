import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card/Card';
import { getAllAnuncios, getAllFav } from '../../Redux/actions';
import style from './CardsContainer.module.css';
import Paginado from '../Paginado/Paginado';

const CardsContainer = ({ filtro, lesson, precio }) => {
  const localStorageContent = localStorage.getItem("cachedUser");
  const parser = JSON.parse(localStorageContent);
  const user_id = parser.id;

  const dispatch = useDispatch();
  const datoPublication = useSelector((state) => state.allAnuncios);
  const [filteredCards, setFilteredCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(
    parseInt(localStorage.getItem('currentPage')) || 1
  );
  const anunciosPerPage = 12;
  const indexLastAnuncio = currentPage * anunciosPerPage;
  const indexOfFirstAnuncio = indexLastAnuncio - anunciosPerPage;

  // Nuevo estado para el número total de páginas después de aplicar el filtro
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    dispatch(getAllAnuncios());
    dispatch(getAllFav(user_id));
  }, [dispatch]);

  let filteredData = datoPublication.data || [];

  // Nueva variable para almacenar los datos filtrados sin afectar el original
  let filteredDataCopy = filteredData.slice();

  useEffect(() => {
    if (precio.value === 'ASC') {
      filteredDataCopy = filteredDataCopy.sort((a, b) => a.value - b.value);
    } else if (precio.value === 'DESC') {
      filteredDataCopy = filteredDataCopy.sort((a, b) => b.value - a.value);
    }

    if (filtro) {
      filteredDataCopy = filteredDataCopy.filter((card) =>
        card.grade.toLowerCase().includes(filtro.toLowerCase())
      );
    }

    if (lesson) {
      filteredDataCopy = filteredDataCopy.filter((card) =>
        card.Lessons.some((lessonItem) =>
          lessonItem.lesson_name.toLowerCase().includes(lesson.toLowerCase())
        )
      );
    }

    // Filtrar las publicaciones con status === true
    filteredDataCopy = filteredDataCopy.filter((card) => card.status);

    // Calcular el número total de páginas después de aplicar el filtro
    const totalFilteredPages = Math.ceil(filteredDataCopy.length / anunciosPerPage);
    setTotalPages(totalFilteredPages);

    // Verificar que la página actual no sea mayor que el número total de páginas disponibles
    if (currentPage > totalFilteredPages) {
      setCurrentPage(totalFilteredPages);
    }

    // Actualizar el estado totalFilteredAnuncios con la cantidad de anuncios filtrados
    setFilteredCards(filteredDataCopy);
  }, [filtro, lesson, precio, datoPublication.data, currentPage]);

  useEffect(() => {
    const storedCurrentPage = localStorage.getItem('currentPage');
    if (storedCurrentPage) {
      setCurrentPage(parseInt(storedCurrentPage));
      localStorage.removeItem('currentPage');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage.toString());
  }, [currentPage]);

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {/* PAGINADO */}
      {filteredCards && (
        <Paginado
          anunciosPerPage={anunciosPerPage}
          allAnuncios={filteredCards.length}
          paginado={paginado}
          currentPage={currentPage}
        />
      )}

      {/* CARDS */}
      <div className={style.cardContainer}>
        {filteredCards.length !== 0 ? (
          filteredCards
            .slice(indexOfFirstAnuncio, indexLastAnuncio)
            .map((card) =>
              card.status && (
                <div key={card.id} className={style.card_container}>
                  <Card
                    id={card.id}
                    title={card.title}
                    value={card.value}
                    lesson={card.Lessons[0].lesson_name}
                    about_class={card.about_class}
                    about_teacher={card.about_teacher}
                    grade={card.grade}
                    userId={card.UserId}
                  />
                </div>
              )
            )
        ) : (
          <>
            <p
              style={{
                paddingTop: "25%",
                paddingBottom: "15%",
                gridColumn: "2",
                display: "flex",
                justifyContent: "center",
              }}
            >
              No se encontraron resultados.
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CardsContainer;
