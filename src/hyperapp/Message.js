import "../common/Message.css";
import { h } from "hyperapp";
import moment from "moment";

let Message = (props) => (
  <div className="message-container container">
    <div className="row">
      <div className="col-2">
        <img className='avatar' src={props.msg.avatar} />
      </div>
      <div className="col-10">
      <span className="subtext">{props.msg.sender}</span>
      <span className="date">{moment.unix(props.msg.date).format('MMM Do HH:mm')}</span>
        <p className="message-body">{props.msg.msg}</p>
      </div>
    </div>
  </div>
);

export default Message;
