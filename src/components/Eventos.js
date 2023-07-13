import React, { Component } from "react";

export  class EventosesES6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      inputText: "",
    };
    this.sumar = this.sumar.bind(this);
    this.restar = this.restar.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <>
        <h2>7a.- EVENTOS EN COMPONENTES DE CLASE ES6.</h2>
        <p>
          Los eventos son muy similares a HTML. <br />
          Existen diferentes formas de asignar eventos, los eventos funcionales
          estan más conexos con las hooks. Para este caso se utiliza el bind
          como método para manejo del contexto del this para ES6 (contextos en corchete).{" "}. <br></br>
          Este proceso es un bindeo del metodo en el constructor de la clase a la que pertenece. Este proceso aunque ya no es el mejor 
          se mejora con el ejemplo de abajo
          <br></br>
          En el segundo ejemplo se mostrará ejemplo de <b>ES7 </b>
          En los componentes de clase se debe bindear el this de la clase en la
          parte del constructor.
          <br></br>
          <b> NO RECOMENDABLE MONTAR EN ESTOS MODELOS PERO BUENO PARA MODELOS ANTIGUOS Y ENTENDER LA LOGICA. </b> 
        </p>
        <nav>
          <button onClick={this.restar}>
            <strong>➖</strong>
          </button>
          <button onClick={this.sumar}>
            <strong>➕</strong>
          </button>
          <input
            type="text"
            value={this.state.inputText}
            onChange={this.handleChange}
            placeholder="✍🏿 una frase..."
          />
        </nav>
        <h3>{this.state.contador}</h3>
        <h3> {this.state.inputText}</h3>
      </>
    );
  }

  sumar(e) {
    this.setState({
      contador: this.state.contador + 1,
    });
  }

  restar(e) {
    this.setState({
      contador: this.state.contador - 1,
    });
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value,
    });
  }
}

// Con properties inicializer. 


export  class EventosesES7 extends Component {
      state = {
      contador: Math.floor(Math.random() * 40),
    };
  
  render() {
    return (
      <>
        <h2>7b.- EVENTOS EN COMPONENTES DE CLASE ES7.</h2>
        <p>
          01.- Se borra el constructor. <br></br>
          02.- La idea de este segundo ejemplo es mostrar como aca el this hace referencia a la segunda clase y no a la primera. <br></br>
          0.- Ya no hay un constructor<br></br>
          0.- Estado propiedad de la clase sin la palabra this<br></br>
          0.- Los métodos de forma expresada en una arrow function se herea de la clase a la que pertenece. Lo que evita hacel el bindeo como esta en ES6<br></br>
          0.- Recordar que ahora es más por HOOKS y no por estos métods y formas en componentes de clase <br></br>
        
        </p>
        <nav>
          <button onClick={this.multiplicar}>
            <strong>✖️</strong>
          </button>
          <button onClick={this.dividir}>
            <strong>➗</strong>
          </button>
          
        </nav>
        <h3>{this.state.contador}</h3>
        
      </>
    );
  }

  // Arrow function.  

  dividir = (e) => {
    this.setState({
      contador: this.state.contador / 5,
    });
  }

  multiplicar = (e) => {
    this.setState({
      contador: this.state.contador * 2,
    });
  }

}


// MAS & MÁS SOBRE EVENTOS EN EL MISMO CAPITULO. 

/* function Boton (props) {
  return (<button
  onClick={props.myOnClick}
  > Boton componente </button>)
} */

/* const Boton = ( props ) => ( 
  <button onClick={props.myOnClick}
  > Boton componente </button>
) */ 

 const Boton = ( { myOnClick } ) => ( 
  <button onClick={myOnClick}
  > Boton componente </button>
) 



export class MasSobreEventos extends Component {
  handleClick = (e, mensaje) => {
    console.log(mensaje)
    

  }
  render() {
    return (
      <>
      <div>
        <h2>
          7c.- MÁS & MÁS SOBRE EVENTOS... 
        </h2>
        <ol>
          <li> La mayoría de los eventos de JS nativo estan en este tema de SyntheticEvent </li>
          <li> Capa adicional </li>
          <li> Eventos de teclado, click, formulario, scroll soportados </li>
          <li> Los atributos de eventos son para las etiquetas XSL  </li>
          <li> Si se quiere asignar un evento a un componente se debe agregar una prop y eso son eventos personalizados  </li>
        </ol>
        <button 
        onClick={(e)=>
        this.handleClick(e,"Hola, aca se pasa el parametro desde un evento")
        }
        > 
        Saludar 👋🏼
        </button> <br></br>
        {/* EVENTO PERSONALIZADO */}
        {/*<Boton 
        onClick={(e) => 
        this.handleClick(e,"Hola, aca se pasa el parametro desde un evento")
        }
      />*/}
        <Boton 
        myOnClick={(e) => 
        this.handleClick(e,"Hola, aca se pasa el parametro desde un evento")
        }
      />
      </div>
      
      </>
    )
  }
}