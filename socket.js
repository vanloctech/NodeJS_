var socket_server_client = (server) => {
    //use socket.io
    var io = require("socket.io")(server);
    //event connection
    io.on("connection", function (client) {
        console.log("Co nguoi dang ket noi: " + client.id);

        client.on('chat message', function(msg){
            io.emit('chat message', client.id + ": " + msg);
        });

        client.on("disconnect", function () {
            console.log(client.id + " da thoat trang");
        })
    })
};

module.exports = socket_server_client;