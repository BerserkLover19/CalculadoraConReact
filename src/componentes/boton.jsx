import React from "react";
import "../estilos/boton.css";

export function esOperador(valor) {
  return isNaN(valor) && (valor !== ".") && (valor !== "=");
}

function Boton(props) {
  const esOperadorLocal = valor => {
    return esOperador(valor);
  };

  return (
    <button className={`contenedor-boton ${esOperadorLocal(props.children) ? "operador" : ""}`.trimEnd()} onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </button>
  );
}

export default Boton;
