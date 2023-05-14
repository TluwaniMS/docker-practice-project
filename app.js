import express from 'express';
import morgan from 'morgan';

export const app = express();

const name = process.env.NAME || 'John'
const surname = process.env.SURNAME || 'Doe'

const message = `${name} ${surname} has accessed the end-point successfuly. :)`

app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/api/access-end-point', (_, res) => {
  console.log(message)
  
  res.status(200).send({ message: 'The End-point has been accessed successfuly.' });
});
