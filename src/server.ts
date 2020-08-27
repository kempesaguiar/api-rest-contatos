import express from 'express';
import cors from 'cors';
import router from './routes/routes';
import { Server } from 'http';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(router);

app.listen(3333);
console.log('Servidor na escuta na porta 3333');

export default Server;


