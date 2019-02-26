import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Landing />
        </header>
      </div>
    );
  }
}

export default App;
