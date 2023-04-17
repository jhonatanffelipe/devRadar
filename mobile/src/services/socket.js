import socketio from "socket.io-client";

const socket = socketio("http://192.168.0.12:3333", {
  autoConnect: false,
});

function subscribToNewDev(subscribeFunction) {
  socket.on("new-dev", subscribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  };
  socket.connect();
  socket.on("messege", (text) => {});
}

function disconnect() {
  if (socket.disconnect) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribToNewDev };
