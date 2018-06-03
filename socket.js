var socket_server_client = (server) => {
    //use socket.io
    var io = require("socket.io")(server);
    //event connection
    var list = [];
    var i = 0;
    io.on("connection", function (client) {
        console.log("Co nguoi dang ket noi: " + client.id);
        list[i++] = client.id;
        client.on('chat message', function(msg){
            // console.log(msg.msgtex);
            // console.log(msg.coun);
            // console.log(msg.ele);
            // console.log(client.id);
            msg.coun += 1;
            io.emit('res message',msg);
            // console.log(list);
        });

        client.on("disconnect", function () {
            console.log(client.id + " da thoat trang");
        })
    })
};

module.exports = socket_server_client;