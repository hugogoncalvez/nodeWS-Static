import express from "express";
import cors from 'cors';

//importar la base de datos
import db from './database/db.js';

//importar las rutas
import Routes from './routes/routes.js';


const app = express();

app.use(cors());
app.use(express.json());
app.use('/', Routes);

try {
    await db.authenticate();
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log(`No se pudo conectar a la DB : ${error}`)
}


app.get('/', (req, res) => {
    res.send('Server Node OnLine !!')
});


app.listen(8000, () => {
    console.log('Server UP running in http://localhost:8000/')
})