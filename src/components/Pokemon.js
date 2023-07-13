import React, { Component } from "react";

function Poke(props) {
  return (
    <figure>
    <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export default class Pokemon extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    let url = "https://pokeapi.co/api/v2/pokemon";
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        json.results.forEach((element) => {
          fetch(element.url)
            .then((res) => res.json())
            .then((json) => {
              console.log(json);
              let pokemon = {
                id:json.id,
                name:json.name,  
                avatar:json.sprites.front_default,
              };
              let pokemons = [...this.state.pokemons,pokemon];
                this.setState({ pokemons });

            });
        });
      });
  }

  render() {
    return (
      <>
        <h2> ¿QUIEN ES ESE POKEMON? </h2>
        <ul>
          <li> Este ejercicio se realiza con la estructura ES7. </li>
          <li> API Nasa. </li>
          <li>
            Al ver los conceptos básicos,{" "}
            <u>
              <b> TODO POR TEMA </b>
            </u>{" "}
            queda en módulo/archivo.
          </li>
        </ul>
        <br />
        {this.state.pokemons.map(ele => <Poke  key={ele.id} name={ele.name} avatar={ele.avatar} />)}
      </>
    );
  }
}