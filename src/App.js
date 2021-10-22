import { useState } from "react";
import "./App.css";
import QRCodeCanvas from "./QRCodeCanvas";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <p>Please type down your url to create your code</p>
      <input
        onChange={(element) => setText(element.target.value)}
        value={text}
      ></input>
      <QRCodeCanvas text={text}></QRCodeCanvas>
      <h6>developed by Ralph Guerrero</h6>
    </div>
  );
}

export default App;
