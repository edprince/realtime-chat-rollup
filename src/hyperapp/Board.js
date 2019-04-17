import "../common/Board.css";
import { h } from "hyperapp";
import $ from "jquery";
import Message from "./Message";

let Board = (props) => (state) => (
  <div id="board" oncreate={() => {
    $('#board').hide();
    $('#board').slideDown();
  }}>
    {state.messages.map(msg => <Message msg={msg} />)}
  </div>
);

export default Board;
