const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
var audioPart=[];
var whichpart=0;

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', socket => {
console.log("Someone has conencted" + Date.now())



});
function getparts(id)
{

	return audioPart[whichpart];

}

function loadFile(response,filename){




response.writeHead(200, {'Content-Type': 'text/html'});
     fs.readFile('./'+filename, null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
      response.end();
       
       
       
    });


  
}

function sendTime() {
    io.emit('time', { time: new Date().toJSON() });
}
setInterval(sendTime, 10000);

socketio.on('connection', function(socket) {
    // Use socket to communicate with this particular client only, sending it it's own id
    socketio.emit('welcome', { message: 'Welcome!', id: socket.id });

    socketio.on('i am client', console.log);
});
const PORT =  3100;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

