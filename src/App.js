import React from "react";
import "./App.css";
import RandomQuote from "./components/RandomQuote.jsx";
import Title from "./components/Title.jsx";
import SearchQuote from "./components/SearchQuote.jsx";
import CategoriesComponent from "./components/CategoriesComponent";

function App() {
  return (
    
    <main className="App">
        <Title src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt={'a'}/>
        <RandomQuote/>
        <SearchQuote/>
        <CategoriesComponent/>
    </main>
  );
}

export default App;
