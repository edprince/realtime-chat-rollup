import React, { Component } from 'react';
import io from 'socket.io-client';
import faker from 'faker';
import './Input.css';
const socket = io('192.168.1.110:8000/');

class Input extends Component {
  render() {
    return (
        <div id='post-msg' className="input-group">
          <textarea rows="1" id='msg-input' className="form-control custom-control" placeholder='Type message...'></textarea>     
          <div className='input-group-append'>
            <span onClick={sendMessage} className="input-group-text light-blue">Send</span>
          </div>
        </div>
    );
  }
}

function sendMessage() {
  console.log("Sending message...");
  let msgInput = document.getElementById("msg-input");
  let msg = msgInput.value;
  let avatar = faker.internet.avatar();
  let name = faker.name.firstName() + ' ' + faker.name.lastName();
  socket.emit('message-to-server', {msg: msg, sender: name, avatar: avatar});
  msgInput.value = '';
}

export default Input;
