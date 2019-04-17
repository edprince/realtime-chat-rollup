import '../common/Input.css';
import { Component } from 'inferno';
import socket from '../common/socket';
import * as utils from "../common/utils";

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
  let avatar = utils.fakeAvatar();
  let name = utils.fakeName();
  socket.emit('message-to-server', {msg: msg, sender: name, avatar: avatar});
  msgInput.value = '';
}

export default Input;
