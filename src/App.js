import { useState } from "react";
import "./App.css";

function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("");

  const onChangeLinea1 = function (e) {
    setLinea1(e.target.value);
  };
  const onChangeLinea2 = function (e) {
    setLinea2(e.target.value);
  };
  const onChangeImagen = function (e) {
    setImagen(e.target.value);
  };

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="fire">Casa en llamas</option>
        <option value="futurama">Futurama</option>
        <option value="history">History Channel</option>
        <option value="matrix">Matrix</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>{" "}
      <br />
      <input onChange={onChangeLinea1} type="text" placeholder="Linea 1" />
      <br />
      <input onChange={onChangeLinea2} type="text" placeholder="Linea 2" />
      <br />
      <button>Exportar</button>
      <br />
      <div>
        <span>{linea1}</span>
        <br />
        <span>{linea2}</span>
        <br />
        <img src={`/img/${imagen}.jpg`} />
      </div>
    </div>
  );
}

export default App;
