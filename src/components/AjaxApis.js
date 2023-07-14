import React, { Component } from "react";
import NasaFoto from '../img/nasajpg.webp'

function Nasa(props) {
    return (
      <figure style={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <img
          src={props.foto}
          alt={props.explanation}
          style={{ maxWidth: "300px", maxHeight: "300px" }}
        />
        <figcaption style={{ marginLeft: "20px" }}>
          <div>{props.name}</div>
          <div>{props.explanation}</div>
        </figcaption>
      </figure>
    );
  }
  
  export default class AjaxApis extends Component {
    state = {
      foto: "",
      explanation: "",
      showContent: false, // Estado para mostrar/ocultar el contenido
    };
  
    componentDidMount() {
      let apiKey = '5GhXjLjGEa4XIjg5e2yadgEmHyB81wNZpe1SxXGR';
      let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            foto: data.url,
            explanation: data.explanation,
          });
        });
    }
  
    handleButtonClick = () => {
      this.setState((prevState) => ({
        showContent: !prevState.showContent,
      }));
    };
  
    render() {
      const { foto, explanation, showContent } = this.state;
      return (
        <>
            <h2> CONSUMO DE API DE LA <img src={NasaFoto} alt={"nasa foto"} style={{ width: "3%" }} /> - FOTO DEL DÍA </h2>
             <br />  
          <button onClick={this.handleButtonClick}>🌑🛰️🌌 📷 <b>FOTO DEL DÍA </b> 📷🌌🛰️🌑 </button>
          {showContent && (
            <Nasa foto={foto} explanation={explanation} />
          )}
        </>
      );
    }
  }
  