import React, { useEffect } from 'react';

const AlertaEnEnter = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        alert('SE PRESIONÓ');
        window.removeEventListener('keydown', handleKeyDown);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); 
  return (
    <>
        <h2> evento de Tecla y alerta con cada cargue</h2>    
      <p>Presiona la tecla Enter</p>
    </>
  );
};

export default AlertaEnEnter;

