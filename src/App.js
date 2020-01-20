import React from "react";
import "./App.css";
import RandomQuote from "./components/RandomQuote";

function App() {
  return (
    <div className="App">
      <div className="categoryButtons">
        <button>button1</button>
        <button>button2</button>
        <button>button3</button>
        <button>button3</button>
      </div>
      <RandomQuote
        src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
        alt="foto"
      ></RandomQuote>
    </div>
  );
}

export default App;
