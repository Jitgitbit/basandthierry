import React from "react";
import "./App.css";
<<<<<<< HEAD
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
=======
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
>>>>>>> 4a3ac8fb921d4065ee8c1538c8ee80c2c2c482fb
  );
}

export default App;
