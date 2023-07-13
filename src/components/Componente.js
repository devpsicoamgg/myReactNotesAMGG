import React, { Component } from "react";
import imagenUno from "../img/create-react-class1.png";
import imagenDos from "../img/create-react-class-sin-deses.png";
import imagenTres from "../img/create-react-class-direct.png";

class Componente extends Component {
  render() {
    return (
      <>
        <p>
          {" "}
          Un componente con clase es una clase de JavaScript que hereda
          funcionalidades de la clase base Component de React. <br></br>
          Permite definir la estructura y funcionalidad de una parte de la
          interfaz de usuario utilizando elementos JSX y métodos de la clase.{" "}
          <br></br>
          Los componentes con clase son la base para construir aplicaciones de
          React y ofrecen una forma organizada y reutilizable de desarrollar
          interfaces de usuario interactivas y dinámicas.{" "}
        </p>
        <ul>
          <summary>Generalidades Componentes con Class</summary>
          <bdo>01.- Un componente es una interfaz de usuario</bdo> <br />
          <bdo>
            02.- Con código de contenido (html) de presentación (css) y de
            funcionalidad (js)
          </bdo>{" "}
          <br />
          <bdo>
            03.- Puede tener o no estado (variables internas que lo controlen)
          </bdo>{" "}
          <br />
          <bdo>04.- Se le pueden pasar props</bdo> <br />
          <bdo>
            05.- El flujo de datos es unidireccional, solo de padre a hijo
          </bdo>{" "}
          <br />
          <bdo>06.- Se crea como js o jsx.</bdo> <br />
          <bdo>07.- Pueden hacerse componentes con clase o funciones</bdo>{" "}
          <br />
          <bdo>08.- Principio de divide y vencerás</bdo> <br />
          <bdo>09.- Las props se reciben en el constructor de la clase</bdo>
          <details>
            <summary>Construcción de un componente con class</summary>
            <bdo>01.- Crear carpeta llamada componentes</bdo> <br />
            <bdo>02.- Crear el archivo .js o .jsx</bdo> <br />
            <bdo>03.- Importar React</bdo> <br />
            <bdo>04.- Crear una clase que herede de Component</bdo> <br />
            <bdo>05.- Implementar el método render()</bdo> <br />
            <bdo>
              06.- Retornar los elementos JSX dentro de un fragmento o fragment
              (<>...</>)
            </bdo>{" "}
            <br />
            <bdo>07.- Exportar el componente como default</bdo> <br />
            <a
              href="https://es.react.dev/reference/react/Component"
              target="_blank"
              rel="noopener noreferrer"
            >
              06.- Documentación de React
            </a>
            <br />
            <bdo>
              {" "}
              <strong> CLASS DESTRUCTURADO EN EL IMPORT </strong> <br />{" "}
              <img src={imagenUno} alt="imagen uno" />{" "}
            </bdo>{" "}
            <br />
            <bdo>
              {" "}
              <strong>
                {" "}
                EN CLASS SIN DESESTRUCTURAR EN EL IMPORT{" "}
              </strong> <br /> <img src={imagenDos} alt="imagen uno" />{" "}
            </bdo>{" "}
            <br />
            <bdo>
              {" "}
              <strong> EN CLASS EXPORT DIRECTAMENTE </strong> <br />{" "}
              <img src={imagenTres} alt="imagen uno" />{" "}
            </bdo>{" "}
            <br />
          </details>
        </ul>
      </>
    );
  }
}

export default Componente;
