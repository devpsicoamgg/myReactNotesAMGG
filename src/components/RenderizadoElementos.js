import React, { Component } from "react";
import data from '../helpers/Data.json';

function ElementoLista(props) {
    return (
      <li>
        <p>Nombre: {props.nombre}</p>
        <p>Diagnóstico: {props.dx.descripcion}</p>
        <p>Gravedad: {props.gravedad}</p>
        <p>Tipo de intervención: {props.tipoIntervencion}</p>
        <hr></hr>
      </li>
    );
  }

  export default class RenderizadoElementos extends Component {
    render() {
      return (
        <>
          <div>
            <h2>Renderizado de Elementos con importación de datos.</h2>
            <p>Dtos que pueden venir importados, que pueden estar en el mismo archivo como opciones predeterminadas, etc. <br></br> 
            para el caso se crea un json y se importa. 
            </p>
            <ul>
              {data.ejemplos.map((el, indx) => (
                  <ElementoLista key={indx} {...el} />
                  ))}
            </ul>
          </div>
        </>
      );
    }
}
  