var socket = io.connect(':3000');
var opacity = 0;

document.getElementById("light_off").onclick = function(){

    socket.emit("eteindre");

}

document.getElementById("light_on").onclick = function(){

    opacity -= 0.05;
    document.getElementById("body").style.opacity = opacity;

}

socket.on("eteindre", function(){

    opacity += 0.05;
    document.getElementById("body").style.opacity = opacity;

});