import style from './SearchBar.module.css';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { materias } from "../CardsContainer/baseDeDatos";

const buscarMateria = (materia) => {
  const materiaMinuscula = materia.toLowerCase();

  const resultado = Object.entries(materias).reduce((acumulador, [nivel, materiasNivel]) => {
    const coincidencias = materiasNivel.filter((materia) =>
      materia.toLowerCase().includes(materiaMinuscula)
    );

    if (coincidencias.length > 0) {
      coincidencias.forEach((coincidencia) => {
        const coincidenciaMinuscula = coincidencia.toLowerCase();
        if (acumulador[coincidenciaMinuscula]) {
          acumulador[coincidenciaMinuscula].niveles.push(nivel);
        } else {
          acumulador[coincidenciaMinuscula] = {
            niveles: [nivel],
            coincidencias: [coincidencia],
          };
        }
      });
    }

    return acumulador;
  }, {});

  if (Object.keys(resultado).length === 0) {
    console.log("Materia no encontrada.");
  }

  return resultado;
};

const SearchBar = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSearch = () => {
    const resultadoBusqueda = buscarMateria(name);
    console.log(resultadoBusqueda);
  };

  return (
    <div className={style.container}>
      <input type='search' value={name} onChange={handleChange} />
      <Link to='/busqueda'>
        <button onClick={handleSearch}>Buscar</button>
      </Link>
    </div>
  );
};

export default SearchBar;




    