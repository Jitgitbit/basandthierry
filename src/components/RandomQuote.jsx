import React, { Component } from "react";

export default class RandomQuote extends Component {
  state = {
    loading: false,
    data : [],
    error: false,
  }
  
  getQuote() {
    
     fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(myJson => {
        setTimeout(() => {
          console.log(myJson)
          this.setState({
            data: myJson,
            loading: true,
          });
        }, 1000)   
      })
      .catch(err => 
        this.setState({
          error: true,
      }))
  }

  componentDidMount(){
    this.getQuote();
  }

  newQuote(){
    console.log('testing button', this);
    this.getQuote();
  }

  render() {
    const errorMessage = <h1>OOPSADAISY, ERRRRRRORRRR!!!</h1>
    if (this.state.loading) {
      return <div>
                <h3>Random Quote!!</h3>
                {this.state.data.value}
                <div>
                  {/* <button onClick={this.newQuote()}>Get another random quote!</button> */}
                  <button onClick={() => {this.newQuote()}}>Get another random quote!</button> {/* Look! adding the arrowfunction solved it! */}
                </div>
              </div>;
    } else if (this.state.error) {
      return <div>{errorMessage}</div>;
    } else {
      return <div>{'Loading.......Just give it one second!'}</div>;
    }
  }
};