import io from 'socket.io-client';

// Should be able to get a good performance boost and decrease in bundle
// size if you switch this out for a regular WebSocket object.

const socket = io('192.168.1.110:8000/');

export default socket;
