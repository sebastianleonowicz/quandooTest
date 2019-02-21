import React, { Component } from 'react';
import './App.css';

const axios = require('axios');

class App extends Component {

  state = {
    componentArray: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/orgs/quandoo/repos')
      .then((response) => {
        this.createArrayOfComponents(response.data);
      })
      .catch((error) => {
        console.log('Whoops! Something went wrong :(', error);
      });
  }

  createArrayOfComponents (data) {
    console.log(data);
    const componentArray = data.map((data) => {
      return  <div>
                <ul>
                  <li>
                    <p>RepoName</p>
                    <span>Forked From</span>
                    <span>Description</span>
                    <ul>
                      <li>language</li>
                      <li>number of forks</li>
                      <li>appliable legal MIT/else</li>
                      <li>last update</li>
                    </ul>
                  </li>
                </ul>
              </div>
    });
    console.log('new data', componentArray);
    this.setState({
      componentArray: componentArray
    })
    console.log(this.state);
  }


  render() {
    return (
      <div className="App">
        <div>Component 2</div>
      </div>
    );
  }
}

export default App;
