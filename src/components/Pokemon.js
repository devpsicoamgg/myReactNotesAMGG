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
        const pokemonPromises = json.results.map((result) =>
          fetch(result.url).then((res) => res.json())
        );

        Promise.all(pokemonPromises)
          .then((data) => {
            const pokemons = data.map((pokemon) => ({
              id: pokemon.id,
              name: pokemon.name,
              avatar: pokemon.sprites.front_default,
            }));

            this.setState({ pokemons });
          })
          .catch((error) => {
            console.log("Error fetching Pokémon data:", error);
          });
      })
      .catch((error) => {
        console.log("Error fetching Pokémon list:", error);
      });
  }

  render() {
    const { pokemons } = this.state;

    return (
      <>
        <h2>¿QUIÉN ES ESE POKÉMON?</h2>
        <ul>
          <li>Este ejercicio se realiza con la estructura ES7.</li>
          <li>API Pokémon.</li>
          <li> Al ver los conceptos básicos. </li>
          <li>TODO POR TEMA queda en el mismo modulo/archivo </li>
          <details>
            <summary>Paso a paso:</summary>
            <ol>
              <li>
                Se importa React y el componente Component desde la biblioteca
                de React.
              </li>
              <li>
                Se define el componente de función Poke que recibe las
                propiedades avatar y name y devuelve un elemento figure que
                muestra una imagen y un texto descriptivo.
              </li>
              <li>
                Se exporta por defecto la clase Pokemon que extiende Component.
              </li>
              <li>
                Se inicializa el estado del componente Pokemon con una propiedad
                pokemons vacía.
              </li>
              <li>
                Se implementa el método del ciclo de vida componentDidMount, que
                se ejecuta después de que el componente se monta en el DOM.
              </li>
              <li>
                Se realiza una solicitud fetch a la URL de la API de Pokémon.
              </li>
              <li>
                La respuesta se convierte a formato JSON y se procesa en una
                función de devolución de llamada.
              </li>
              <li>
                En la función de devolución de llamada, se crea una matriz de
                promesas para cada URL de pokémon obtenida de la respuesta.
              </li>
              <li>
                Se utiliza Promise.all para esperar a que todas las promesas se
                resuelvan y se obtengan los datos de cada pokémon.
              </li>
              <li>
                Los datos obtenidos se transforman en un nuevo arreglo de
                objetos pokemons que contiene las propiedades id, name y avatar
                de cada pokémon.
              </li>
              <li>
                Se actualiza el estado del componente Pokemon con la nueva
                matriz de pokemons.
              </li>
              <li>
                Si ocurre algún error durante la solicitud o el procesamiento de
                datos, se captura y se muestra un mensaje de error en la
                consola.
              </li>
              <li>
                En el método render(), se desestructura la propiedad pokemons
                del estado para acceder a la lista de pokémon.
              </li>
              <li>
                Se muestra un encabezado y una lista de puntos descriptivos.
              </li>
              <li>
                Se utiliza el método map en la lista de pokemons para generar un
                componente Poke para cada pokémon, pasando las propiedades name
                y avatar.
              </li>
              <li>
                Se muestra el resultado del mapeo dentro de un contenedor div.
              </li>
            </ol>
          </details>
        </ul>

        <br />
        <div className="App">
          {pokemons.map((ele) => (
            <Poke key={ele.id} name={ele.name} avatar={ele.avatar} />
          ))}
        </div>
      </>
    );
  }
}
