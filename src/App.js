import html2canvas from "html2canvas";
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
  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/jpg");
      var link = document.createElement("a");
      link.download = "meme.jpg";
      link.href = img;
      link.click();
    });
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
      <button onClick={onClickExportar}>Exportar</button>
      <br />
      <div className="meme" id="meme">
        <span id="span1">{linea1}</span>
        <br />
        <span id="span2">{linea2}</span>
        <br />
        <img src={`/img/${imagen}.jpg`} />
      </div>
    </div>
  );
}

export default App;
