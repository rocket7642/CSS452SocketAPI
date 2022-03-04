const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws, req) => {
  console.log(
    "Connection made with " + req.headers["x-forwarded-for"] ||
      req.socket.remoteAddress
  );

  ws.on("message", (message) => {
    console.log("Received: " + message);
    ws.send(message);
  });
});
