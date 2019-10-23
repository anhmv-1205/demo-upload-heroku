var express = require('express');
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
var server = require('http').Server(app);
var io = require("socket.io")(server);
server.listen(3000);

var listUserInformation = []

io.on("connection", (socket) => {
    console.log("Connected with id" + socket.id);
    socket.on("client-send-user-information", (data) => {
        console.log(data);
        listUserInformation.push(data);
        io.sockets.emit("server-send-list-user-information", listUserInformation);
    });
});

app.get("/", (req, res) => {
    res.render("home");
});
