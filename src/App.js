import React, { Component } from 'react';
import './App.css';

const axios = require('axios');

class App extends Component {

  componentDidMount() {
    axios.get('https://api.github.com/orgs/quandoo/repos')
      .then((response) => {
        console.log(response);
      })
  }

  render() {
    return (
      <div className="App">
        <div>
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
        <div>Component 2</div>
      </div>
    );
  }
}

export default App;
