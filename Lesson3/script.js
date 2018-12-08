function main() {
   var socket = io();
   var chatDiv = document.getElementById('chat');
   var input = document.getElementById('message');
   var button = document.getElementById('submit');
   var button2 = document.getElementById('Delete');
   function handleSubmit(evt) {
       var val = input.value;
       if (val != "") {
           socket.emit("send message", val);
       }
   }
   function handleDelete(evt) {
 
        socket.emit("Delete message", val);
}
   button.onclick = handleSubmit;

function handleMessage(msg) {
    var p = document.createElement('p');
    p.innerText = msg;
    chatDiv.appendChild(p);
    input.value = "";
}

socket.on('display message', handleMessage);
} // main closing bracket

window.onload = main;