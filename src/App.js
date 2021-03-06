import React from "react";
import "./App.css";
import RandomQuote from "./components/RandomQuote.jsx";
import Title from "./components/Title.jsx";
import SearchQuote from "./components/SearchQuote.jsx";
import CategoriesComponent from "./components/CategoriesComponent";
import { Route } from "react-router-dom";


function App() {
  return (
   <main className="BackVideo"> 
     <div className="App">
        <Title /*src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" alt={'a'}*/ />
        {/* <RandomQuote/> */}
        {/* <SearchQuote/> */}
        <CategoriesComponent/>
        <Route exact path="/" component={RandomQuote} />
        <br/>
        <Route path="/searchQuotePage" component={SearchQuote} />
     </div>
    </main>

  );
}

export default App;