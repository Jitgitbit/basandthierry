//just a backup in case
import React, { Component } from 'react';

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
          if (myJson.result.length > 5) {
            limitedResults = myJson.result.splice(0, 5);
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
      <form onSubmit={this.handleSubmit}>
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

/*
{this.state.results.map(quote => {
       
     return  <ul>
                {quote.value} 
              </ul>

     })}
  */