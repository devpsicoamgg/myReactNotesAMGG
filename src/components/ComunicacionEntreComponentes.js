import React, { Component } from "react";

export default class Padre extends Component {
  state = {
    contador: 0,
  };

  incrementarContador = (e) => {
    this.setState({
      contador: this.state.contador + 1,
    });
  };

  render() {
    return (
      <>
        <h2>8a. COMUNICACIÓN ENTRE COMPONENTES</h2>
        <summary>
          La comunicación entre componentes en React se refiere a la forma en
          que los distintos componentes de una aplicación React pueden
          intercambiar información, compartir datos y coordinar acciones entre
          sí. <br></br>
          En una aplicación de React, los componentes pueden representar
          diferentes partes o elementos de la interfaz de usuario. Estos
          componentes pueden estar relacionados entre sí, interactuar y depender
          unos de otros. <br></br>
          La comunicación entre componentes permite que estos interactúen y se
          comuniquen para lograr un comportamiento conjunto coherente. <br></br>
          La comunicación entre componentes es esencial para construir
          aplicaciones React más complejas, ya que permite que los componentes
          trabajen juntos como un sistema, compartiendo datos, eventos y
          actualizaciones. <br></br>
        </summary>
        <details>
          {" "}
          <summary> <strong> 👉🏼👉🏽👉🏾 GENERALIDADES 👈🏾👈🏽👈🏼 </strong> </summary>
          <ul>
            <li>
              <b>Comunicación mediante eventos:</b> Puedo utilizar eventos
              personalizados para comunicarme con otros componentes. Puedo
              emitir eventos y otros componentes pueden suscribirse a esos
              eventos para responder a ellos. Esto se puede lograr utilizando
              bibliotecas de manejo de eventos como EventEmitter o incluso
              mediante el uso de la API de eventos nativa de JavaScript.
            </li>
            <li>
              <b>Comunicación de padre a hijo (props):</b> Puedo recibir datos
              desde mi componente padre a través de las props. Mi componente
              padre define los datos y los pasa como props cuando me instancia.
              Luego, puedo acceder a esos datos y utilizarlos en mi renderizado.
            </li>
            <li>
              <b>Comunicación de hijo a padre (callbacks):</b> Puedo comunicarme
              con mi componente padre llamando a una función de callback que me
              ha sido pasada como prop. Mi componente padre define una función y
              me la pasa como prop. Puedo llamar a esa función cuando sea
              necesario para notificar eventos o enviar datos al componente
              padre.
            </li>
            <li>
              <b>
                Comunicación entre componentes no relacionados (patrón de
                elevación de estado):
              </b>{" "}
              Si tengo componentes que no están directamente relacionados (no
              son padre-hijo), pero aún necesito compartir datos entre ellos,
              podemos utilizar un componente padre común que contenga el estado
              compartido. Los componentes que necesiten acceder a esos datos se
              comunicarán a través del componente padre compartido.
            </li>
            <li>
              <b>Comunicación global (gestión de estado global):</b> Para
              compartir datos entre diferentes componentes en la aplicación,
              puedo utilizar herramientas como React Context o bibliotecas
              externas como Redux o MobX. Estas herramientas me permiten crear
              un estado global que puede ser accedido y modificado por
              diferentes componentes.
            </li>
          </ul>
        </details>

        <span>
          {" "}
          Contador <b> {this.state.contador} </b>{" "}
        </span>
        <span>
          {" "}
          <Hijo
            incrementarContador={this.incrementarContador}
            mensaje="Msj hijo 1"
          />{" "}
        </span>
        <span>
          {" "}
          <Hijo
            incrementarContador={this.incrementarContador}
            mensaje="Msj hijo 2"
          />{" "}
        </span>
      </>
    );
  }
}

function Hijo(props) {
  return (
    <>
      {" "}
      <p> {props.mensaje} </p>
      <button onClick={props.incrementarContador}> ➕ </button>
    </>
  );
}
