import React, { useState } from 'react';


export default function ContadorHooksDos() {
  const [contador, setContador] = useState(0);
  const [texto, setTexto] = useState('');

  const suma = () => setContador(contador + 1);
  const resta = () => setContador(contador - 1);

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
        <div>
          <input
            type="text"
            value={texto}
            onChange={(event) => setTexto(event.target.value)}
            placeholder="✍🏿 una frase..."
          />
          <h4>{texto}</h4>
          
        </div>
      </nav>
    </>
  );
}
