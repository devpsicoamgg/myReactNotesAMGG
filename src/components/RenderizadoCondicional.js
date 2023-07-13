import React, { Component } from "react";


function LoggIn () {
    return (
        <div> 
            <h3> Login 👍🏽 </h3>
        </div>
    )
}

function LogOut () {
    return (
        <div> 
            <h3> LogOut 👎🏽 </h3>
        </div>
    )
}

export default class RenderizadoCondicional extends Component { 
constructor (props) {
    super (props);
    this.state = {
        sesion: true,
    }
}

handleChange = (valor) => {
    this.setState({ sesion: valor === "true" });
  };

    render () {
        return <> <div> 
              <h2> 
                05.- RENDERIZADO CONDICIONAL. 
            </h2>         
            <h4> { this.state.sesion ? <LoggIn /> : <LogOut /> } </h4>
              <input type="text" onChange={e => this.handleChange(e.target.value) } placeholder="Introduce true o false" />  
                </div> </>
    }
}




