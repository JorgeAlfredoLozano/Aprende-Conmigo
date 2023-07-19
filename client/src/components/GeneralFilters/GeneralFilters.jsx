import React, { useState, useEffect } from 'react';
import style from './GeneralFilters.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getLesson } from '../../Redux/actions';
import Select from 'react-select';

function GeneralFilters({ filtro, setFiltro, lesson, setLesson }) {
  const [input, setInput] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedNivel, setSelectedNivel] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLesson());
  }, [dispatch]);

  const materias = useSelector((state) => state.lesson);
  const options = materias.map((aux) => ({ value: aux.id, label: aux.lesson_name }));
  const sortOptions = options.sort((a, b) => a.label.localeCompare(b.label));

  function handleSelect(selectedOption) {
    setSelectedOption(selectedOption);
    setLesson(selectedOption.label);
  }

  const handleSelectNivel = (nivel) => {
    if (selectedNivel === nivel) {
      setSelectedNivel(null);
    } else {
      setSelectedNivel(nivel);
    }
  };

  const handleClick = (filtroSeleccionado) => {
    if (selectedNivel === filtroSeleccionado) {
      handleSelectNivel(null); // Si se presiona el mismo nivel, deseleccionamos
      setFiltro(''); 
    } else {
      handleSelectNivel(filtroSeleccionado); 
      setFiltro(filtroSeleccionado);
    }
  };
  
  const handleReset = (event) => {
    if (event.target.id === 'nivel') {
      setSelectedNivel(null); // Reseteamos el nivel seleccionado
      setFiltro('');
    }
    if (event.target.id === 'materia') {
      setSelectedOption(null); // Reseteamos la opción seleccionada
      setLesson('');
    }
  };

  return (
    <div className={style.container}>
      <button
        className={selectedNivel === 'primaria' ? style.selected : ''}
        onClick={() => handleClick('primaria')}
      >
        Primaria
      </button>
      <button
        className={selectedNivel === 'secundaria' ? style.selected : ''}
        onClick={() => handleClick('secundaria')}
      >
        Secundaria
      </button>
      <button
        className={selectedNivel === 'universidad' ? style.selected : ''}
        onClick={() => handleClick('universidad')}
      >
        Universidad
      </button>
      <Select
        className={style.select}
        value={selectedOption}
        onChange={handleSelect}
        options={sortOptions}
        isSearchable
        placeholder="Busca una materia..."
      />

      {/* <button id='nivel' onClick={handleReset}>Eliminar Nivel</button> */}
      <button id='materia' onClick={handleReset}>Eliminar Materia</button>
    </div>
  );
}

export default GeneralFilters;
