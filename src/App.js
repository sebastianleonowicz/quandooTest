import React, { Component } from 'react';
import './App.css';
import Repository from './Components/Repository'

const axios = require('axios');

class App extends Component {

  state = {
    arrayCreated: false,
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
    const componentArray1 = data.map((data) => {
      return  <Repository repoName={data.name}
                          language={data.language} 
                          forks={data.forks}
                          updated={data.updatedAt}
                          license={data.spdx_id}
                          description={data.description}             
              ></Repository>
    });
    console.log('new data', componentArray1);
    this.setState({
      arrayCreated: true,
      componentArray: componentArray1
    })
    console.log(this.state);
  }


  render() {
    if(!this.state.arrayCreated) {
      return  <div className='App'>
                <p>array is yet to be created</p>
              </div>
    } else {
      return  <div className='repositoryList'>
                <h2 className='listHeader'>Repository List</h2>
                <ul className='repoList'>
                  {this.state.componentArray}
                </ul>
              </div>
    }
  }
}

export default App;
