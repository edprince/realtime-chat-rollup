import '../common/Board.css';
import { Component } from 'inferno';
import Message from './Message';
import socket from '../common/socket';
import $ from 'jquery';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    socket.on('message-from-server', msg => {
      this.setState({messages: [...this.state.messages, msg]})
    });
  }

  componentDidMount() {
    $('#board').hide();
    $('#board').slideDown();
  }

  render() {
    return (
      <div id="board">
        {this.state.messages.map(msg => <Message msg={msg} />)}
      </div>
    );
  }
}

export default Board;
