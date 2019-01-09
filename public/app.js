const socket = io.connect("http://localhost:5000");
const message = document.getElementById("message");
const messages = document.getElementById("messages");
const sendMsgBtn = document.getElementById("sendMsg");

sendMsgBtn.addEventListener("click", () => {
  socket.emit("chat", {
    message: message.value
  });
  document.querySelector("#message").value = "";
  document.getElementById("message").focus();
});

socket.on("chat", data => {
  messages.innerHTML += "<p>" + data.message + "</p>";
});
