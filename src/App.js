import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <input
        onChange={(element) => setText(element.target.value)}
        value={text}
      ></input>
    </div>
  );
}

export default App;
