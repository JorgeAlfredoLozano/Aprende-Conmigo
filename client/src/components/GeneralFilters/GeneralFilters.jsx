import React, { useState, useEffect } from 'react';
import style from './GeneralFilters.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getLesson } from '../../Redux/actions';
import Select from 'react-select';

function GeneralFilters({ filtro, setFiltro, lesson, setLesson }) {
  const [input, setInput] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedNiveles, setSelectedNiveles] = useState([]);

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
    if (selectedNiveles.includes(nivel)) {
      setSelectedNiveles(selectedNiveles.filter((item) => item !== nivel));
    } else {
      setSelectedNiveles([...selectedNiveles, nivel]);
    }
  };

  const handleClick = (filtroSeleccionado) => {
    if (selectedNiveles.includes(filtroSeleccionado)) {
      setSelectedNiveles(selectedNiveles.filter((item) => item !== filtroSeleccionado));
      setFiltro(''); // Reiniciamos el filtro
    } else {
      setSelectedNiveles([...selectedNiveles, filtroSeleccionado]);
      setFiltro(filtroSeleccionado); // Establecemos el filtro seleccionado
    }
  };

  const handleReset = (event) => {
    if (event.target.id === 'nivel') {
      setSelectedNiveles([]); // Reiniciamos los niveles seleccionados
      setFiltro('');
    }
    if (event.target.id === 'materia') {
      setSelectedOption(null); // Reiniciamos la opción seleccionada
      setLesson('');
    }
  };

  return (
    <div className={style.container}>
      <button
        className={selectedNiveles.includes('primaria') ? style.selected : ''}
        onClick={() => handleClick('primaria')}
      >
        Primaria
      </button>
      <button
        className={selectedNiveles.includes('secundaria') ? style.selected : ''}
        onClick={() => handleClick('secundaria')}
      >
        Secundaria
      </button>
      <button
        className={selectedNiveles.includes('universidad') ? style.selected : ''}
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

      <button id='materia' onClick={handleReset}>Eliminar Materia</button>
    </div>
  );
}

export default GeneralFilters;

