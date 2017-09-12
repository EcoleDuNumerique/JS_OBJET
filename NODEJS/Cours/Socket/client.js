var socket = io.connect(':3000');
var opacity = 0;

document.getElementById("light_off").onclick = function(){

    socket.emit("eteindre");

}

document.getElementById("light_on").onclick = function(){

    opacity -= 0.05;
    document.getElementById("body").style.opacity = opacity;

}

document.getElementById("envoyer").onclick = function(){

    var message = document.getElementById("chat").value;
    socket.emit("message", {
        message : message
    });

}

socket.on("message", function(data){
    console.log(data.message);
    var html = document.getElementById("messages").innerHTML
    html += "<div>" + data.message + "</div>";
    document.getElementById("messages").innerHTML = html;

});

socket.on("eteindre", function(){

    opacity += 0.05;
    document.getElementById("body").style.opacity = opacity;

});