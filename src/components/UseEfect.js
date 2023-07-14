import React, { useState, useEffect } from 'react';

export default function ContadorHooks() {
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState('');

  const suma = () => setContador(contador + 1);
  const resta = () => setContador(contador - 1);

  useEffect(() => {
    const handleInputChange = (event) => {
      setTexto(event.target.value);
    };

    document.addEventListener('input', handleInputChange);

    return () => {
      document.removeEventListener('input', handleInputChange);
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <>
      <h2>Hooks</h2>
      <nav>
        <button onClick={resta}>
          <strong>➖</strong>
        </button>
        <button onClick={suma}>
          <strong>➕</strong>
        </button>
        <h3>{contador}</h3>
        <input
          type="text"
          value={texto}
          onChange={(event) => setTexto(event.target.value)}
          placeholder="✍🏿 una frase..."
        />
 <h4>  {texto} </h4> 
      </nav>
    </>
  );
}

