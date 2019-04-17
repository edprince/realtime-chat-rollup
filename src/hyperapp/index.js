import "../common/index.css";
import { h, app } from "hyperapp";
import faker from 'faker';
import io from 'socket.io-client';
import view from "./App";

const socket = io('192.168.1.110:8000/');

// This is the state for the entire application. You make changes to it by
// calling the actions below from your components.

const state = {
  messages: []
}

// These actions can either return a new state (like addMessage does) or they
// can call other actions (like listenForMessages does).

const actions = {
  sendMessage(msg) {
    let avatar = faker.internet.avatar();
    let name = faker.name.firstName() + ' ' + faker.name.lastName();
    socket.emit('message-to-server', { msg, sender: name, avatar });
  },
  listenForMessages: () => (state, actions) => {
    socket.on('message-from-server', msg => actions.addMessage(msg));
  },
  addMessage: (msg) => (state, actions) => {
    return { messages: [...state.messages, msg] };
  }
}

app(state, actions, view, document.body);
