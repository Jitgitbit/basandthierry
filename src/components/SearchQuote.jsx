import React, { Component } from 'react';

export default class SearchQuote extends Component {
  state = {
    query: '',
    results: [],
    loading: false,
  }

  getInfo = () => {
    
    return fetch(`https://api.chucknorris.io/jokes/search?query=${this.state.query}`)
      .then(res => res.json())
      .then(myJson => {
          console.log(myJson)
          this.setState({
            results: myJson.result, //Watch out here! I had to indicate .result because of this particular API structure !!!
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
      query: event.target.value
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    console.log("search for this.state.query", this.state.query);
    this.getInfo()
  }

  render() {
    console.log("what is my state", this.state);
    
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Search for..."
          value={this.state.query}
          onChange={this.handleInputChange}
        />
      </form>
     {this.state.results.map(quote => {
       return <p> {quote.value}</p>
     })}
      </div>
    )
  }
}

