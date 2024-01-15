import "./App.css";
import Boton, { esOperador } from "./componentes/boton";
import Pantalla from "./componentes/pantalla";
import BotonClear from "./componentes/boton-clear";
import Titulo from "./componentes/titulo";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");

  const agregarInput = (valor) => {
    const maxLength = 21;

    let nuevaInput;
    if (input.length >= maxLength) {
      nuevaInput = input.substring(1) + valor;
    } else {
      nuevaInput = input + valor;
    }
    setInput((prevInput) => {
      if (esOperador(valor)) {
        const ultimoCaracter = prevInput.slice(-1);
        return esOperador(ultimoCaracter) ? prevInput.slice(0, -1) + valor : nuevaInput;
      } else {
        return nuevaInput;
      }
    });
  };

  const calcularResultado = () => {
    if (input) {
      try {
        const nuevoResultado = evaluate(input);
        setInput(nuevoResultado.toString());
      } catch (error) {
        alert("Error al calcular el resultado. Verifique la expresión.");
      }
    } else {
      alert("Ingrese valores para realizar un cálculo.");
    }
  };

  return (
    <div className="App">
      <Titulo texto="Calculadora con React" />
      <div className="contenedor-calculadora">
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClic={() => agregarInput("7")}>7</Boton>
          <Boton manejarClic={() => agregarInput("8")}>8</Boton>
          <Boton manejarClic={() => agregarInput("9")}>9</Boton>
          <Boton manejarClic={() => agregarInput("+")}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={() => agregarInput("4")}>4</Boton>
          <Boton manejarClic={() => agregarInput("5")}>5</Boton>
          <Boton manejarClic={() => agregarInput("6")}>6</Boton>
          <Boton manejarClic={() => agregarInput("-")}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={() => agregarInput("1")}>1</Boton>
          <Boton manejarClic={() => agregarInput("2")}>2</Boton>
          <Boton manejarClic={() => agregarInput("3")}>3</Boton>
          <Boton manejarClic={() => agregarInput("*")}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClic={() => agregarInput("0")}>0</Boton>
          <Boton manejarClic={() => agregarInput(".")}>.</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={() => agregarInput("/")}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={() => setInput("")}>Borrar</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;