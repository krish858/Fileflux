import express from 'express';
import { createServer } from 'http';
import { Server as SocketIOServer } from 'socket.io';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const httpServer = createServer(app);
const io = new SocketIOServer(httpServer,{
    cors: {
        origin: "*", 
        methods: ["GET", "POST"]
    }
}
);

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('create-room', (roomId: string) => {
        socket.join(roomId);
        console.log(`Room ${roomId} created and user joined`);
        //socket.emit('room-created', roomId);
    });

    socket.on('join', (roomId: string)=>{
        socket.join(roomId)
    })

    socket.on('join-room', (roomId: string) => {
        socket.join(roomId);
        console.log(`User joined room ${roomId}`);
        //socket.emit('room-joined', roomId);
        socket.emit('navSender',(roomId));
    });

    socket.on('send-message', (roomId: string, message: string) => {
        io.to(roomId).emit('receive-message', message);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');

    });
});

httpServer.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
