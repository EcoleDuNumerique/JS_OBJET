var http = require('http');

var httpServer = http.createServer(function(req, res){

    res.end("Hello");

});
httpServer.listen(3000);

//
var io = require('socket.io').listen(httpServer);

io.sockets.on("connection", function( socket ){

    console.log("L'utilisateur " + socket.id + " regarde la page !");

    socket.on("eteindre", function(){
        
        socket.broadcast.emit("eteindre");

    });

});


