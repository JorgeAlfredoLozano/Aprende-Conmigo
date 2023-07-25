import React, { useState, useEffect } from 'react';
import style from './GeneralFilters.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getLesson } from '../../Redux/actions';
import Select from 'react-select';

function GeneralFilters({ filtro, setFiltro, lesson, setLesson, setPrecio, precio }) {
  const [input, setInput] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedNivel, setSelectedNivel] = useState(null);
  const [selectedPrecio, setSelectedPrecio] = useState(null); // seteamos el estado para el select

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLesson());
  }, [dispatch]);

  const materias = useSelector((state) => state.lesson);
  const options = materias.map((aux) => ({ value: aux.id, label: aux.lesson_name }));
  const sortOptions = options.sort((a, b) => a.label.localeCompare(b.label));
  const optionPrecio = [{ value: 'ASC', label: 'Ascendente' },{ value: 'DESC', label: 'Descendente'}]
  


  function handleSelect(selectedOption) {
    setSelectedOption(selectedOption);
    setLesson(selectedOption.label);
    window.history.pushState(null, null, `/busqueda/${selectedOption.label}`);
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

  const handlePrecio = (selectedPrecio)=>{
    setSelectedPrecio(selectedPrecio)
    setPrecio(selectedPrecio)
  }

  const handleReset = (event) => {
    if (event.target.id === 'nivel') {
      setSelectedNivel(null); // Reseteamos el nivel seleccionado
      setFiltro('');
      window.history.pushState(null, null, `/busqueda/todo`);
    }
    if (event.target.id === 'materia') {
      setSelectedOption(null); // Reseteamos la opción seleccionada
      setLesson('');
      window.history.pushState(null, null, `/busqueda/todo`);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.botones}>
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
      <Select
      className={style.select}
      value={selectedPrecio}
      onChange={handlePrecio}
      options={optionPrecio}
      placeholder="Ordenar por precio..."
      />
      <button id='materia' onClick={handleReset}>Mostrar todo</button>
    </div>
  );
}

export default GeneralFilters;
