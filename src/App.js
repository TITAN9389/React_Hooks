import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Hooks from './Hooks';
import Ap from './components/App';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <Hooks /> */}
          <Ap />
        </header>
      </div>
    );
  }
}

export default App;
