import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import styled from 'styled-components';

const Detail = () => {
  const { id } = useParams();

  useEffect(() => {
    // Código de efecto o lógica adicional si es necesario
    // ...

    return () => {
      // Código de limpieza o cancelación si es necesario
      // ...
    };
  }, [id]);

  return (
    <StyledDetail>
      <Home />
      <Filtros />
      <Perfil />
    </StyledDetail>
  );
};

const Home = () => {
  return <div>Home Component</div>;
};

const Filtros = () => {
  return <div>Filtros Component</div>;
};

const Perfil = () => {
  return <div>Perfil Component</div>;
};

export default Detail; 