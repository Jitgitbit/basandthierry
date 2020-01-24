import React from "react";
import "./App.css";
import RandomQuote from "./components/RandomQuote";
import sideBar from "./components/sideBar";

function App() {
  return (
    <div className="App">
      <div className="categoryButtons"></div>
      <RandomQuote
        src="https://assets.chucknorris.host/img/avatar/chuck-norris.png"
        alt="foto"
      ></RandomQuote>
    </div>
  );
}

export default App;
