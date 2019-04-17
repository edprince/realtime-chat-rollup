import React, { Component } from 'react';
import Message from './Message';
import io from 'socket.io-client';
import $ from 'jquery';
import './Board.css';



class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
    const socket = io('192.168.1.110:8000/');
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
