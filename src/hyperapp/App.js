import "../common/App.css";
import { h } from "hyperapp";
import Board from "./Board";
import Input from "./Input";

let App = (state, actions) => (
  <div className="App" oncreate={actions.listenForMessages}>
    <Board />
    <Input />
  </div>
);

export default App;
