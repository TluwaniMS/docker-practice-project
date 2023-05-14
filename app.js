import express from 'express';
import morgan from 'morgan';

export const app = express();

app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.get('/api/access-end-point', (_, res) => {
  res.status(200).send({ message: 'The End-point has been accessed successfuly.' });
});
