const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });
let sockets = [];
let userID = 0;
wss.on("connection", (ws, req) => {
  sockets[userID] = ws;
  userID++;
  console.log(
    "Connection made with userID" +
      userID +
      " at " +
      new Date().toLocaleTimeString()
  );

  ws.on("message", (message) => {
    for (let socket of sockets) {
      socket.send(message);
    }
  });
});
