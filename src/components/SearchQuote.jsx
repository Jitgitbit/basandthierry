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
        setTimeout(() => {
          console.log(myJson)
          this.setState({
            results: myJson,
            loading: true,
          });
        }, 1000)   
      })
      .catch(err => 
        this.setState({
          error: true,
      }))
      
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
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="Search for..."
          value={this.state.query}
          onChange={this.handleInputChange}
        />
      </form>
    )
  }
}

