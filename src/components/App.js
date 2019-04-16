import React, { Component } from  'react';
import 'bootstrap/dist/css/bootstrap.css';
import Board from "./Board";
import Input from "./Input";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board />
        <Input />
      </div>
    );
  }
}

export default App;
