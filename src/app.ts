import express from 'express'
import cors from 'cors'
import testDBConnections from './infrastructure/databases/dbConnections'
import { uuid } from 'uuidv4';
import socketio from "socket.io";
import http from 'http';
import { ExpressPeerServer } from 'peer';

const app = express()
const server = http.createServer(app);

app.set('view engine', 'ejs')

const mysocket = new socketio.Server(server, {
    cors: {
        origin: "*",
    }
});

const peerServer = ExpressPeerServer(server, {
    port: 3002
});


app.use('/peerjs', peerServer);
app.use(express.static('public'));
app.use(cors())


app.get('/', function (req, res) {
  res.redirect(`/${uuid()}`);
})

app.get('/:room', function (req, res) {
  res.render('room', { roomId: req.params.room });
})

mysocket.on("connection", (socket) => {
  socket.on("join-room", (roomId, userId, userName) => {
    socket.join(roomId);
    socket.to(roomId).emit("user-connected", userId);
    socket.on("message", (message) => {
      mysocket.to(roomId).emit("createMessage", message, userName);
    });
  });
});


server.listen(3002, () => {
  console.log('Server is running on port 3002')
})
// testDBConnections()

export default app
