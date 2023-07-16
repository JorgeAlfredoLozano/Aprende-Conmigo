import React, { useState, useEffect } from 'react';
import style from './GeneralFilters.module.css';
import { useDispatch, useSelector } from "react-redux";
import { getLesson } from '../../Redux/actions';
import Select from 'react-select';

function GeneralFilters({ filtro, setFiltro, lesson, setLesson }) {
  const [input, setInput] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLesson());
  }, [dispatch]);

  const materias = useSelector((state) => state.lesson);
  const options = materias.map((aux) => ({ value: aux.id, label: aux.lesson_name }));
  const sortOptions = options.sort((a, b) => a.label.localeCompare(b.label));

  function handleSelect(event) {
    setLesson(event.label)
  };

  const handleClick = (filtroSeleccionado) => {
    setFiltro(filtroSeleccionado);
  };

  const handleReset = (event) => {
    if (event.target.id === 'nivel') {
      setFiltro('');
    }
    if (event.target.id === 'materia') {
      setLesson('');
    }
  };  

  return (
    <div className={style.container}>
      <button onClick={() => handleClick('primaria')}>Primaria</button>
      <button onClick={() => handleClick('secundaria')}>Secundaria</button>
      <button onClick={() => handleClick('universidad')}>Universidad</button>
      <Select placeholder={'¿Qué quieres aprender?'} className={style.select} options={sortOptions} onChange={handleSelect} components={{ DropdownIndicator: () => null }}></Select>
      <button id='materia' onClick={handleReset}>Mostrar Todo</button>
    </div>
  );
}

export default GeneralFilters;
