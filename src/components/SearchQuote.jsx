import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class SearchQuote extends Component {
  state = {
    query: '',
    results: [],
    loading: false,
  }

  getInfo = () => {
    
    fetch(`https://api.chucknorris.io/jokes/search?query=${this.state.query}`)
      .then(res => res.json())
      .then(myJson => {
          console.log(myJson)
          let limitedResults = myJson.result; //Watch out here! I had to indicate .result because of this particular API structure !!!
          if (myJson.result.length > 10) {
            limitedResults = myJson.result.splice(0, 10);
          }
          this.setState({
            results: limitedResults, 
            loading: true,
          });  
      })
      .catch(err => 
        console.log(err, "error")
        
      )
      
  }

  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      query: event.target.value,
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    console.log("search for this.state.query", this.state.query);
    this.getInfo()
  }

  searchOutput = () => {
    return this.state.results.map((quote, index) => {
      return <li key={index}>{quote.value}</li>;
    })
  }

  render() {
    console.log("what is my state", this.state);
    const quotesArray = this.searchOutput()
    console.log(quotesArray)
    return (
      <div>
        <Link to={ `/` } style={{color: 'white'}}>Back to random quotes</Link>
        <br/>
      <form onSubmit={this.handleSubmit}>
        <h2>Or search a quote here</h2>
        <input
          placeholder="Search for..."
          value={this.state.query}
          onChange={this.handleInputChange}
        />
      </form>
        <ul>
          {this.searchOutput()}
        </ul>
      </div>
    )
  }
}
