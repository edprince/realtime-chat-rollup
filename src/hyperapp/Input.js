import "../common/Input.css";
import { h } from "hyperapp";

let Input = (props) => (state, actions) => {
  let submit = () => {
    let input = document.getElementById("msg-input");
    actions.sendMessage(input.value);
    input.value = "";
  };

  return (
    <form id='post-msg' className="input-group">
      <textarea rows="1" id='msg-input' className="form-control custom-control" placeholder='Type message...'></textarea>     
      <div className='input-group-append'>
        <span onclick={submit} className="input-group-text light-blue">Send</span>
      </div>
    </form>
  );
};

export default Input;
