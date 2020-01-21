import React, { Component } from 'react'

export default class CategoriesComponent extends Component {
  state = {
    loading: false,
    data : [],
    error: false,
  }
  
  componentDidMount() {
    
    return fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(myJson => {
        setTimeout(() => {
          console.log(myJson)
          this.setState({
            data: myJson,
            loading: true,
          });
        }, 3000)   
      })
      .catch(err => 
        this.setState({
          error: true,
      }))
      
  }
  render() {
    const errorMessage = <h1>OOPSADAISY, ERRRRRRORRRR!!!</h1>
    if (this.state.loading) {
      return <div>
                <h3>The categories</h3>
                {this.state.data.value}
              </div>;
    } else if (this.state.error) {
      return <div>{errorMessage}</div>;
    } else {
      return <div>{'Loading.......Just give it three seconds!'}</div>;
    }

  }
}
