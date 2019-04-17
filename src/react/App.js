import '../common/App.css';
import React, { Component } from  'react';
import 'bootstrap/dist/css/bootstrap.css';
import Board from "./Board";
import Input from "./Input";
import factorial from "../common/factorial";

console.log(factorial(1000));

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
