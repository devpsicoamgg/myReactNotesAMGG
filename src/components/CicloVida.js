import React, { Component } from "react";

export default class CicloDeVida extends Component {
  constructor(props) {
    super(props);
//    console.log(0, "EL COMPONENTE SE INICIALIZA, AUN NO ESTA EN EL DOM");
    this.state = {
      fecha: new Date().toLocaleDateString(),
      hora: new Date().toLocaleTimeString(),
    };
    this.temporizador = null;
  }

  componentDidMount() {
    this.detener();
//    console.log(1, "EL COMPONENTE YA ESTÁ EN EL DOM");
  }

  componentDidUpdate(prevProv, prevState) {
//   console.log(2, "EL ESTADO HA CAMBIADO");
//  console.log(prevProv);
// console.log(prevState);
  }

  tictac = () => {
    this.temporizador = setInterval(() => {
      this.setState({
        hora: new Date().toLocaleTimeString(),
      });
    }, 1000);
  };

  iniciar = () => {
    this.tictac();
  };

  detener = () => {
    clearInterval(this.temporizador);
  };

  render() {
 //   console.log(4, "EL COMPONENTE SE DIBUJA O REDIBUJA");
    return (
      <>
        <ol>
          <p>
            {" "}
            Refiere a las diferentes etapas o fases por las que pasa un
            componente desde su creación hasta su eliminación. Durante estas
            fases, React proporciona métodos especiales que permiten a los
            componentes controlar su comportamiento y realizar acciones
            específicas en momentos clave.
          </p>
          <li>
            Más recomendable utilizar Hooks y componentes funcionales para la
            gestión del ciclo de vida.
          </li>
          <li>Métodos especiales ofrecidos por React.</li>
          <li>Antes solo funcionaba con componentes de clase.</li>
          <li>
            Serie de fases o etapas por las que pasa un componente de clase
            desde su creación hasta su eliminación.
          </li>
          <li>
            Durante cada fase, se pueden ejecutar métodos específicos que
            permiten controlar el comportamiento y la interacción del componente
            con el entorno.
          </li>
          <li>
            Para este ejemplo se utilizará la sintaxis de la clase con el método
            constructor.
          </li>
          <li>
            <ol>
              <details>
                {" "}
                <summary> Momentos del ciclo de vida </summary>
                <li>
                  <u>
                    <strong>Montaje (Mounting):</strong>{" "}
                  </u>{" "}
                  Estos métodos se ejecutan cuando se crea un componente y se
                  inserta en el arbol del DOM. <br />
                  <strong> constructor(): </strong> Se ejecuta al crear la
                  instancia del componente, en el constructor puedes inicializar
                  el estado y enlazar manejadores de eventos. <br />{" "}
                  <strong> render(): </strong> Es el único método requerido,
                  cuando se ejecuta, examina el estado y las propiedades y
                  dibuja el componente en el árbol del DOM. <br />
                  <strong> componentDidMount(): </strong> Se invoca
                  inmediatamente después de que un componente se ha insertado al
                  árbol del DOM. Es útil para ejecutar suscripciones o
                  peticiones asíncronas a API's, bases de datos, servicios, etc.
                </li>
                <li>
                  <u>
                    {" "}
                    <strong>Actualización (Updating):</strong>{" "}
                  </u>
                  La actualización se refiere al proceso de modificar o
                  reemplazar una versión existente de un software, componente o
                  sistema con una versión más reciente. <br />
                  Estos métodos son ejecutados por cambios en el estado o las
                  propiedades de los componentes. <br />
                  <b>render(): </b> redibuja el componente cuando detecta
                  cambios en el estado o las propiedades del componente. <br />
                  <b> componentDidUpdate(): </b>Se ejecuta inmediatamente
                  después de que la actualización del estado o las propiedades
                  sucede, al igual que componenDidMount es un método ideal para
                  hacer peticiones externas.
                </li>
                <li>
                  <u>
                    {" "}
                    <strong>Desmontaje (Unmounting):</strong>{" "}
                  </u>{" "}
                  El desmontaje se refiere al proceso de desconectar o liberar
                  un recurso o dispositivo previamente montado de un sistema
                  operativo o entorno de software. <br />
                  <b> componentWillUnmount(): </b> Se ejecuta antes de destruir
                  el componente del árbol del DOM, es un método útil para hacer
                  tareas de limpieza.
                </li>
              </details>
            </ol>
          </li>
        </ol>

        <h2>
          Hoy es: {this.state.fecha} y son las: {this.state.hora} <br />
          <button onClick={this.iniciar}>INICIAR</button>
          <button onClick={this.detener}>DETENER</button>
        </h2>
      </>
    );
  }
}
