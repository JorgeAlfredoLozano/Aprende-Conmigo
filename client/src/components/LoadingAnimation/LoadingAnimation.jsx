import React from 'react';
import loader from '../../assets/animations/mortarboard.gif';
import style from './LoadingAnimation.module.css';

const LoadingAnimation = () => {
  const containerStyle = {
    backgroundImage: `url(${loader})`
  };

  return (
    <div className={style.container}>
      <div className={style.img} style={containerStyle}></div>
      {/* <span style={{fontFamily:"Roboto", color:"rgb(35, 128, 211)", fontWeight:"600"}}>Cargando...</span> */}
    </div>
  );
};

export default LoadingAnimation;