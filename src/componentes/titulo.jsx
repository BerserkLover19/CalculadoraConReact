import React from "react";
import "../estilos/titulo.css";

const Titulo = (props) => (
  <h1 className="titulo">
    {props.texto}
  </h1>
)

export default Titulo;