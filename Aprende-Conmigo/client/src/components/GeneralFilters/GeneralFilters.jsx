import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import style from './GeneralFilters.module.css';

function GeneralFilters({ filtro, setFiltro }) {
  const handleClick = filtroSeleccionado => {
    setFiltro(filtroSeleccionado);
  };

  const handleReset = () => {
    setFiltro('');
  };

  return (
    <div className={style.container}>
      <Button variant="outline-primary" onClick={() => handleClick('primario')}>
        Primario
      </Button>{' '}
      <Button variant="outline-primary" onClick={() => handleClick('secundario')}>
        Secundaria
      </Button>{' '}
      <Button variant="outline-primary" onClick={() => handleClick('universitario')}>
        Universidad
      </Button>{' '}
      <Button className={style.button} onClick={handleReset}>
        Reset
      </Button>{' '}
    </div>
  );
}

export default GeneralFilters;
