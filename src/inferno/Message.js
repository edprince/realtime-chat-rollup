import '../common/Message.css';
import { Component } from 'inferno';
import * as utils from "../common/utils";

class Message extends Component {
  render() {
    return (
      <div className="message-container container">
        <div className="row">
          <div className="col-2">
            <img className='avatar' src={this.props.msg.avatar} />
          </div>
          <div className="col-10">
          <span className="subtext">{this.props.msg.sender}</span>
          <span className="date">{utils.formatDate(this.props.msg.date)}</span>
            <p className="message-body">{this.props.msg.msg}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
