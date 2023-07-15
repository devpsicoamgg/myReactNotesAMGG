import React, { Component } from "react";

export default class Estado extends Component {
    constructor(props) {
        super(props)
        this.state = {
            contador: 40
        };
       /* setInterval(()=> {
        this.setState({
            contador: this.state.contador + 1
        })
        }, 1000); */
    }
    render () {
        return (
            <> <div> 
    <h2> <strong> 04.- STATES / ESTADOS SOLO CON CLASS - PROFUNDIZA EN FUNCIONAL.  </strong> </h2>
    <p> Un estado es conjunto de variables que va a tener la app e intervien en la modificación del componente segun su valor. <br></br>  
    Es inmutable. Al ser modificado se crea una copia, se agrega lo nuevo y se genera un nuevo estado  <br></br>
    No se puede modificar directamente. <br></br>
    Es asíncrono. <br></br>
    Descendente, de los padres a los hijos. <br></br>
    Para realizar cambios es necesario usar el setState. <br></br> 
    Un objeto que puede tener tantas propiedades como se necesiten <br></br> 
    Gracias a los hooks, los componentes basados en f() tienen un estado. <br></br>
    Para este modulo estado en class component pero no la mejor forma pues debe ser modularizado.  <br></br>
    En class el estado puede ser definido en el constructor y dentro de él las props que recibe, con el super (constructor del objeto del cual hereda de la clase Components -super(props);) <br></br>
    En la imegen se muestra como en un componente ingreso el estado que se va sumando cada segundo. <br></br>   
    </p>
    <p> {this.state.contador} </p> 
    <p> Ejemplo con setInterval para ver función pero genera error </p>   

    </div> </> 
    );
    }

}