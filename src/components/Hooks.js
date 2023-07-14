import React from "react";

const Hooks = () => {
  return (
    <>
      <h2>Son los actual...</h2>
      <ul>
        <li>
          A pesar que hoy en día se unan más los hooks el inicio de react fue
          con class component
        </li>
        <li>Significa gancho</li>
        <li>Nace en React 16.8</li>
        <li>
          <b> <u> <i> Permite enganchar por medio de funciones el estado y ciclo de vida </i> </u> </b>
        </li>
        <li>Antes los componentes funcionales eran contenedores y/o tontos</li>
        <li>
          Hace que el peso sea menor, pero funciona igual con clase o funcional
        </li>
        <li>
          Los mas comunes son:{" "}
          <ol>
            {" "}
            <li> useState </li> <li> useEffect </li>{" "}
          </ol>
        </li>
        <li>
          Otros son:{" "}
          <ol>
            {" "}
            <li> useContext </li> <li> useRef </li> <li> useReducer </li>{" "}
            <li> useCallback </li> <li> useMemo </li>{" "}
          </ol>
        </li>
        <li>
          <b> Las clases confunden a las personas y a las máquinas. </b>
        </li>
      </ul>
    </>
  );
};

export default Hooks;
