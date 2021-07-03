const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  // A connection has been made
  // send back a message
  ws.send("Hi client! You are now connected to me!");

  // listen to the message event
  // then log the received message
  ws.on("message", (message) => {
    console.log("New message from client: %s", message);
  });
});

console.log("WebSocket server ready at localhost:8080");
