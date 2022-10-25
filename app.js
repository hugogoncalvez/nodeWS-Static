import express from "express";
import cors from 'cors';
import path from "path";
import { fileURLToPath } from "url";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
//import Sockets from "./sockets.js";

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

//importar la base de datos
import db from './database/db.js';

//importar las rutas
import Routes from './routes/routes.js';


const app = express();

app.use(cors());
app.use(express.json());
app.use('/', Routes, express.static(path.join(__dirname, 'dist')));

const server = http.createServer(app);
const httpServer = server.listen(8000);



const io = new WebSocketServer(httpServer);

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("message", () => {
    socket.broadcast.emit("message", {
      from: socket.id.slice(8)
    });
  });
});

try {
  await db.authenticate();
  console.log('Conexion exitosa a la DB')
} catch (error) {
  console.log(`No se pudo conectar a la DB : ${error}`)
}


app.get('*', (req, res) => {
   // res.send('Server Node OnLine !!')
   res.sendFile(path.join(__dirname, 'build', 'index.html'))
});


// app.listen(8000, () => {
//     console.log('Server UP running in http://localhost:8000/')
// })