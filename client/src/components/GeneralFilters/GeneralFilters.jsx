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
      setFiltro(''); // Si se presiona el mismo nivel, deseleccionamos y eliminamos el filtro
    } else {
      setSelectedNivel(nivel);
      setFiltro(nivel); // Establecemos el filtro según el nivel seleccionado
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
      <div>
      <button
        className={selectedNivel === 'primaria' ? style.selected : ''}
        onClick={() => handleSelectNivel('primaria')}
      >
        Primaria
      </button>
      <button
        className={selectedNivel === 'secundaria' ? style.selected : ''}
        onClick={() => handleSelectNivel('secundaria')}
      >
        Secundaria
      </button>
      <button
        className={selectedNivel === 'universidad' ? style.selected : ''}
        onClick={() => handleSelectNivel('universidad')}
      >
        Universidad
      </button>
      </div>
      <Select
        className={style.select}
        value={selectedOption}
        onChange={handleSelect}
        options={sortOptions}
        isSearchable
        placeholder="Busca una materia..."
      />
      <button id='materia' onClick={handleReset}>Limpiar filtro</button>
    </div>
  );
}

export default GeneralFilters;
