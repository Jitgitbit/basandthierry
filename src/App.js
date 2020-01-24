import React from "react";
import "./App.css";

import RandomQuote from "./components/RandomQuote.jsx";
import Title from "./components/Title.jsx";
import SearchQuote from "./components/SearchQuote.jsx";
import CategoriesComponent from "./components/CategoriesComponent";
import LikeCounter from "./components/LikeCounter";

function App() {
  return (
   <main className="BackVideo"> 
     <div className="App">
        <Title /*src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt={'a'}*/ />
        <RandomQuote/>
        <LikeCounter/>
        <SearchQuote/>
        <CategoriesComponent/>
     </div>
    </main>

  );
}

export default App;
