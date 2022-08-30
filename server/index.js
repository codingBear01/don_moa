import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const port = 8800;

const app = express();
dotenv.config();

/* mongoose */

/* middlewares */
app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log('connected to server successfully');
});
