import React from 'react';
import loader from '../../assets/animations/mortarboard.gif';

const LoadingAnimation = () => {
  const containerStyle = {
    backgroundImage: `url(${loader})`
  };

  return (
    <div className="loading-animation">
      <div style={containerStyle}></div>
      Cargando...
    </div>
  );
};

export default LoadingAnimation;