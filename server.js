const express = require("express");
const socket = require("socket.io");

const app = express();

const server = app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.use(express.static("public"));

const io = socket(server);

io.on("connection", socket => {
  console.log("New socket connection");
  socket.on("chat", data => {
    io.sockets.emit("chat", data);
  });
});
