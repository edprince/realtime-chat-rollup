import '../common/Message.css';
import { Component } from 'inferno';
import moment from 'moment';
import faker from 'faker';

let avatar = faker.internet.avatar();

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
          <span className="date">{moment.unix(this.props.msg.date).format('MMM Do HH:mm')}</span>
            <p className="message-body">{this.props.msg.msg}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Message;
